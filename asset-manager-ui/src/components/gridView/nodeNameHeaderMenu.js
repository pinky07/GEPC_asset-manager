import React from 'react';
import { connect } from 'react-redux';
import { ContextMenu, Item } from 'react-contexify';
import PropTypes from 'prop-types';

import { addNodeFromGrid } from '../../actions';

export class NodeNameHeaderMenu extends React.Component {
  render() {
    return (
      <ContextMenu id="grid_menu_id" renderTag="div">
        <Item onClick={this.props.addNodeFromGrid}>Add a Node</Item>
      </ContextMenu>
    );
  }
}

NodeNameHeaderMenu.propTypes = {
  addNodeFromGrid: PropTypes.func.isRequired,
};

export default connect(null, { addNodeFromGrid })(NodeNameHeaderMenu);
