import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { toType } from '../../utils/utils';

import { Object as JsonObject } from '../index';

import PrimitiveType from '../PrimitiveType';
import ObjectName from '../ObjectName';

//icons
import { ArrowDown, ArrowRight } from '../Icons';

//increment 1 with each nested object & array
const DEPTH_INCREMENT = 1;
//single indent is 5px
const SINGLE_INDENT = 5;

const Meta = styled.span`
  color: rgb(165, 159, 133);
  border-radius: 3px;
  font-style: italic;
  padding-left: 10px;
`;

const Brace = styled.span`
  font-weight: bold;
  color: rgb(249, 248, 245);
`;

const Ellipsis = styled.span`
  color: rgb(253, 151, 31);
  font-size: 18px;
  line-height: 10px;
  cursor: pointer;
`;

type State = {
  expanded: Boolean;
};

type Props = {
  [name: string]: any;
};

class ObjectType extends React.Component<Props, State> {
  size: Number;
  objectType: string;
  selectedNameSpace: Boolean;
  constructor(props: Props) {
    super(props);
    const { namespace, jsonpath } = props;
    this.size = Object.keys(props.src).length;
    this.objectType = toType(props.src);
    this.selectedNameSpace = jsonpath.includes(namespace);
    this.state = {
      expanded: props.root ? true : false,
    };
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    const { expanded } = this.state;
    const { namespace, root, src } = this.props;
    // If another file is selected
    let fileChanged = false;
    if (root) {
      fileChanged =
        Object.keys(src).length !== Object.keys(nextProps.src).length;
      if (fileChanged) {
        this.objectType = toType(nextProps.src);
        this.size = Object.keys(nextProps.src).length;
      }
    }
    // Only updating if expanded or included in json path
    const isNamespaceIncluded = nextProps.jsonpath.includes(namespace);
    const isdiff = this.selectedNameSpace !== isNamespaceIncluded;
    this.selectedNameSpace = isNamespaceIncluded;
    return expanded !== nextState.expanded || isdiff || fileChanged;
  }

  toggleCollapsed = () => {
    this.setState({
      expanded: !this.state.expanded,
    });
  };

  getObjectContent = (depth: any, src: Object, props: Props) => {
    return this.renderObjectContents(src, props);
  };

  getEllipsis = () => {
    const { size } = this;

    if (size === 0) {
      return null;
    } else {
      return <Ellipsis onClick={this.toggleCollapsed}>...</Ellipsis>;
    }
  };

  getObjectMetaData = () => {
    return (
      <Meta>
        {this.size} item{this.size === 1 ? '' : 's'}
      </Meta>
    );
  };

  getBraceStart(objectType: String, expanded: Boolean) {
    const { root } = this.props;
    const IconComponent = expanded ? ArrowDown : ArrowRight;
    return (
      <span>
        <span
          onClick={() => this.toggleCollapsed()}
          style={{ cursor: 'pointer' }}
        >
          <IconComponent />
          {!root && <ObjectName {...this.props} />}
          <Brace>{objectType === 'array' ? '[' : '{'}</Brace>
        </span>
        {expanded ? this.getObjectMetaData() : null}
      </span>
    );
  }

  render() {
    const {
      depth,
      src,
      namespace,
      name,
      type,
      parentType,
      root,
      jsonpath,
      ...rest
    } = this.props;

    const { expanded } = this.state;
    let styles: any = {};
    if (!root) {
      styles.paddingLeft = this.props.indentWidth * SINGLE_INDENT;
      styles.borderLeft = '1px solid rgb(73, 72, 62)';
    }

    return (
      <div className={this.selectedNameSpace && 'container'} style={styles}>
        {this.getBraceStart(this.objectType, expanded)}
        {expanded
          ? this.getObjectContent(depth, src, {
              styles,
              ...rest,
            })
          : this.getEllipsis()}
        <span className='brace-row'>
          <Brace
            style={{
              paddingLeft: expanded ? '3px' : '0px',
            }}
          >
            {this.objectType === 'array' ? ']' : '}'}
          </Brace>
          {expanded ? null : this.getObjectMetaData()}
        </span>
      </div>
    );
  }

  getVariable = (name: string, value: string) => {
    return {
      name,
      value,
      type: toType(value),
    };
  };

  renderObjectContents = (variables: any, props: any) => {
    const { depth, namespace = '' } = this.props;
    const styles: any = {};
    const { objectType } = this;
    let elements: React.ReactNode[] = [],
      variable;
    let keys = Object.keys(variables || {});
    if (this.props.sortKeys) {
      keys = keys.sort();
    }
    keys.forEach((name) => {
      variable = this.getVariable(name, variables[name]);

      if (!variables.hasOwnProperty(name)) {
        return;
      } else if (variable.type === 'object' || variable.type === 'array') {
        elements.push(
          <JsonObject
            key={`${namespace}/${variable.name}`}
            depth={depth + DEPTH_INCREMENT}
            name={variable.name}
            src={variable.value}
            namespace={`${namespace}/${variable.name}`}
            parentType={objectType}
            type={this.objectType === 'array' ? 'array' : ''}
            {...props}
          />
        );
      } else {
        styles.paddingLeft = this.props.indentWidth * SINGLE_INDENT;
        elements.push(
          <PrimitiveType
            type={variable.type}
            value={variable.value}
            name={variable.name}
            styles={styles}
            parentType={objectType}
            namespace={`${namespace}/${variable.name}`}
            key={`${namespace}/${variable.name}`}
          />
        );
      }
    });
    return elements;
  };
}

const mapStateToProps = ({ jsonpath }: any) => ({
  jsonpath,
});

export default connect(mapStateToProps)(ObjectType);
