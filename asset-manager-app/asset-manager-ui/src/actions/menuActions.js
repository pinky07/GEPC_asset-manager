import * as types from './types';

/**
 * Loads nodes from Investor Force.
 * This a Tree View action.
 */
export const loadIFTree = () => {
  return dispatch => {
    dispatch({ type: types.LOAD_IF_TREE });
  };
};

/**
 * Loads node market values from Investor Force.
 * This is a Tree View action.
 */
export const loadIFMarketValues = () => {
  return dispatch => {
    dispatch({ type: types.LOAD_IF_MARKET_VALUES });
  };
};

/**
 * Copies the Tree.
 * This is a Tree View action.
 */
export const copyTree = () => {
  return dispatch => {
    dispatch({ type: types.COPY_TREE });
  };
};

/**
 * Copies the Tree without managers.
 * This is a Tree View action.
 */
export const copyTreeWithoutManager = () => {
  return dispatch => {
    dispatch({ type: types.COPY_TREE_WITHOUT_MANAGERS });
  };
};

/**
 * Deletes the Tree.
 * This is a Tree View action.
 */
export const deleteTree = () => {
  return dispatch => {
    dispatch({ type: types.DELETE_TREE });
  };
};

/**
 * Creates a new Tree.
 * This is a Tree View action.
 */
export const newTree = () => {
  return dispatch => {
    dispatch({ type: types.NEW_TREE });
  };
};

/**
 * TODO Document this!
 * This is a Grid View action.
 */
export const preview = () => {
  return dispatch => {
    dispatch({ type: types.PREVIEW });
  };
};

/**
 * TODO Document this!
 * This is a Grid View action.
 */
export const importMix = () => {
  return dispatch => {
    dispatch({ type: types.IMPORT_MIX });
  };
};
