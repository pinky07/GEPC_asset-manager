import { Col, Row } from 'reactstrap';
import { AgGridReact } from 'ag-grid-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import { ContextMenuProvider } from 'react-contexify';

import { columns } from './columnsDef';
import MixDetails from './mixDetails';
import MixStatistics from './mixStatistics';
import {
  getPlanAnalysisLens,
  selectPlanAnalysis,
  getAllocationGrid,
} from '../../actions';
import GridContextMenu from './gridContextMenu';

export class GridView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: Array.from(columns),
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
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.columnApi = params.columnApi;
  }

  changePlanAnalysisLens = plan => {
    this.props.selectPlanAnalysis(plan);
    this.setState({ selectedPlanAnalysis: plan });
  };

  render() {
    return (
      <div className="gridView">
        <Row>
          <Col lg="12" md="12">
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
          <Col lg="9" md="9" className="">
            <ContextMenuProvider id="grid_menu_id" event="onContextMenu">
              <div className="gridContainer ag-fresh">
                <AgGridReact
                  columnDefs={this.state.columnDefs}
                  rowData={this.props.gridData}
                  onGridReady={this.onGridReady}
                  headerHeight="35"
                  enableSorting
                />
                <GridContextMenu />
              </div>
            </ContextMenuProvider>
          </Col>
          <Col lg="3" md="3">
            <MixStatistics />
            <MixDetails />
          </Col>
        </Row>
      </div>
    );
  }
}

GridView.propTypes = {
  tree: PropTypes.object.isRequired,
  gridData: PropTypes.array.isRequired,
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
})(GridView);
