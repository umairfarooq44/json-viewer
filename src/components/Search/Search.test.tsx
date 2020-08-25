import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from './Search';

const props = {
  json: [],
  getPath: () => {},
};

describe('Search', () => {
  it('should render the component correctly', () => {
    const wrapper = shallow(<Search {...props} />);
    expect(wrapper).not.toBeNull();
  });
  it('should have prop json', () => {
    const wrapper = mount(<Search {...props} />);
    expect(wrapper.prop('json')).toEqual([]);
  });
});
