import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { NodeNameHeaderRenderer } from '../../../components/gridView/nodeNameHeaderRenderer';

let props = {
  column: {
    colDef: {
      headerName: 'Header test',
    },
    addEventListener: jest.fn(),
  },
  progressSort: jest.fn(),
};

describe('nodeNameHeaderRenderer component', () => {
  let wrapper = shallow(<NodeNameHeaderRenderer {...props} />);

  it('renders correctly', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
