import React from 'react';
import { connect } from 'react-redux';
import { ContextMenu, Item } from 'react-contexify';
import PropTypes from 'prop-types';

import { addMix, removeMix } from '../../actions';

export class MixMenu extends React.Component {
  removeMix = () => {
    this.props.removeMix(this.props.mixName);
  };

  render() {
    if (this.props.isMixHeader) {
      return (
        <ContextMenu id={this.props.menuId}>
          <Item onClick={this.props.addMix}>Add Mix</Item>
          <Item onClick={this.removeMix}>Delete Mix</Item>
        </ContextMenu>
      );
    }
    return (
      <ContextMenu id="value_menu_id">
        <Item onClick={this.props.addMix}>Add Mix</Item>
        <Item disabled={true}>Delete Mix</Item>
      </ContextMenu>
    );
  }
}

MixMenu.propTypes = {
  addMix: PropTypes.func.isRequired,
  removeMix: PropTypes.func.isRequired,
  isMixHeader: PropTypes.bool,
  menuId: PropTypes.string,
  mixName: PropTypes.string,
};

export default connect(null, { addMix, removeMix })(MixMenu);
