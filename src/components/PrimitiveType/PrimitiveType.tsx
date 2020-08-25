import React from 'react';
import { connect } from 'react-redux';
import ObjectName from '../ObjectName';

interface PrimitiveTypeProps {
  type: String;
  name: String;
  styles: any;
  parentType: String;
  namespace: String;
  jsonpath: object[];
  value: Date | String | Number | any;
}

const dateOptions = {
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
};

class PrimitiveType extends React.Component<PrimitiveTypeProps> {
  constructor(props: PrimitiveTypeProps) {
    super(props);
    const { namespace, jsonpath } = props;
    this.selectedNameSpace = jsonpath.includes(namespace);
    this.color = 'white';
  }
  selectedNameSpace: Boolean;
  color: any;
  shouldComponentUpdate(nextProps: PrimitiveTypeProps) {
    const { namespace } = this.props;
    console.log(nextProps.jsonpath, namespace);
    const isNamespaceIncluded = nextProps.jsonpath.includes(namespace);
    const isdiff = this.selectedNameSpace !== isNamespaceIncluded;
    this.selectedNameSpace = isNamespaceIncluded;
    return isdiff;
  }
  formatValue = () => {
    const { type, value } = this.props;
    switch (type) {
      case 'string':
        this.color = 'rgb(224, 148, 72)';
        return `"${value}"`;
      case 'integer':
        this.color = 'rgb(57, 113, 237)';
        return value;
      case 'float':
        this.color = 'rgb(57, 113, 237)';
        return value;
      case 'boolean':
        this.color = 'rgb(249, 150, 226)';
        return value ? 'true' : false;
      case 'null':
        return 'NULL';
      case 'nan':
        return 'NAN';
      case 'undefined':
        return 'undefined';
      case 'date':
        this.color = 'rgb(59, 72, 227)';
        return value.toLocaleTimeString('en-us', dateOptions);
      case 'regexp':
        return value.toString();
      case 'function':
        return value.toString();
      default:
        return JSON.stringify(value);
    }
  };
  render() {
    const { styles, parentType, name } = this.props;
    const borderLeft = '1px solid rgb(73, 72, 62)';
    const value = this.formatValue();
    return (
      <div
        className={this.selectedNameSpace && 'container'}
        style={{ ...styles, borderLeft }}
      >
        <ObjectName name={name} parentType={parentType} />
        <span className='object-value' style={{ color: this.color }}>
          {value}
        </span>
      </div>
    );
  }
}
const mapStateToProps = ({ jsonpath }: any) => ({
  jsonpath,
});

export default connect(mapStateToProps)(PrimitiveType);
