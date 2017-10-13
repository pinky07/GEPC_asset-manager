import {
  columns,
  mixColumn,
  percentageFormatter,
} from '../../../components/gridView/columnsDef';

describe('columns definition', () => {
  it('should have the right number of columns', () => {
    const columnCount = 6;
    expect(columns.length).toEqual(columnCount);
  });

  describe('the first column', () => {
    const firstColumn = columns[0];
    it('should be the accountgroupname', () => {
      const fieldName = 'accountgroupname';
      expect(firstColumn.field).toEqual(fieldName);
    });

    it('should display the correct column name', () => {
      const headerName = 'Node Name';
      expect(firstColumn.headerName).toEqual(headerName);
    });

    it('should have no value for ascending sort', () => {
      expect(firstColumn.sortingOrder[0]).toEqual(null);
    });

    it('should have no value for descending sort', () => {
      expect(firstColumn.sortingOrder[1]).toEqual(null);
    });

    it('should be pinned to the left', () => {
      const pinnedValue = 'left';
      expect(firstColumn.pinned).toEqual(pinnedValue);
    });
  });

  describe('the second column', () => {
    const secondColumn = columns[1];
    it('should be the aa_category', () => {
      const fieldName = 'aa_category';
      expect(secondColumn.field).toEqual(fieldName);
    });

    it('should display the correct column name', () => {
      const headerName = 'Asset Category';
      expect(secondColumn.headerName).toEqual(headerName);
    });

    it('should have right value for ascending sort', () => {
      const sortOder = 'asc';
      expect(secondColumn.sortingOrder[0]).toEqual(sortOder);
    });

    it('should have the right value for descending sort', () => {
      const sortOder = 'desc';
      expect(secondColumn.sortingOrder[1]).toEqual(sortOder);
    });

    it('should be pinned to the left', () => {
      const pinnedValue = 'left';
      expect(secondColumn.pinned).toEqual(pinnedValue);
    });
  });

  describe('the third column', () => {
    const thirdColumn = columns[2];
    it('should be the accountgroupname', () => {
      const fieldName = 'accountgroupname';
      expect(thirdColumn.field).toEqual(fieldName);
    });

    it('should display the correct column name', () => {
      const headerName = 'Asset Class Alias';
      expect(thirdColumn.headerName).toEqual(headerName);
    });

    it('should have right value for ascending sort', () => {
      const sortOder = 'asc';
      expect(thirdColumn.sortingOrder[0]).toEqual(sortOder);
    });

    it('should have the right value for descending sort', () => {
      const sortOder = 'desc';
      expect(thirdColumn.sortingOrder[1]).toEqual(sortOder);
    });

    it('should be pinned to the left', () => {
      const pinnedValue = 'left';
      expect(thirdColumn.pinned).toEqual(pinnedValue);
    });
  });

  describe('the forth column', () => {
    const forthColumn = columns[3];
    it('should be the aa_model_benchmark', () => {
      const fieldName = 'aa_model_benchmark';
      expect(forthColumn.field).toEqual(fieldName);
    });

    it('should display the correct column name', () => {
      const headerName = 'AAMB';
      expect(forthColumn.headerName).toEqual(headerName);
    });

    it('should have right value for ascending sort', () => {
      const sortOder = 'asc';
      expect(forthColumn.sortingOrder[0]).toEqual(sortOder);
    });

    it('should have the right value for descending sort', () => {
      const sortOder = 'desc';
      expect(forthColumn.sortingOrder[1]).toEqual(sortOder);
    });

    it('should be pinned to the left', () => {
      const pinnedValue = 'left';
      expect(forthColumn.pinned).toEqual(pinnedValue);
    });
  });

  describe('the fifth column', () => {
    const fifthColumn = columns[4];
    it('should be the policy_value', () => {
      const fieldName = 'policy_value';
      expect(fifthColumn.field).toEqual(fieldName);
    });

    it('should display the correct column name', () => {
      const headerName = 'Policy';
      expect(fifthColumn.headerName).toEqual(headerName);
    });

    it('should have right value for ascending sort', () => {
      const sortOder = 'asc';
      expect(fifthColumn.sortingOrder[0]).toEqual(sortOder);
    });

    it('should have the right value for descending sort', () => {
      const sortOder = 'desc';
      expect(fifthColumn.sortingOrder[1]).toEqual(sortOder);
    });

    it('should be pinned to the left', () => {
      const pinnedValue = 'left';
      expect(fifthColumn.pinned).toEqual(pinnedValue);
    });

    it('should have a value formatter set', () => {
      expect(fifthColumn.valueFormatter).toBeDefined();
    });
  });

  describe('the sixth column', () => {
    const sixthColumn = columns[5];
    it('should be the actual_mv', () => {
      const fieldName = 'actual_mv';
      expect(sixthColumn.field).toEqual(fieldName);
    });

    it('should display the correct column name', () => {
      const headerName = 'Value';
      expect(sixthColumn.headerName).toEqual(headerName);
    });

    it('should have right value for ascending sort', () => {
      const sortOder = 'asc';
      expect(sixthColumn.sortingOrder[0]).toEqual(sortOder);
    });

    it('should have the right value for descending sort', () => {
      const sortOder = 'desc';
      expect(sixthColumn.sortingOrder[1]).toEqual(sortOder);
    });

    it('should be pinned to the left', () => {
      const pinnedValue = 'left';
      expect(sixthColumn.pinned).toEqual(pinnedValue);
    });

    it('should have a value formatter set', () => {
      expect(sixthColumn.valueFormatter).toBeDefined();
    });
  });
  /*
 field: 'mix',
 width: 200,
 editable: true,
 headerName: 'Mix',
 headerComponentFramework: MixHeaderRenderer,
 sortingOrder: ['asc', 'desc'],
 icons: {
 sortAscending,
 sortDescending,
 },
 */
  describe('the mix column', () => {
    it('should be the mix field', () => {
      const fieldName = 'mix';
      expect(mixColumn.field).toEqual(fieldName);
    });

    it('should display the correct column name', () => {
      const headerName = 'Mix';
      expect(mixColumn.headerName).toEqual(headerName);
    });

    it('should have right value for ascending sort', () => {
      const sortOder = 'asc';
      expect(mixColumn.sortingOrder[0]).toEqual(sortOder);
    });

    it('should have the right value for descending sort', () => {
      const sortOder = 'desc';
      expect(mixColumn.sortingOrder[1]).toEqual(sortOder);
    });

    it('should not be pinned', () => {
      expect(mixColumn.pinned).toEqual(undefined);
    });

    it('should have a value formatter set', () => {
      expect(mixColumn.valueFormatter).toBeDefined();
    });
  });

  describe('the percentage formatter', () => {
    it('should receive a number and return a string with the respective value as percentage', () => {
      const params = {
        value: 90,
      };
      const expectedStr = '90%';
      expect(percentageFormatter(params)).toEqual(expectedStr);
    });
  });
});
