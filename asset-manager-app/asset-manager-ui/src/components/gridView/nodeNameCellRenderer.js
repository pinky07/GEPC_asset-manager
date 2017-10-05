import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'reactstrap';
import PropTypes from 'prop-types';

import { searchNode, showTreeView } from '../../actions';

export class NodeNameCellRenderer extends React.Component {
  search = () => {
    this.props.showTreeView();
    this.props.searchNode(this.props.value);
  };

  render() {
    return (
      <NavLink href="#" onClick={this.search}>
        {this.props.value}
      </NavLink>
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
