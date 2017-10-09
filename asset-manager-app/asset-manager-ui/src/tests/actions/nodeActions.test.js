import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as nodeActions from '../../actions/nodeActions';
import * as types from '../../actions/types';
import { rowInfo, selectedNode } from '../fixtures/tree';

describe('node actions', () => {
  const createMockStore = configureMockStore([thunk]);
  const mockStore = {
    tree: {
      data: [],
    },
    selectedNode: undefined,
  };
  let store = createMockStore({ ...mockStore });

  beforeEach(() => {
    store = createMockStore({ ...mockStore });
  });

  it('select a node', () => {
    const expectedActions = [
      {
        type: types.SELECTED_NODE,
        payload: rowInfo,
      },
    ];
    store.dispatch(nodeActions.selectNode(rowInfo));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('add a node above', () => {
    const expectedActions = [
      {
        type: types.ADD_ABOVE_NODE,
      },
    ];

    store.dispatch(nodeActions.addAboveNode());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('add a sibling node', () => {
    const expectedActions = [
      {
        type: types.ADD_SIBLING_NODE,
      },
    ];

    store.dispatch(nodeActions.addSiblingNode());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('add a node below', () => {
    const expectedActions = [
      {
        type: types.ADD_BELOW_NODE,
      },
    ];

    store.dispatch(nodeActions.addBelowNode());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('delete all nodes below', () => {
    const expectedActions = [
      {
        type: types.DELETE_BELOW_NODE,
      },
    ];

    store.dispatch(nodeActions.deleteBelowNode());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('delete a node', () => {
    const expectedActions = [
      {
        type: types.DELETE_NODE,
        node: { ...selectedNode },
      },
    ];

    store.dispatch(nodeActions.deleteNode({ ...selectedNode }));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('jump level', () => {
    const level = 5;
    const expectedActions = [
      {
        type: types.JUMP_LEVEL,
        level,
      },
    ];

    store.dispatch(nodeActions.jumpLevel(level));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('update details node', () => {
    const expectedActions = [
      {
        type: types.UPDATE_DETAILS_NODE,
        node: { ...selectedNode },
      },
    ];

    store.dispatch(nodeActions.updateDetailsNode({ ...selectedNode }));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('toggle a node at path', () => {
    const node = selectedNode;
    const path = selectedNode.path;
    const expectedActions = [
      {
        type: types.TOGGLE_NODE_AT_PATH,
        node,
        path,
      },
    ];

    store.dispatch(nodeActions.toggleNodeAtPath(node, path));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('add a node from grid', () => {
    const expectedActions = [
      {
        type: types.ADD_NODE_FROM_GRID,
      },
    ];

    store.dispatch(nodeActions.addNodeFromGrid());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('search a node by title', () => {
    const title = 'test title';
    const expectedActions = [
      {
        type: types.SEARCH_NODE,
        title,
      },
    ];

    store.dispatch(nodeActions.searchNode(title));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
