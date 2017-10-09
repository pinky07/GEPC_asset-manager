import {
  addNodeUnderParent,
  changeNodeAtPath,
  removeNodeAtPath,
  find,
  toggleExpandedForAll,
  defaultSearchMethod,
  defaultGetNodeKey,
} from 'react-sortable-tree';

const treeService = () => {
  const _newNode = ({ clientName, planName }, isRoot = false) => {
    const DEFAULT_NODE_NAME = isRoot ? 'Composite' : 'Node';
    let newNode = {
      clientname: clientName,
      planname: planName,
      accountgrouptype: '',
      accountgroupid: '',
      accountgroupname: DEFAULT_NODE_NAME,
      accountgroupshortname: '',
      accountgroupperformanceenddate: null,
      level: 0,
      id: 0,
      parent_object_id: '',
      as_of: '',
      policy_value: 0,
      aa_model_benchmark: null,
      actual_mv: null,
    };
    newNode.title = () => newNode.accountgroupname;
    return newNode;
  };

  const addRootNode = () => {
    return _newNode({}, true);
  };

  const updateNode = (tree, selectedNode) => {
    const { path, node } = selectedNode;

    return changeNodeAtPath({
      treeData: tree.data,
      path,
      getNodeKey: ({ treeIndex }) => treeIndex,
      newNode: node,
    });
  };

  const addAboveNode = ({ tree, selectedNode }) => {
    const { path, node } = selectedNode;

    return changeNodeAtPath({
      treeData: tree.data,
      path,
      getNodeKey: ({ treeIndex }) => treeIndex,
      newNode: {
        ..._newNode(node),
        children: [node],
        expanded: true,
      },
    });
  };

  const addSiblingNode = ({ tree, selectedNode }) => {
    const { node, path } = selectedNode;

    return addNodeUnderParent({
      treeData: tree.data,
      parentKey: path[path.length - 2],
      expandParent: true,
      getNodeKey: ({ treeIndex }) => treeIndex,
      newNode: _newNode(node),
    }).treeData;
  };

  const addBelowNode = ({ tree, selectedNode }) => {
    const { node, path } = selectedNode;

    return addNodeUnderParent({
      treeData: tree.data,
      parentKey: path[path.length - 1],
      expandParent: true,
      getNodeKey: ({ treeIndex }) => treeIndex,
      newNode: {
        ..._newNode(node),
        parent_object_id: node.accountgroupid,
      },
    }).treeData;
  };

  const addNodeToRoot = tree => {
    const node = tree.data[0];

    return addNodeUnderParent({
      treeData: tree.data,
      parentKey: 0,
      expandParent: true,
      getNodeKey: ({ treeIndex }) => treeIndex,
      newNode: {
        ..._newNode(node),
        parent_object_id: node.parent_object_id,
        showOnGrid: true,
      },
    }).treeData;
  };

  const deleteBelowNode = ({ tree, selectedNode }) => {
    let { path, node, treeIndex } = selectedNode;

    if (node.children) {
      let firstChildPath = treeIndex + 1;
      let childrenPath = path.concat([firstChildPath]);
      let treeData = Array.from(tree.data);

      for (let i = 0, length = node.children.length; i < length; i++) {
        treeData = changeNodeAtPath({
          treeData,
          path: childrenPath,
          getNodeKey: ({ treeIndex }) => treeIndex,
          newNode: null,
        });
      }
      return treeData;
    }
  };

  const deleteNode = ({ tree, selectedNode }) => {
    const { path } = selectedNode;
    return removeNodeAtPath({
      treeData: tree.data,
      path,
      getNodeKey: ({ treeIndex }) => treeIndex,
    });
  };

  const _expandNodes = (node, level) => {
    const { children } = node;

    if (children && level > 1) {
      children.forEach((child, index, array) => {
        array[index] = _expandNodes(child, level - 1);
      });
    }
    return children ? { ...node, expanded: true } : node;
  };

  const jumpLevel = (level, { tree, selectedNode }) => {
    let node = _expandNodes(selectedNode.node, level);
    return updateNode(tree, { ...selectedNode, node });
  };

  const getMaxDepthNode = ({ children }) => {
    let maxDepth = 0;
    if (children) {
      let depth = 0;
      children.forEach(child => {
        depth = getMaxDepthNode(child) + 1;
        maxDepth = depth > maxDepth ? depth : maxDepth;
      });
    }
    return maxDepth;
  };

  const toggleNodeAtPath = (tree, { node, path }) => {
    return changeNodeAtPath({
      treeData: tree.data,
      path,
      getNodeKey: ({ treeIndex }) => treeIndex,
      newNode: node,
    });
  };

  const isRootNode = node => node && node.treeIndex === 0;

  const searchNode = (tree, searchQuery) => {
    let treeData = toggleExpandedForAll({
      treeData: tree.data,
      expanded: false,
    });

    return find({
      getNodeKey: defaultGetNodeKey,
      treeData,
      searchQuery,
      searchMethod: defaultSearchMethod,
      searchFocusOffset: 0,
      expandAllMatchPaths: true,
      expandFocusMatchPaths: false,
    });
  };

  return {
    addAboveNode,
    addSiblingNode,
    addBelowNode,
    deleteBelowNode,
    deleteNode,
    updateNode,
    jumpLevel,
    getMaxDepthNode,
    toggleNodeAtPath,
    isRootNode,
    addNodeToRoot,
    addRootNode,
    searchNode,
  };
};

export default treeService;
