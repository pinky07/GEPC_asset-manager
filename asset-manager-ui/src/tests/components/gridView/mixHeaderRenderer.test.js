import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { MixHeaderRenderer } from '../../../components/gridView/mixHeaderRenderer';

const props = {
  column: {
    colDef: {
      headerName: 'Mix 1',
    },
  },
  showMixPanel: jest.fn(),
};

describe('mixHeaderRenderer component', () => {
  let wrapper = shallow(<MixHeaderRenderer {...props} />);

  it('renders correctly', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
