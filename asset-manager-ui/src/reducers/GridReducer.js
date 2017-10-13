import * as types from '../actions/types';

const INITIAL_STATE = {
  gridData: [],
  mixes: [],
  planAnalysisLens: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_GRID_SUCCESS:
      return {
        ...state,
        gridData: action.gridData,
        mixes: action.mixes,
      };
    case types.GET_PLAN_ANALYSIS_SUCCESS:
      return {
        ...state,
        planAnalysisLens: action.planAnalysisLens,
      };
    case types.ADD_MIX:
      return {
        ...state,
        mixes: [action.mix, ...state.mixes],
      };
    case types.REMOVE_MIX:
      return {
        ...state,
        mixes: action.result.mixes,
      };
    default:
      return state;
  }
};
