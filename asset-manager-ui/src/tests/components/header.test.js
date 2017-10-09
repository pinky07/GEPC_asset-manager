import { mount } from 'enzyme';
import React from 'react';
import toJSON from 'enzyme-to-json';

import { Header } from '../../components/header';
import { spotFire } from '../fixtures/spotfire';

let props = {
  ...spotFire,
  saveAssetsAllocation: jest.fn(),
};

describe('header component', () => {
  let wrapper = mount(<Header {...props} />);

  it('renders correctly', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
