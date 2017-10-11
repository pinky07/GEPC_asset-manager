import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { NodeDetails } from '../../../components/treeView/nodeDetails';

const props = {
  // From store
  assetAllocationCategories: {
    betaGroups: [],
    goalOriented: [],
    ldi: [],
    all: [],
  },
  assetAllocationModelingBenchmarks: [],
  isLoading: false,
  selectedNode: {
    node: {
      policy_value: '100',
      actual_mv: '0.8',
      accountgroupshortname: 'abc',
      accountgroupname: 'test selected node',
    },
  },
  // Actions
  updateDetailsNode: jest.fn(),
  getAllAssetCategories: jest.fn(),
  getAllAssetAllocationModelingBenchmarks: jest.fn(),
};

describe('nodeDetails component', () => {
  let wrapper = shallow(<NodeDetails {...props} />);
  wrapper.setProps({ ...props });

  it('renders correctly', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
