import { Col, Row } from 'reactstrap';
import { AgGridReact } from 'ag-grid-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import _ from 'lodash';

import NodeNameHeaderMenu from './nodeNameHeaderMenu';
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
      _.forEach(nextProps.mixes, mix => {
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
      const columns = this.columnApi.getAllColumns();
      if (columns.length > 6) {
        this.gridApi.gridPanel.ensureColumnVisible(columns[6].colId);
      }
    }
  }

  changePlanAnalysisLens = plan => {
    this.props.selectPlanAnalysis(plan);
    this.setState({ selectedPlanAnalysis: plan });
  };

  onGridReady = params => {
    this.gridApi = params.api;
    this.columnApi = params.columnApi;
  };

  onCellEditingStopped = ({ colDef, value, data }) => {
    if (colDef.field.includes('mix') && value === '') {
      this.props.removeNodeFromGrid(data);
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
                onCellEditingStopped={this.onCellEditingStopped}
                headerHeight="35"
                enableSorting
              />
              <NodeNameHeaderMenu />
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
  removeNodeFromGrid: PropTypes.func.isRequired,
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
