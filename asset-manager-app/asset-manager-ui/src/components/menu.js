import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import {
  copyTree,
  copyTreeWithoutManager,
  deleteTree,
  importMix,
  loadIFMarketValues,
  loadIFTree,
  newTree,
  preview,
} from '../actions';

/**
 * Displays a menu
 * @export
 * @class Menu
 * @extends {React.Component}
 */
export class Menu extends React.Component {
  /**
   * Renders this component
   * @returns Rendered HTML
   * @memberof Menu
   */
  render() {
    const { treeViewSelected } = this.props;
    const { data } = this.props.tree;
    const treeWithData = data && data.length > 0;

    let buttons = [];
    if (treeViewSelected) {
      buttons = [
        {
          name: 'Load IF Tree',
          function: this.props.loadIFTree,
          disabled: treeWithData,
        },
        {
          name: 'Load IF Market Values',
          function: this.props.loadIFMarketValues,
          disabled: false,
        },
        {
          name: 'Copy Tree',
          function: this.props.copyTree,
          disabled: false,
        },
        {
          name: 'Copy Tree (w/o managers)',
          function: this.props.copyTreeWithoutManager,
          disabled: false,
        },
        {
          name: 'Delete Tree',
          function: this.props.deleteTree,
          disabled: !treeWithData,
        },
        {
          name: 'New Tree',
          function: this.props.newTree,
          disabled: treeWithData,
        },
      ];
    } else {
      buttons = [
        { name: 'Preview', function: this.props.preview, disabled: false },
        { name: 'Import Mix', function: this.props.importMix, disabled: false },
      ];
    }

    return (
      <div className="app-menu">
        <div className="buttons">
          {buttons.map((button, index) => (
            <Button
              key={index}
              color="primary"
              onClick={button.function}
              disabled={button.disabled}>
              {button.name}
            </Button>
          ))}
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  treeViewSelected: PropTypes.bool.isRequired,
  tree: PropTypes.object.isRequired,
  copyTree: PropTypes.func.isRequired,
  copyTreeWithoutManager: PropTypes.func.isRequired,
  deleteTree: PropTypes.func.isRequired,
  importMix: PropTypes.func.isRequired,
  loadIFMarketValues: PropTypes.func.isRequired,
  loadIFTree: PropTypes.func.isRequired,
  newTree: PropTypes.func.isRequired,
  preview: PropTypes.func.isRequired,
};

/**
 * Maps relevant properties to this component from the store.
 * 
 * @param {*} state 
 */
const mapStateToProps = state => {
  return {
    ...state.allocationTree,
  };
};

/**
 * Connects this component to Redux
 */
export default connect(mapStateToProps, {
  loadIFTree,
  loadIFMarketValues,
  copyTree,
  copyTreeWithoutManager,
  deleteTree,
  newTree,
  preview,
  importMix,
})(Menu);
