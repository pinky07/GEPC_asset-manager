import NodeNameCellRenderer from './nodeNameCellRenderer';
import MixHeaderRenderer from './mixHeaderRenderer';
import ValueHeaderRenderer from './valueHeaderRenderer';
import MixCellRenderer from './mixCellRenderer';

const sortAscending = '<i class="fa fa-sort-asc fa-3" aria-hidden="true"/>';
const sortDescending = '<i class="fa fa-sort-desc fa-3" aria-hidden="true"/>';
const sortUnSort = '<i class="fa fa-refresh fa-3" aria-hidden="true"/>';

export const columns = [
  {
    field: 'accountgroupname',
    headerName: 'Node Name',
    width: 350,
    cellRendererFramework: NodeNameCellRenderer,
    sortingOrder: [null, null],
    icons: {
      sortUnSort,
    },
    pinned: 'left',
  },
  {
    field: 'aa_category',
    headerName: 'Asset Category',
    width: 184,
    sortingOrder: ['asc', 'desc'],
    icons: {
      sortAscending,
      sortDescending,
    },
    pinned: 'left',
  },
  {
    field: 'accountgroupname',
    headerName: 'Asset Class Alias',
    width: 350,
    sortingOrder: ['asc', 'desc'],
    icons: {
      sortAscending,
      sortDescending,
    },
    pinned: 'left',
  },
  {
    field: 'aa_model_benchmark',
    headerName: 'AAMB',
    width: 200,
    sortingOrder: ['asc', 'desc'],
    icons: {
      sortAscending,
      sortDescending,
    },
    pinned: 'left',
  },
  {
    field: 'policy_value',
    headerName: 'Policy',
    width: 200,
    sortingOrder: ['asc', 'desc'],
    icons: {
      sortAscending,
      sortDescending,
    },
    pinned: 'left',
  },
  {
    field: 'actual_mv',
    headerName: 'Value',
    width: 200,
    headerComponentFramework: ValueHeaderRenderer,
    sortingOrder: ['asc', 'desc'],
    icons: {
      sortAscending,
      sortDescending,
    },
    pinned: 'left',
  },
];

export const mixColumn = {
  field: 'mix',
  width: 200,
  editable: true,
  headerName: 'Mix',
  headerComponentFramework: MixHeaderRenderer,
  cellRendererFramework: MixCellRenderer,
  sortingOrder: ['asc', 'desc'],
  icons: {
    sortAscending,
    sortDescending,
  },
  valueParser: this.numberParser,
};

const numberParser = params => Number(params.newValue);