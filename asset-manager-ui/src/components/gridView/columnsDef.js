import NodeNameCellRenderer from './nodeNameCellRenderer';

export const columns = [
  {
    field: 'accountgroupname',
    headerName: 'Node Name',
    width: 350,
    cellRendererFramework: NodeNameCellRenderer,
    sortingOrder: [null, null],
    icons: {
      sortUnSort: '<i class="fa fa-refresh fa-3" aria-hidden="true"/>',
    },
  },
  {
    field: 'assetCategory',
    headerName: 'Asset Category',
    width: 184,
    sortingOrder: ['asc','desc'],
    icons: {
      sortAscending: '<i class="fa fa-sort-asc fa-3" aria-hidden="true"/>',
      sortDescending: '<i class="fa fa-sort-desc fa-3" aria-hidden="true"/>',
    },
  },
  {
    field: 'accountgroupname',
    headerName: 'Asset Class Alias',
    width: 350,
    sortingOrder: ['asc','desc'],
    icons: {
      sortAscending: '<i class="fa fa-sort-asc fa-3" aria-hidden="true"/>',
      sortDescending: '<i class="fa fa-sort-desc fa-3" aria-hidden="true"/>',
    },
  },
  {
    field: 'aa_model_benchmark',
    headerName: 'AAMB',
    width: 200,
    sortingOrder: ['asc','desc'],
    icons: {
      sortAscending: '<i class="fa fa-sort-asc fa-3" aria-hidden="true"/>',
      sortDescending: '<i class="fa fa-sort-desc fa-3" aria-hidden="true"/>',
    },
  },
  {
    field: 'policy_value',
    headerName: 'Policy',
    width: 200,
    sortingOrder: ['asc','desc'],
    icons: {
      sortAscending: '<i class="fa fa-sort-asc fa-3" aria-hidden="true"/>',
      sortDescending: '<i class="fa fa-sort-desc fa-3" aria-hidden="true"/>',
    },
  },
  {
    field: 'actual_mv',
    headerName: 'Value',
    width: 200,
    sortingOrder: ['asc','desc'],
    icons: {
      sortAscending: '<i class="fa fa-sort-asc fa-3" aria-hidden="true"/>',
      sortDescending: '<i class="fa fa-sort-desc fa-3" aria-hidden="true"/>',
    },
  },
];
