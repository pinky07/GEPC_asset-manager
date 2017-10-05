import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { GridContextMenu } from '../../../components/gridView/gridContextMenu';

let props = {
  addNodeFromGrid: jest.fn(),
};

describe('gridContextMenu component', () => {
  let wrapper = shallow(<GridContextMenu {...props} />);

  it('renders correctly', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  describe('when clicking an item', () => {
    beforeEach(() => {
      wrapper = shallow(<GridContextMenu {...props} />);
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
