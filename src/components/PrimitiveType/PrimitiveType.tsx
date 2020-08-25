import React from 'react';
import ObjectName from '../ObjectName';

interface PrimitiveTypeProps {
  type: string;
  name: string;
  styles: any;
  parentType: string;
  namespace: string;
  jsonpath: string[];
  value: string | Number | null | undefined;
}

class PrimitiveType extends React.Component<PrimitiveTypeProps> {
  constructor(props: PrimitiveTypeProps) {
    super(props);
    const { namespace, jsonpath } = props;
    this.selectedNameSpace = jsonpath.includes(namespace);
    this.color = 'white';
  }
  selectedNameSpace: Boolean;
  color: string;
  shouldComponentUpdate(nextProps: PrimitiveTypeProps) {
    const { namespace } = this.props;
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
      default:
        return JSON.stringify(value);
    }
  };
  render() {
    const { styles, parentType, name, namespace } = this.props;
    const borderLeft = '1px solid rgb(73, 72, 62)';
    const value = this.formatValue();
    return (
      <div
        className={this.selectedNameSpace ? 'container' : ''}
        style={{ ...styles, borderLeft }}
      >
        <ObjectName name={name} parentType={parentType} namespace={namespace} />
        <span className='object-value' style={{ color: this.color }}>
          {value}
        </span>
      </div>
    );
  }
}

export default PrimitiveType;
