import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as gridActions from '../../actions/gridActions';
import * as types from '../../actions/types';
import { allocationTree as tree } from '../fixtures/tree';

jest.mock('../../model/assetsAllocationModel');

describe('grid actions', () => {
  const createMockStore = configureMockStore([thunk]);
  const mockStore = {
    gridData: [],
    mixes: [],
  };
  let store = createMockStore({ ...mockStore });

  beforeEach(() => {
    store = createMockStore({ ...mockStore });
  });

  it('creates an async action to fetch the tree', () => {
    const expectedActions = [
      {
        type: types.GET_TREE_SUCCESS,
        tree,
      },
    ];

    return store.dispatch(gridActions.getAllocationTree()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('updates the tree', () => {
    const expectedActions = [
      {
        type: types.CHANGE_TREE,
        treeData: { ...tree },
      },
    ];

    store.dispatch(gridActions.updateTree({ ...tree }));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
