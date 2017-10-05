import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { NodeNameCellRenderer } from '../../../components/gridView/nodeNameCellRenderer';

const props = {
  value: 'test value',
  searchNode: jest.fn(),
  showTreeView: jest.fn(),
};

describe('NodeNameCellRenderer component', () => {
  let wrapper = shallow(<NodeNameCellRenderer {...props} />);

  it('renders correctly', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
