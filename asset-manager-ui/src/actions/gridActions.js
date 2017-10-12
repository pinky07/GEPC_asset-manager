import * as types from './types';
import lookupService from '../services/lookupService';
import assetsAllocationModel from '../model/assetsAllocationModel';

export const getAllocationGrid = () => {
  return (dispatch, getState) => {
    const { tree } = getState().allocationTree;
    console.log(getState().allocationGrid.mixes);
    return assetsAllocationModel()
      .getGrid(tree.data)
      .then(gridData => {
        if (gridData) {
          let mixes = [];
          if (gridData.length !== 0) {
            mixes = getState().allocationGrid.mixes.length === 0 ? getState().shared.assetsAllocation.mixes : getState().allocationGrid.mixes;
          }
          dispatch({ type: types.GET_GRID_SUCCESS, gridData, mixes });
        }
      });
  };
};

export const getPlanAnalysisLens = () => {
  return dispatch => {
    return lookupService()
      .getPlanAnalysisLens()
      .then(planAnalysisLens => {
        if (planAnalysisLens) {
          dispatch({ type: types.GET_PLAN_ANALYSIS_SUCCESS, planAnalysisLens });
        }
      });
  };
};

export const selectPlanAnalysis = plan => {
  return dispatch => {
    dispatch({ type: types.SELECTED_PLAN_ANALYSIS, plan });
  };
};

export const showMixPanel = () => {
  return dispatch => {
    dispatch({ type: types.SHOW_MIX_PANEL });
  };
};

export const addMix = () => {
  return dispatch => {
    dispatch({ type: types.ADD_MIX });
  };
};
