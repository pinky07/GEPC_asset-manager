import _ from 'lodash';

const mixService = () => {
  const addMix = ({ mixes }) => {
    return new Promise((resolve, reject) => {
      const mixNumber =
        mixes.length > 0 ? Number(mixes[0].replace('Mix ', '')) + 1 : 1;
      resolve([`Mix ${mixNumber}`, ...mixes]);
    });
  };

  const removeMix = ({ mixes, gridData }, mixName) => {
    return new Promise((resolve, reject) => {
      const newMixes = _.filter(mixes, mix => mix !== mixName);
      const name = mixName.replace(' ', '').toLowerCase();
      let data = _.filter(gridData, item => item[name]);
      data = _.map(data, item => {
        delete item[name];
        return item;
      });
      resolve({
        mixes: newMixes,
        gridData: data,
      });
    });
  };

  const hasMixes = node => {
    const keys = Object.keys(node);
    const totalMixes = _.reduce(
      keys,
      (total, key) => {
        if (key.includes('mix') && node[key] !== '') {
          total++;
        }
        return total;
      },
      0
    );
    return totalMixes !== 0;
  };

  return {
    addMix,
    removeMix,
    hasMixes,
  };
};

export default mixService;
