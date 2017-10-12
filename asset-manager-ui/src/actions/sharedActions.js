import * as types from './types';
import assetsAllocationModel from '../model/assetsAllocationModel';
import lookupService from '../services/lookupService';

/**
 * Displays a loading spinner
 */
export const showLoading = () => {
  return dispatch => {
    dispatch({ type: types.SHOW_LOADING });
  };
};

/**
 * Hides the loading spinner
 */
export const hideLoading = () => {
  return dispatch => {
    dispatch({ type: types.HIDE_LOADING });
  };
};

/**
 * Saves everything to the backend
 */
export const saveAssetsAllocation = assetsAllocation => {
  return dispatch => {
    return assetsAllocationModel()
      .save(assetsAllocation)
      .then(() => {
        dispatch({ type: types.SAVE_ASSETS_ALLOCATION_SUCCESS });
      });
  };
};

/**
 * Gets the assets allocation from the model
 */
export const getAssetsAllocation = () => {
  return dispatch => {
    return assetsAllocationModel()
      .get()
      .then(assetsAllocation => {
        if (assetsAllocation) {
          dispatch({
            type: types.GET_ASSETS_ALLOCATION_SUCCESS,
            assetsAllocation,
          });
        }
      });
  };
};

/**
 * Dispatches an action to download all Asset Categories
 * from 'Beta Groups'.
 */
export const getAssetCategoriesFromBetaGroups = () => {
  return dispatch => {
    return lookupService()
      .getAssetCategoriesFromBetaGroups()
      .then(betaGroups =>
        dispatch({
          type: types.GET_ASSET_CATEGORIES_FROM_BETA_GROUPS_SUCCESS,
          payload: betaGroups,
        })
      );
  };
};

/**
 * Dispatches an action to download all Asset Categories
 * from 'Goal Oriented'.
 */
export const getAssetCategoriesFromGoalOriented = () => {
  return dispatch => {
    return lookupService()
      .getAssetCategoriesFromGoalOriented()
      .then(goalOriented =>
        dispatch({
          type: types.GET_ASSET_CATEGORIES_FROM_GOAL_ORIENTED_SUCCESS,
          payload: goalOriented,
        })
      );
  };
};

/**
 * Dispatches an action to download all Asset Categories
 * from 'LDI'.
 */
export const getAssetCategoriesFromLDI = () => {
  return dispatch => {
    return lookupService()
      .getAssetCategoriesFromLDI()
      .then(ldi => {
        dispatch({
          type: types.GET_ASSET_CATEGORIES_FROM_LDI_SUCCESS,
          payload: ldi,
        });
      });
  };
};

/**
 * Retrieves Asset Allocation Categories from the backend and dispatches an
 * action with the retrieved data.
 */
export const getAllAssetCategories = () => {
  return dispatch => {
    return lookupService()
      .getAllAssetCategories()
      .then(all => {
        dispatch({
          type: types.GET_ALL_ASSET_CATEGORIES_SUCCESS,
          payload: all,
        });
      });
  };
};

/**
 * Retrieves Asset Allocation Modeling Benchmarks from the backend and dispatches an
 * action with the retrieved data.
 */
export const getAllAssetAllocationModelingBenchmarks = () => {
  return dispatch => {
    return lookupService()
      .getAllAssetAllocationModelingBenchmarks()
      .then(all => {
        dispatch({
          type: types.GET_ALL_ASSET_ALLOCATION_MODELING_BENCHMARKS_SUCCESS,
          payload: all,
        });
      });
  };
};

/**
 * Dispatches action for activating the tree view
 */
export const showTreeView = () => {
  return dispatch => {
    dispatch({ type: types.SHOW_TREE_VIEW });
  };
};

/**
 * Dispatches action for activating the grid view
 */
export const showGridView = () => {
  return dispatch => {
    dispatch({ type: types.SHOW_GRID_VIEW });
  };
};
