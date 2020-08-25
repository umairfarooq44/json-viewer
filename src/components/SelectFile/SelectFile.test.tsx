import React from 'react';
import { shallow } from 'enzyme';
import SelectFile from './SelectFile';

const props = {
  onFileSelect: () => {},
};

describe('SelectFile', () => {
  it('should render the component correctly', () => {
    const wrapper = shallow(<SelectFile {...props} />);
    expect(wrapper).not.toBeNull();
  });
  it('should return span if root', () => {
    const wrapper = shallow(<SelectFile {...props} />);
    wrapper.find('input').simulate('change', { target: { files: [] } });
    expect(wrapper.dive().children().last().text()).toEqual('Loading file...');
  });
  it('should return span if root', () => {
    const wrapper = shallow(<SelectFile {...props} />);
    const blob = new Blob(['foo'], { type: 'text/plain' });
    wrapper.find('input').simulate('change', { target: { files: [blob] } });
    expect(wrapper.dive().children().last().text()).toEqual('Loading file...');
  });
});
