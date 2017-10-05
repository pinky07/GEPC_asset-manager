import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { Content } from '../../components/content';
import allocation from '../../data/allocations.json';

describe('content component', () => {
  const props = {
    isLoading: false,
    isTreeViewActive: false,
    showTreeView: jest.fn(),
    showGridView: jest.fn(),
    assetsAllocation: allocation,
    getAssetsAllocation: jest.fn(),
    getAllocationTree: jest.fn(),
    getAllocationGrid: jest.fn(),
  };
  let wrapper = shallow(<Content {...props} />);

  it('renders correctly', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
