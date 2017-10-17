import _ from 'lodash';

const mixService = () => {
  const addMix = ({ mixes }) => {
    return new Promise((resolve, reject) => {
      const mixNumber =
        mixes.length > 0 ? Number(mixes[0].replace('Mix ', '')) + 1 : 1;
      resolve(`Mix ${mixNumber}`);
    });
  };

  const removeMix = ({ mixes, gridData }, mixName) => {
    return new Promise((resolve, reject) => {
      const filteredMixes = _.filter(mixes, mix => mix !== mixName);
      const name = mixName.replace(' ', '').toLowerCase();
      let data = _.filter(gridData, item => item[name]);
      data = _.map(data, item => {
        delete item[name];
        return item;
      });
      resolve({
        mixes: filteredMixes,
        gridData: data,
      });
    });
  };

  return {
    addMix,
    removeMix,
  };
};

export default mixService;
