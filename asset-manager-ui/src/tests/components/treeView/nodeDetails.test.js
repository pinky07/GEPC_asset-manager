import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { NodeDetails } from '../../../components/treeView/nodeDetails';
import { selectedNode } from '../../fixtures/tree';

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
  selectedNode: { ...selectedNode },
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

  describe('when clicking an item', () => {
    beforeEach(() => {
      wrapper = shallow(<NodeDetails {...props} />);
      wrapper.setProps({ ...props });
    });

    it('the first select should call the updateDetailsNode function', () => {
      wrapper
        .find('Select')
        .at(0)
        .simulate('change');
      expect(props.updateDetailsNode).toHaveBeenCalled();
    });

    it('the second select should call the updateDetailsNode function', () => {
      wrapper
        .find('Select')
        .at(1)
        .simulate('change');
      expect(props.updateDetailsNode).toHaveBeenCalled();
    });
  });
});
