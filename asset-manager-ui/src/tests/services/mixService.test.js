import mixService from '../../services/mixService';

describe('mix service', () => {
  let mixes = [];

  it('addMix should add a mix to a list of mixes', () => {
    const expectedMix = 'Mix 1';
    mixService()
      .addMix({ mixes })
      .then(newMixes => {
        expect(newMixes.length).toBe(1);
        expect(newMixes[0]).toEqual(expectedMix);
      });
  });

  it('removeMix should remove a mix from a list of mixes', () => {
    mixes = ['Mix 2', 'Mix 1'];
    const expectedMixes = ['Mix 2'];
    const gridData = [];
    mixService()
      .removeMix({ mixes, gridData }, 'Mix 1')
      .then(result => {
        expect(result.mixes.length).toEqual(expectedMixes.length);
        expect(result.mixes).toEqual(expectedMixes);
      });
  });

  it('hasMixes should check if a node has mixes', () => {
    let node = {
      title: 'node test',
      mix1: 10,
    };
    expect(mixService().hasMixes(node)).toBe(true);
    delete node['mix1'];
    expect(mixService().hasMixes(node)).toBe(false);
  });
});
