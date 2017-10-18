import React from 'react';
import { connect } from 'react-redux';
import { ContextMenu, Item } from 'react-contexify';
import PropTypes from 'prop-types';

import { addMix, removeMix } from '../../actions';

export class MixHeaderMenu extends React.Component {
  removeMix = targetNode => {
    this.props.removeMix(targetNode.dataset.mix);
  };

  render() {
    return (
      <ContextMenu id="mix_menu_id">
        <Item onClick={this.props.addMix}>Add Mix</Item>
        <Item onClick={this.removeMix}>Delete Mix</Item>
      </ContextMenu>
    );
  }
}

MixHeaderMenu.propTypes = {
  addMix: PropTypes.func.isRequired,
  removeMix: PropTypes.func.isRequired,
};

export default connect(null, { addMix, removeMix })(MixHeaderMenu);
