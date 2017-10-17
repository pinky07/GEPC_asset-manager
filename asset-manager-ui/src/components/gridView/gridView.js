import { Col, Row } from 'reactstrap';
import { AgGridReact } from 'ag-grid-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import _ from 'lodash';

import NodeNameCellMenu from './nodeNameCellMenu';
import ValueHeaderMenu from './valueHeaderMenu';
import MixHeaderMenu from './mixHeaderMenu';
import { columns, mixColumn } from './columnsDef';
import {
  getPlanAnalysisLens,
  selectPlanAnalysis,
  getAllocationGrid,
  removeNodeFromGrid,
} from '../../actions';

export class GridView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [...columns],
      selectedPlanAnalysis: undefined,
      selectedAliasSelector: undefined,
    };
    this.gridApi = undefined;
    this.columnApi = undefined;
  }

  componentDidMount() {
    this.props.getPlanAnalysisLens();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.tree !== this.props.tree) {
      this.props.getAllocationGrid();
    }
    if (nextProps.mixes !== this.props.mixes) {
      let columnDefs = [];
      nextProps.mixes.forEach(mix => {
        mixColumn.headerName = mix;
        mixColumn.field = mix.replace(' ', '').toLowerCase();
        columnDefs.push({ ...mixColumn });
      });
      columnDefs = [...columns, ...columnDefs];
      this.setState({ columnDefs });
    }
  }

  componentDidUpdate() {
    if (this.gridApi) {
      const columnValueId = columns[5].colId;
      this.gridApi.gridPanel.ensureColumnVisible(columnValueId);
    }
  }

  onGridReady = params => {
    this.gridApi = params.api;
    this.columnApi = params.columnApi;
  }

  changePlanAnalysisLens = plan => {
    this.props.selectPlanAnalysis(plan);
    this.setState({ selectedPlanAnalysis: plan });
  };

  onCellEditingStopped = event => {
    const { colDef, value, data } = event;

    if (colDef.field.includes('mix') && value === '') {
      const keys = Object.keys(data);
      let totalMixes = keys.reduce((total, key) => {
        if (key.includes('mix') && data[key] !== '') {
          total++;
        }
        return total;
      }, 0);

      if (totalMixes === 0) {
       this.props.removeNodeFromGrid(data);
      }
    }
  };

  render() {
    return (
      <div className="gridView">
        <Row>
          <Col xs="12">
            <Select
              searchable
              clearable={false}
              value={this.state.selectedPlanAnalysis}
              onChange={this.changePlanAnalysisLens}
              options={this.props.planAnalysisLens}
              className="dropdownPlanAnalysis"
              labelKey="name"
              valueKey="id"
              placeholder="Plan Analysis Lens"
            />
          </Col>
        </Row>
        <Row>
          <Col xs="12">
              <div className="gridContainer ag-fresh">
                <AgGridReact
                  columnDefs={this.state.columnDefs}
                  rowData={this.props.gridData}
                  onGridReady={this.onGridReady}
                  headerHeight="35"
                  enableSorting
                  onCellEditingStopped={this.onCellEditingStopped}
                />
                <NodeNameCellMenu />
                <ValueHeaderMenu />
                <MixHeaderMenu />
              </div>
          </Col>
        </Row>
      </div>
    );
  }
}

GridView.propTypes = {
  tree: PropTypes.object.isRequired,
  gridData: PropTypes.array.isRequired,
  mixes: PropTypes.array,
  planAnalysisLens: PropTypes.array.isRequired,
  selectPlanAnalysis: PropTypes.func.isRequired,
  getPlanAnalysisLens: PropTypes.func.isRequired,
  getAllocationGrid: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    ...state.allocationGrid,
    ...state.allocationTree,
  };
};

export default connect(mapStateToProps, {
  getPlanAnalysisLens,
  selectPlanAnalysis,
  getAllocationGrid,
  removeNodeFromGrid,
})(GridView);
