import React from 'react';
import { shallow } from 'enzyme';
import ObjectName from './ObjectName';

describe('ObjectName', () => {
  it('should render the component correctly', () => {
    const wrapper = shallow(<ObjectName name='abc' />);
    expect(wrapper).not.toBeNull();
  });
  it('should return span if root', () => {
    const wrapper = shallow(<ObjectName root />);
    expect(wrapper.find('span').length).toEqual(1);
  });
  it('should return two span if array', () => {
    const wrapper = shallow(<ObjectName name='object' parentType='array' />);
    expect(wrapper.dive().find('span').length).toEqual(2);
  });
  it('should return five span if not array', () => {
    const wrapper = shallow(<ObjectName name='object' />);
    expect(wrapper.dive().find('span').length).toEqual(5);
  });
});
