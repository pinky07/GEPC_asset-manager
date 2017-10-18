import { allocationTree } from '../../tests/fixtures/tree';
import { allocationGrid } from '../../tests/fixtures/grid';
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
      resolve(allocationGrid);
    });
  };

  return {
    getTree,
    getGrid,
    get,
  };
};

export default assetsAllocationModel;
