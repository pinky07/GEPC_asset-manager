import React from 'react';
import { connect } from 'react-redux';
import { ContextMenuProvider } from 'react-contexify';
import PropTypes from 'prop-types';

export class ValueHeaderRenderer extends React.Component {
  constructor(props) {
    super(props);
    this.props.column.addEventListener('sortChanged', this.onSortChanged);
    this.state = {
      sorted: '',
    };
  }

  componentWillUnmount() {
    this.props.column.removeEventListener('sortChanged', this.onSortChanged);
  }

  onClickHeader = event => {
    if (event.target.textContent !== '...') {
      this.props.progressSort(event.shiftKey);
    }
  };

  onSortChanged = () => {
    const sorted = this.props.column.getSort();
    this.setState({
      sorted,
    });
  };

  sortAscButton = event => {
    this.props.setSort('asc', event.shiftKey);
  };

  sortDescButton = event => {
    this.props.setSort('desc', event.shiftKey);
  };

  renderMenu() {
    if (this.props.gridData.length === 0) {
      return null;
    }
    return (
      <ContextMenuProvider id="value_menu_id" renderTag="span" event="onClick">
        <button>...</button>
      </ContextMenuProvider>
    );
  }

  renderSortElements = () => {
    let sortElements = [];
    if (this.props.enableSorting) {
      let downArrowClass = `ag-header-icon ag-sort-descending-icon ${this.state
        .sorted === 'desc'
        ? ' active'
        : ' ag-hidden'}`;
      let upArrowClass = `ag-header-icon ag-sort-ascending-icon ${this.state
        .sorted === 'asc'
        ? ' active'
        : ' ag-hidden'}`;

      sortElements.push(
        <span
          key={`down${this.props.displayName}`}
          className={upArrowClass}
          onClick={this.sortAscButton}>
          <span className="ag-icon ag-icon-asc" />
        </span>
      );
      sortElements.push(
        <span
          key={`up${this.props.displayName}`}
          className={downArrowClass}
          onClick={this.sortDescButton}>
          <span className="ag-icon ag-icon-desc" />
        </span>
      );
    }
    return sortElements;
  };

  render() {
    let desc =
      this.state.sorted === 'desc' ? ' ag-header-cell-sorted-desc' : '';
    let asc = this.state.sorted === 'asc' ? ' ag-header-cell-sorted-asc' : '';
    let none = this.state.sorted === '' ? ' ag-header-cell-sorted-none' : '';

    return (
      <div className={`ag-cell-label-container ${desc} ${asc} ${none}`}>
        <div className="ag-header-cell-label" onClick={this.onClickHeader}>
          <span className="ag-header-cell-text">
            {this.props.column.colDef.headerName}
          </span>
          {this.renderSortElements()}
          {this.renderMenu()}
        </div>
      </div>
    );
  }
}

ValueHeaderRenderer.propTypes = {
  column: PropTypes.object.isRequired,
  gridData: PropTypes.array.isRequired,
  enableSorting: PropTypes.bool,
  progressSort: PropTypes.func,
  setSort: PropTypes.func,
  displayName: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    ...state.allocationGrid,
  };
};

export default connect(mapStateToProps, null)(ValueHeaderRenderer);
