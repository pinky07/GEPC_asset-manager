import NodeNameCellRenderer from './nodeNameCellRenderer';

export const columns = [
  {
    field: 'accountgroupname',
    headerName: 'Node Name',
    width: 350,
    cellRendererFramework: NodeNameCellRenderer,
  },
  {
    field: 'aa_category',
    headerName: 'Asset Category',
    width: 184,
  },
  {
    field: 'accountgroupname',
    headerName: 'Asset Class Alias',
    width: 350,
  },
  {
    field: 'aa_model_benchmark',
    headerName: 'AAMB',
    width: 200,
  },
  {
    field: 'policy_value',
    headerName: 'Policy',
    width: 200,
  },
  {
    field: 'actual_mv',
    headerName: 'Value',
    width: 200,
  },
  {
    field: 'mixA',
    headerName: 'Mix A',
    width: 200,
    editable: true,
  },
  {
    field: 'dummy',
    headerName: '',
    width: 200,
  },
];
