import { Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { ContextMenuProvider } from 'react-contexify';
import PropTypes from 'prop-types';
import React from 'react';
import SortableTree from 'react-sortable-tree';

import {
  getAllocationTree,
  selectNode,
  updateTree,
  searchNode,
} from '../../actions';
import Constants from '../../services/constants';
import NodeDetails from './nodeDetails';
import NodeMenu from './nodeMenu';
import TreeNodeRenderer from './treeNodeRenderer';

export class TreeView extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.tree !== this.props.tree) {
      if (!this.props.selectedNode) {
        this.props.selectNode({
          node: nextProps.tree.data[0],
          treeIndex: 0,
          path: [0],
        });
      }
    }
  }

  treeButtons = rowInfo => {
    const buttons = [
      <ContextMenuProvider key="1" id="menu_id" event="onClick">
        <button onClick={() => this.props.selectNode(rowInfo)}>...</button>
      </ContextMenuProvider>,
      <button
        key="2"
        className="buttonInfoNode"
        onClick={() => this.props.selectNode(rowInfo)}
      />,
    ];

    return buttons;
  };

  render() {
    const { tree, searchedNodeTitle } = this.props;
    return (
      <div className="allocationTree">
        <Row>
          <Col lg="8" md="8" sm="12" className="treecontainer">
            <SortableTree
              treeData={tree.data}
              onChange={treeData => this.props.updateTree(treeData)}
              canDrop={({ nextPath }) => nextPath.length > 1}
              maxDepth={Constants.MAX_TREE_DEPTH}
              generateNodeProps={rowInfo => ({
                buttons: this.treeButtons(rowInfo),
              })}
              nodeContentRenderer={TreeNodeRenderer}
              searchQuery={searchedNodeTitle}
              searchFocusOffset={0}
            />
            <NodeMenu />
          </Col>
          <Col lg="4" md="4" sm="12">
            <NodeDetails />
          </Col>
        </Row>
      </div>
    );
  }
}

TreeView.propTypes = {
  selectedNode: PropTypes.object,
  tree: PropTypes.object,
  getAllocationTree: PropTypes.func.isRequired,
  selectNode: PropTypes.func.isRequired,
  updateTree: PropTypes.func.isRequired,
  searchedNodeTitle: PropTypes.string,
};

TreeView.defaultProps = {
  tree: {
    name: '',
    data: [],
  },
};

const mapStateToProps = state => {
  return {
    ...state.allocationTree,
  };
};

export default connect(mapStateToProps, {
  getAllocationTree,
  selectNode,
  updateTree,
  searchNode,
})(TreeView);
