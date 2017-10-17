import React from 'react';
import { connect } from 'react-redux';
import { ContextMenu, Item } from 'react-contexify';
import PropTypes from 'prop-types';

import { addMix } from '../../actions';

export class ValueHeaderMenu extends React.Component {
  render() {
    return (
      <ContextMenu
        id="value_menu_id"
        renderTag="div">
        <Item onClick={this.props.addMix}>Add Mix</Item>
        <Item disabled={true}>Delete Mix</Item>
      </ContextMenu>
    );
  }
}

ValueHeaderMenu.propTypes = {
  addMix: PropTypes.func.isRequired,
};

export default connect(null, { addMix })(ValueHeaderMenu);
