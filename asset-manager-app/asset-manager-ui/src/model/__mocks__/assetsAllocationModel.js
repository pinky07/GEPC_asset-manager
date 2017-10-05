import { allocationTree } from '../../tests/fixtures/tree';
import allocations from '../../data/allocations.json';

const assetsAllocationModel = () => {
  const get = () => {
    return new Promise((resolve, reject) => {
      resolve(allocations);
    });
  };

  const getTree = () => {
    return new Promise((resolve, reject) => {
      resolve(allocationTree);
    });
  };

  const getGrid = treeData => {
    return new Promise((resolve, reject) => {
      resolve(treeData);
    });
  };

  return {
    getTree,
    getGrid,
    get,
  };
};

export default assetsAllocationModel;
