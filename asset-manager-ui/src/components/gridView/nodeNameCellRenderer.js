import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'reactstrap';
import PropTypes from 'prop-types';
import { ContextMenuProvider } from 'react-contexify';

import { searchNode, showTreeView } from '../../actions';

export class NodeNameCellRenderer extends React.Component {
  search = () => {
    console.log(this.props)
    //this.props.searchNode(this.props.value);
    //this.props.showTreeView();
  };

  render() {
    return (
      <ContextMenuProvider
        id="grid_menu_id"
        event="onContextMenu">
      <NavLink href="#" onClick={this.search}>
        {this.props.value}
      </NavLink>
      </ContextMenuProvider>
    );
  }
}

NodeNameCellRenderer.propTypes = {
  searchNode: PropTypes.func.isRequired,
  showTreeView: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default connect(null, { searchNode, showTreeView })(
  NodeNameCellRenderer
);
