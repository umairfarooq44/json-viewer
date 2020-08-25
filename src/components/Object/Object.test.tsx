import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Object from './Object.container';

const defaultProps = {
  name: 'abc',
  depth: 0,
  indentWidth: 4,
  src: [],
};

describe('Object', () => {
  const initialState = { jsonpath: [] };
  const mockStore = configureStore();
  let store, wrapper, mountWrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(
      <Provider store={store}>
        <Object src={[]} />
      </Provider>
    );
    mountWrapper = shallow(
      <Provider store={store}>
        <Object src={[]} />
      </Provider>
    );
  });

  it('should render the component correctly', () => {
    expect(wrapper).not.toBeNull();
  });
  it('should have prop src', () => {
    expect(mountWrapper.dive().props().src).toEqual([]);
  });
});
