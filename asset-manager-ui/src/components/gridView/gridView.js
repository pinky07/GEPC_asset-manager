import { Col, Row } from 'reactstrap';
import { AgGridReact } from 'ag-grid-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import { ContextMenuProvider } from 'react-contexify';

import GridContextMenu from './gridContextMenu';
import { columns, mixColumn } from './columnsDef';
import {
  getPlanAnalysisLens,
  selectPlanAnalysis,
  getAllocationGrid,
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
      nextProps.mixes.forEach(mix => {
        mixColumn.headerName = mix;
        columnDefs.push({ ...mixColumn });
      });
      columnDefs = [...columns, ...columnDefs];
      this.setState({ columnDefs });
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

  onClick = event => {
    const text = event.target.innerText;
    if (text.includes('Value') || text.includes('Mix')) {
      event.stopPropagation();
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
            <ContextMenuProvider
              id="grid_menu_id"
              event="onContextMenu"
              onContextMenu={this.onClick}
              onClick={this.onClick}>
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
})(GridView);
