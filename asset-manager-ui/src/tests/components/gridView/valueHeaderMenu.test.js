import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { ValueHeaderMenu } from '../../../components/gridView/valueHeaderMenu';

let props = {
  addMix: jest.fn(),
};

describe('valueHeaderMenu component', () => {
  let wrapper = shallow(<ValueHeaderMenu {...props} />);

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

  describe('when clicking an item', () => {
    beforeEach(() => {
      wrapper = shallow(<ValueHeaderMenu {...props} />);
    });

    it('the first item should call the addMix function', () => {
      wrapper
        .find('Item')
        .at(0)
        .simulate('click');
      expect(props.addMix).toHaveBeenCalled();
    });
  });
});
