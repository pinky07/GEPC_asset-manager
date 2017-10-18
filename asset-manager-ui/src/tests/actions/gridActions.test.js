import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as gridActions from '../../actions/gridActions';
import * as types from '../../actions/types';
import {
  allocationGrid as gridData,
  mixes,
  planAnalysisLens,
} from '../fixtures/grid';

jest.mock('../../model/assetsAllocationModel');
jest.mock('../../services/lookupService');
jest.mock('../../services/mixService');

describe('grid actions', () => {
  const createMockStore = configureMockStore([thunk]);
  const mockStore = {
    gridData: [],
    mixes: [],
    planAnalysisLens: [],
    allocationTree: {
      tree: [],
    },
    allocationGrid: {
      mixes,
    },
    shared: {
      assetsAllocation: {
        mixes,
      },
    },
  };

  let store = createMockStore({ ...mockStore });

  beforeEach(() => {
    store = createMockStore({ ...mockStore });
  });

  it('creates an async action to fetch the grid data', () => {
    const expectedActions = [
      {
        type: types.GET_GRID_SUCCESS,
        gridData,
        mixes,
      },
    ];

    return store.dispatch(gridActions.getAllocationGrid()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates an async action to fetch the plan analysis lens', () => {
    const expectedActions = [
      {
        type: types.GET_PLAN_ANALYSIS_SUCCESS,
        planAnalysisLens,
      },
    ];

    return store.dispatch(gridActions.getPlanAnalysisLens()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('dispatches an action to show the mix panel', () => {
    const expectedActions = [
      {
        type: types.SHOW_MIX_PANEL,
      },
    ];

    store.dispatch(gridActions.showMixPanel());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches an action to add a mix', () => {
    const expectedActions = [
      {
        type: types.ADD_MIX,
        mixes: ['Mix 2', ...mixes],
      },
    ];

    return store.dispatch(gridActions.addMix()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('dispatches an action to remove a mix', () => {
    const expectedActions = [
      {
        type: types.REMOVE_MIX,
        mixes: [],
      },
    ];
    const mixName = 'Mix 1';
    return store.dispatch(gridActions.removeMix(mixName)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('dispatches an action to remove a node from the grid', () => {
    const node = {
      title: 'test node',
    };
    const expectedActions = [
      {
        type: types.REMOVE_NODE_FROM_GRID,
        node,
      },
    ];
    store.dispatch(gridActions.removeNodeFromGrid(node));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
