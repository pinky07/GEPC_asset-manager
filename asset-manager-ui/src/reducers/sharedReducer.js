import * as types from '../actions/types';

const INITIAL_STATE = {
  assetsAllocation: {
    name: '',
    mixes: [],
    elements: [],
    hasGrid: false,
  },
  assetAllocationCategories: {
    betaGroups: [],
    goalOriented: [],
    ldi: [],
    all: [],
  },
  assetAllocationModelingBenchmarks: [],
  isLoading: false,
  isTreeViewActive: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SHOW_LOADING: {
      return { ...state, isLoading: true };
    }
    case types.HIDE_LOADING: {
      return { ...state, isLoading: false };
    }
    // case types.SAVE_ASSETS_ALLOCATION_SUCCESS: {
    // }
    // case types.SAVE_ASSETS_ALLOCATION_FAIL: {
    // }
    // case types.SAVE: {
    // }
    case types.GET_ASSETS_ALLOCATION_SUCCESS: {
      return {
        ...state,
        assetsAllocation: action.assetsAllocation,
        isTreeViewActive: !action.assetsAllocation.hasGrid,
      };
    }
    // case types.GET_ASSETS_ALLOCATION_FAIL: {
    // }
    case types.SHOW_TREE_VIEW: {
      return { ...state, isTreeViewActive: true };
    }
    case types.SHOW_GRID_VIEW: {
      return { ...state, isTreeViewActive: false };
    }
    case types.GET_ASSET_CATEGORIES_FROM_BETA_GROUPS_SUCCESS: {
      return {
        ...state,
        assetAllocationCategories: {
          ...state.assetAllocationCategories,
          betaGroups: action.payload,
        },
      };
    }
    // case types.GET_ASSET_CATEGORIES_FROM_BETA_GROUPS_FAIL: {
    // }
    case types.GET_ASSET_CATEGORIES_FROM_GOAL_ORIENTED_SUCCESS: {
      return {
        ...state,
        assetAllocationCategories: {
          ...state.assetAllocationCategories,
          goalOriented: action.payload,
        },
      };
    }
    // case types.GET_ASSET_CATEGORIES_FROM_GOAL_ORIENTED_FAIL: {
    // }
    case types.GET_ASSET_CATEGORIES_FROM_LDI_SUCCESS: {
      return {
        ...state,
        assetAllocationCategories: {
          ...state.assetAllocationCategories,
          ldi: action.payload,
        },
      };
    }
    // case types.GET_ASSET_CATEGORIES_FROM_LDI_FAIL: {
    // }
    case types.GET_ALL_ASSET_CATEGORIES_SUCCESS: {
      return {
        ...state,
        assetAllocationCategories: {
          ...state.assetAllocationCategories,
          all: action.payload,
        },
      };
    }
    // case types.GET_ALL_ASSET_CATEGORIES_FAIL: {
    // }

    case types.GET_ALL_ASSET_ALLOCATION_MODELING_BENCHMARKS_SUCCESS: {
      return {
        ...state,
        assetAllocationModelingBenchmarks: action.payload,
      };
    }
    // case types.GET_ALL_ASSET_ALLOCATION_MODELING_BENCHMARKS_FAIL: {
    // }
    default: {
      return state;
    }
  }
};
