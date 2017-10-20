import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { NodeNameHeaderMenu } from '../../../components/gridView/nodeNameHeaderMenu';

let props = {
  addNodeFromGrid: jest.fn(),
};

describe('nodeNameHeaderMenu component', () => {
  let wrapper = shallow(<NodeNameHeaderMenu {...props} />);

  it('renders correctly', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  describe('when clicking an item', () => {
    beforeEach(() => {
      wrapper = shallow(<NodeNameHeaderMenu {...props} />);
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
