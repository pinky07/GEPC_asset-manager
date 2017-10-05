import * as types from '../actions/types';

const INITIAL_STATE = {
  assetsAllocation: {
    name: '',
    mixes: [],
    elements: [],
    hasGrid: false,
  },
  isLoading: false,
  isTreeViewActive: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SHOW_LOADING:
      return { ...state, isLoading: true };
    case types.HIDE_LOADING:
      return { ...state, isLoading: false };
    case types.GET_ASSETS_ALLOCATION_SUCCESS:
      return {
        ...state,
        assetsAllocation: action.assetsAllocation,
        isTreeViewActive: !action.assetsAllocation.hasGrid,
      };
    case types.SHOW_TREE_VIEW:
      return { ...state, isTreeViewActive: true };
    case types.SHOW_GRID_VIEW:
      return { ...state, isTreeViewActive: false };
    default:
      return state;
  }
};
