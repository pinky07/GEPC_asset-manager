import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { TreeView } from '../../../components/treeView/treeView';

const props = {
  tree: {
    name: '',
    data: [],
  },
  selectedNode: {},
  getAllocationTree: jest.fn(),
  saveAllocationTree: jest.fn(),
  selectNode: jest.fn(),
  updateTree: jest.fn(),
};

describe('treeView component', () => {
  let wrapper = shallow(<TreeView {...props} />);

  it('renders correctly', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
