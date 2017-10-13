import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { ValueHeaderRenderer } from '../../../components/gridView/valueHeaderRenderer';

const props = {
  column: {
    colDef: {
      headerName: 'Header test',
    },
  },
  gridData: [],
};

describe('valueHeaderRenderer component', () => {
  let wrapper = shallow(<ValueHeaderRenderer {...props} />);

  it('renders correctly', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
