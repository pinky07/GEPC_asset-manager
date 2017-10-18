import assetsAllocationModel from '../model/assetsAllocationModel';
import * as types from './types';

export const getAllocationTree = () => {
  return dispatch => {
    return assetsAllocationModel()
      .getTree()
      .then(tree => {
        if (tree) {
          dispatch({ type: types.GET_TREE_SUCCESS, tree });
        }
      });
  };
};

export const updateTree = treeData => {
  return dispatch => {
    dispatch({ type: types.CHANGE_TREE, treeData });
  };
};
