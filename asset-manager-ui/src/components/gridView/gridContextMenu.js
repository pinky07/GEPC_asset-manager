import React from 'react';
import { connect } from 'react-redux';
import { ContextMenu, Item } from 'react-contexify';
import PropTypes from 'prop-types';

import { addNodeFromGrid } from '../../actions';

export class GridContextMenu extends React.Component {
  render() {
    return (
      <ContextMenu id="grid_menu_id">
        <Item onClick={this.props.addNodeFromGrid}>Add a Node</Item>
      </ContextMenu>
    );
  }
}

GridContextMenu.propTypes = {
  addNodeFromGrid: PropTypes.func.isRequired,
};

export default connect(null, { addNodeFromGrid })(GridContextMenu);
