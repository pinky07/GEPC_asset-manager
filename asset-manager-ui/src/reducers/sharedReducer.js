import * as types from '../actions/types';

const INITIAL_STATE = {
  assetsAllocation: {
    name: '',
    mixes: [],
    elements: [],
    hasGrid: false,
  },
  assetAllocationCategories: [],
  assetCategories: {
    betaGroups: [],
    goalOriented: [],
    ldi: [],
    all: [],
  },
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
        assetCategories: {
          ...state.assetCategories,
          betaGroups: action.payload,
        },
      };
    }
    // case types.GET_ASSET_CATEGORIES_FROM_BETA_GROUPS_FAIL: {
    // }
    case types.GET_ASSET_CATEGORIES_FROM_GOAL_ORIENTED_SUCCESS: {
      return {
        ...state,
        assetCategories: {
          ...state.assetCategories,
          goalOriented: action.payload,
        },
      };
    }
    // case types.GET_ASSET_CATEGORIES_FROM_GOAL_ORIENTED_FAIL: {
    // }
    case types.GET_ASSET_CATEGORIES_FROM_LDI_SUCCESS: {
      return {
        ...state,
        assetCategories: {
          ...state.assetCategories,
          ldi: action.payload,
        },
      };
    }
    // case types.GET_ASSET_CATEGORIES_FROM_LDI_FAIL: {
    // }
    case types.GET_ALL_ASSET_CATEGORIES_SUCCESS: {
      return {
        ...state,
        assetCategories: {
          ...state.assetCategories,
          all: action.payload,
        },
      };
    }
    // case types.GET_ALL_ASSET_CATEGORIES_FAIL: {
    // }
    default: {
      return state;
    }
  }
};
