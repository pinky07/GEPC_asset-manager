import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { NodeNameCellMenu } from '../../../components/gridView/nodeNameCellMenu';

let props = {
  addNodeFromGrid: jest.fn(),
};

describe('nodeNameCellMenu component', () => {
  let wrapper = shallow(<NodeNameCellMenu {...props} />);

  it('renders correctly', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  describe('when clicking an item', () => {
    beforeEach(() => {
      wrapper = shallow(<NodeNameCellMenu {...props} />);
    });

    it('the first item should call the addNodeFromGrid function', () => {
      wrapper
        .find('Item')
        .at(0)
        .simulate('click');
      expect(props.addNodeFromGrid).toHaveBeenCalled();
    });
  });
});
