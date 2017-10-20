import React from 'react';
import { connect } from 'react-redux';
import { ContextMenuProvider } from 'react-contexify';
import PropTypes from 'prop-types';

export class NodeNameHeaderRenderer extends React.Component {
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
    this.setState({
      sorted: '',
    });
  };

  render() {
    return (
      <div className="ag-header-cell-label" onClick={this.onClickHeader}>
        <span>{this.props.column.colDef.headerName}</span>
        <ContextMenuProvider id="grid_menu_id" renderTag="span" event="onClick">
          <button>...</button>
        </ContextMenuProvider>
      </div>
    );
  }
}

NodeNameHeaderRenderer.propTypes = {
  column: PropTypes.object.isRequired,
  progressSort: PropTypes.func,
};

export default connect(null, null)(NodeNameHeaderRenderer);
