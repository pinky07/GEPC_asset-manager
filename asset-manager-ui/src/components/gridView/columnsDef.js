import NodeNameCellRenderer from './nodeNameCellRenderer';
import MixHeaderRenderer from './mixHeaderRenderer';
import ValueHeaderRenderer from './valueHeaderRenderer';
import MixCellEditor from './mixCellEditor';
import NodeNameHeaderRenderer from './nodeNameHeaderRenderer';

export const percentageFormatter = params => {
  let { value } = params;
  if (typeof value === 'string' && value.includes('* ')) {
    value = value.substring(2).replace(/,/gi, '');
    value = Number(value);
  }
  return isNaN(value)
    ? ''
    : Number(value / 100).toLocaleString(undefined, {
        style: 'percent',
        minimumFractionDigits: 0,
      });
};

export const columns = [
  {
    field: 'accountgroupname',
    headerName: 'Node Name',
    width: 350,
    cellRendererFramework: NodeNameCellRenderer,
    headerComponentFramework: NodeNameHeaderRenderer,
    sortingOrder: [null, null],
    pinned: 'left',
  },
  {
    field: 'aa_category',
    headerName: 'Asset Category',
    width: 184,
    sortingOrder: ['asc', 'desc'],
    pinned: 'left',
  },
  {
    field: 'accountgroupname',
    headerName: 'Asset Class Alias',
    width: 350,
    sortingOrder: ['asc', 'desc'],
    pinned: 'left',
  },
  {
    field: 'aa_model_benchmark',
    headerName: 'AAMB',
    width: 200,
    sortingOrder: ['asc', 'desc'],
    pinned: 'left',
  },
  {
    field: 'policy_value',
    headerName: 'Policy',
    width: 200,
    sortingOrder: ['asc', 'desc'],
    valueFormatter: percentageFormatter,
  },
  {
    field: 'actual_mv',
    headerName: 'Actual',
    width: 200,
    headerComponentFramework: ValueHeaderRenderer,
    sortingOrder: ['asc', 'desc'],
    valueFormatter: percentageFormatter,
  },
];

export const mixColumn = {
  field: 'mix',
  width: 200,
  editable: true,
  headerName: 'Mix',
  headerComponentFramework: MixHeaderRenderer,
  cellEditorFramework: MixCellEditor,
  sortingOrder: ['asc', 'desc'],
  valueFormatter: percentageFormatter,
};
