import NodeNameCellRenderer from './nodeNameCellRenderer';

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
  },
  {
    field: 'aa_category',
    headerName: 'Asset Category',
    width: 184,
    sortingOrder: ['asc','desc'],
    icons: {
      sortAscending,
      sortDescending,
    },
  },
  {
    field: 'accountgroupname',
    headerName: 'Asset Class Alias',
    width: 350,
    sortingOrder: ['asc','desc'],
    icons: {
      sortAscending,
      sortDescending,
    },
  },
  {
    field: 'aa_model_benchmark',
    headerName: 'AAMB',
    width: 200,
    sortingOrder: ['asc','desc'],
    icons: {
      sortAscending,
      sortDescending,
    },
  },
  {
    field: 'policy_value',
    headerName: 'Policy',
    width: 200,
    sortingOrder: ['asc','desc'],
    icons: {
      sortAscending,
      sortDescending,
    },
  },
  {
    field: 'actual_mv',
    headerName: 'Value',
    width: 200,
    sortingOrder: ['asc','desc'],
    icons: {
      sortAscending,
      sortDescending,
    },
  },
];
