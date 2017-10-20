import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { ValueHeaderRenderer } from '../../../components/gridView/valueHeaderRenderer';

let props = {
  column: {
    colDef: {
      headerName: 'Header test',
    },
    addEventListener: jest.fn(),
  },
  gridData: [],
  enableSorting: true,
  progressSort: jest.fn(),
  setSort: jest.fn(),
  displayName: 'test name',
};

describe('valueHeaderRenderer component', () => {
  let wrapper = shallow(<ValueHeaderRenderer {...props} />);

  it('renders correctly', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  describe('when there is items at gridData', () => {
    beforeEach(() => {
      props.gridData = [1];
      wrapper = shallow(<ValueHeaderRenderer {...props} />);
    });

    it('should renders correctly', () => {
      expect(toJSON(wrapper)).toMatchSnapshot();
    });
  });
});
