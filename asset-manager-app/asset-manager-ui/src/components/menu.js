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

    let buttons = [];
    if (treeViewSelected) {
      buttons = [
        { name: 'Load IF Tree', function: this.props.loadIFTree },
        {
          name: 'Load IF Market Values',
          function: this.props.loadIFMarketValues,
        },
        { name: 'Copy Tree', function: this.props.copyTree },
        {
          name: 'Copy Tree (w/o managers)',
          function: this.props.copyTreeWithoutManager,
        },
        { name: 'Delete Tree', function: this.props.deleteTree },
        { name: 'New Tree', function: this.props.newTree },
      ];
    } else {
      buttons = [
        { name: 'Preview', function: this.props.preview },
        { name: 'Import Mix', function: this.props.importMix },
      ];
    }

    return (
      <div className="app-menu">
        <div className="buttons">
          {buttons.map((button, index) => (
            <Button key={index} color="primary" onClick={button.function}>
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
  return {};
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
