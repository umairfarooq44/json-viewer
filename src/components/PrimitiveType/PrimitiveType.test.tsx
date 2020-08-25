import React from 'react';
import { shallow } from 'enzyme';
import PrimitiveType from './PrimitiveType';

const defaultProps = {
  name: 'abc',
  parentType: '',
  styles: {},
  namespace: 'abc',
  jsonpath: [],
  type: 'string',
};

describe('PrimitiveType', () => {
  it('should render the component correctly', () => {
    const wrapper = shallow(<PrimitiveType {...defaultProps} value='abc' />);
    expect(wrapper).not.toBeNull();
  });
  it('should render boolean type', () => {
    const wrapper = shallow(
      <PrimitiveType {...defaultProps} value={true} type='boolean' />
    );
    expect(wrapper.find('span').text()).toEqual('true');
  });
  it('should render integer type', () => {
    const wrapper = shallow(
      <PrimitiveType {...defaultProps} value={34} type='integer' />
    );
    expect(wrapper.find('span').text()).toEqual('34');
  });
  it('should render float type', () => {
    const wrapper = shallow(
      <PrimitiveType {...defaultProps} value={34.5} type='float' />
    );
    expect(wrapper.find('span').text()).toEqual('34.5');
  });
  it('should render string type', () => {
    const wrapper = shallow(
      <PrimitiveType {...defaultProps} value={'string'} type='string' />
    );
    expect(wrapper.find('span').text()).toEqual('"string"');
  });
  it('should render null type', () => {
    const wrapper = shallow(
      <PrimitiveType {...defaultProps} value={true} type='null' />
    );
    expect(wrapper.find('span').text()).toEqual('NULL');
  });
  it('should render undefined type', () => {
    const wrapper = shallow(
      <PrimitiveType {...defaultProps} value={true} type='undefined' />
    );
    expect(wrapper.find('span').text()).toEqual('undefined');
  });
  it('should render nan type', () => {
    const wrapper = shallow(
      <PrimitiveType {...defaultProps} value={true} type='nan' />
    );
    expect(wrapper.find('span').text()).toEqual('NAN');
  });
  it('should render default type', () => {
    const wrapper = shallow(
      <PrimitiveType {...defaultProps} value={true} type='' />
    );
    expect(wrapper.find('span').text()).toEqual('true');
  });
});
