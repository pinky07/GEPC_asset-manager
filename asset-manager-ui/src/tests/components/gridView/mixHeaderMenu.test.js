import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { MixHeaderMenu } from '../../../components/gridView/mixHeaderMenu';

let props = {
  addMix: jest.fn(),
  removeMix: jest.fn(),
};

describe('mixHeaderMenu component', () => {
  let wrapper = shallow(<MixHeaderMenu {...props} />);

  it('renders correctly', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  describe('when clicking an item', () => {
    beforeEach(() => {
      wrapper = shallow(<MixHeaderMenu {...props} />);
      wrapper.removeMix = jest.fn(() => {});
    });

    it('the first item should call the addMix function', () => {
      wrapper
        .find('Item')
        .at(0)
        .simulate('click');
      expect(props.addMix).toHaveBeenCalled();
    });

    it('the second item should call the removeMix function', () => {
      wrapper = shallow(<MixHeaderMenu {...props} />);
      wrapper.instance().removeMix = jest.fn();
      wrapper.instance().forceUpdate();
      wrapper
        .find('Item')
        .at(1)
        .simulate('click');
      expect(wrapper.instance().removeMix).toHaveBeenCalled();
    });
  });
});
