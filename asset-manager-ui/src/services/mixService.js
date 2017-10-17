import _ from 'lodash';

const mixService = () => {
  const removeMix = (mixes, gridData, mixName) => {
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
    removeMix,
  };
};

export default mixService;
