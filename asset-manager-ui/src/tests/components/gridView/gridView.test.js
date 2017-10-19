import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import { GridView } from '../../../components/gridView/gridView';

const props = {
  tree: {},
  gridData: [],
  mixes: [],
  planAnalysisLens: ['test1', 'test2'],
  selectPlanAnalysis: jest.fn(),
  getPlanAnalysisLens: jest.fn(),
  getAllocationGrid: jest.fn(),
  removeNodeFromGrid: jest.fn(),
};

describe('gridView component', () => {
  let wrapper = shallow(<GridView {...props} />);

  it('renders correctly', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
