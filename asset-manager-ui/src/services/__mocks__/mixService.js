//import { mixes } from '../../tests/fixtures/grid';

const mixService = () => {
  const addMix = ({ mixes }) => {
    return new Promise((resolve, reject) => {
      resolve(['Mix 2', ...mixes]);
    });
  };

  const removeMix = ({ mixes, gridData }, mixName) => {
    return new Promise((resolve, reject) => {
      resolve({
        mixes: [],
        gridData: [],
      });
    });
  };

  const hasMixes = node => {
    return false;
  };

  return {
    addMix,
    removeMix,
    hasMixes,
  };
};

export default mixService;
