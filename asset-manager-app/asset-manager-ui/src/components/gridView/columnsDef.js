import NodeNameCellRenderer from './nodeNameCellRenderer';

export const columns = [
  {
    field: 'accountgroupname',
    headerName: 'Node Name',
    width: 350,
    cellRendererFramework: NodeNameCellRenderer,
  },
  {
    field: 'assetCategory',
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
    width: 150,
  },
  {
    field: 'policy_value',
    headerName: 'Policy',
    width: 150,
  },
  {
    field: 'actual_mv',
    headerName: 'Value',
    width: 150,
  },
  {
    field: 'mixA',
    headerName: 'Mix A',
    width: 150,
    editable: true,
  },
];
