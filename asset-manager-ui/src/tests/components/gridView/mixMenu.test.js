import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { MixMenu } from '../../../components/gridView/mixMenu';

let props = {
  addMix: jest.fn(),
  removeMix: jest.fn(),
  isMixHeader: true,
  menuId: 'test',
  mixName: 'test',
};

describe('mixMenu component', () => {
  let wrapper = shallow(<MixMenu {...props} />);

  it('renders correctly', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  describe('when the isMixHeader prop is false', () => {
    beforeEach(() => {
      wrapper = shallow(<MixMenu {...props} isMixHeader={false} />);
    });

    it('renders correctly', () => {
      expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('the second item should be disabled', () => {
      expect(
        wrapper
          .find('Item')
          .at(1)
          .prop('disabled')
      ).toEqual(true);
    });
  });

  describe('when clicking an item', () => {
    beforeEach(() => {
      wrapper = shallow(<MixMenu {...props} />);
    });

    it('the first item should call the addMix function', () => {
      wrapper
        .find('Item')
        .at(0)
        .simulate('click');
      expect(props.addMix).toHaveBeenCalled();
    });

    it('the second item should call the removeMix function', () => {
      wrapper
        .find('Item')
        .at(1)
        .simulate('click');
      expect(props.removeMix).toHaveBeenCalled();
    });
  });
});
