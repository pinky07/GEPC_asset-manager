import * as types from './types';
import lookupService from '../services/lookupService';
import assetsAllocationModel from '../model/assetsAllocationModel';
import mixService from '../services/mixService';

export const getAllocationGrid = () => {
  return (dispatch, getState) => {
    const { tree } = getState().allocationTree;
    return assetsAllocationModel()
      .getGrid(tree.data)
      .then(gridData => {
        if (gridData) {
          let mixes = [];
          if (gridData.length !== 0) {
            mixes =
              getState().allocationGrid.mixes.length === 0
                ? getState().shared.assetsAllocation.mixes
                : getState().allocationGrid.mixes;
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
  return (dispatch, getState) => {
    const { mixes } = getState().allocationGrid;
    const mixNumber =
      mixes.length > 0 ? Number(mixes[0].replace('Mix ', '')) + 1 : 1;
    dispatch({ type: types.ADD_MIX, mix: `Mix ${mixNumber}` });
  };
};

export const removeMix = mixName => {
  return (dispatch, getState) => {
    const { mixes, gridData } = getState().allocationGrid;
    return mixService()
      .removeMix(mixes, gridData, mixName)
      .then(result => {
        dispatch({ type: types.REMOVE_MIX, result });
      });
  };
};
