import {
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import GridView from './gridView/gridView';
import Menu from './menu';
import TreeView from './treeView/treeView';
import {
  getAssetsAllocation,
  getAllocationTree,
  showGridView,
  showTreeView,
} from '../actions';

const TREE_VIEW_TAB = '1';
const GRID_VIEW_TAB = '2';

/**
 * Content component with Grid and Tree View tabs.
 * 
 * @author Francisco Zuñiga
 * @class Content
 * @extends {React.Component}
 */
export class Content extends React.Component {
  /**
   * Creates an instance of Content.
   * 
   * @param {any} props 
   * @memberof Content
   */
  constructor(props) {
    super(props);
    this.state = {
      activeTab: TREE_VIEW_TAB,
    };
  }

  /**
   * Toggles between Tree and Grid View
   * 
   * @memberof Content
   */
  toggle = index => {
    this.setState({
      activeTab: index,
    });
  };

  /**
   * Calls the action to get assets allocation
   */
  componentDidMount() {
    this.props.getAssetsAllocation();
  }

  /**
   * Checks for new assets allocation being passed as props
   * Sets the active view according to the assets allocation data
   */
  componentWillReceiveProps(nextProps) {
    if (nextProps.assetsAllocation !== this.props.assetsAllocation) {
      this.props.getAllocationTree();
    }
    if (nextProps.isTreeViewActive !== this.props.isTreeViewActive) {
      const activeTab = nextProps.isTreeViewActive
        ? TREE_VIEW_TAB
        : GRID_VIEW_TAB;
      this.toggle(activeTab);
    }
  }

  /**
   * Renders the component
   */
  render() {
    const { isLoading } = this.props;

    const treeViewSelected = this.state.activeTab === TREE_VIEW_TAB;
    const treeViewTabClass =
      this.state.activeTab === TREE_VIEW_TAB ? 'active' : '';
    const gridViewTabClass =
      this.state.activeTab === GRID_VIEW_TAB ? 'active' : '';

    const toggleTreeView = () => this.props.showTreeView();
    const toggleGridView = () => this.props.showGridView();
    return (
      <Container className="content" fluid>
        {isLoading ? <div className="loader" /> : null}
        <Row>
          <Col xs="3">
            <Nav tabs>
              <NavItem>
                <NavLink className={treeViewTabClass} onClick={toggleTreeView}>
                  Tree View
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={gridViewTabClass} onClick={toggleGridView}>
                  Grid View
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col xs="9">
            <Menu treeViewSelected={treeViewSelected} />
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId={TREE_VIEW_TAB}>
                <TreeView />
              </TabPane>
              <TabPane tabId={GRID_VIEW_TAB}>
                <GridView />
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </Container>
    );
  }
}

Content.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isTreeViewActive: PropTypes.bool.isRequired,
  showTreeView: PropTypes.func.isRequired,
  showGridView: PropTypes.func.isRequired,
  assetsAllocation: PropTypes.object.isRequired,
  getAssetsAllocation: PropTypes.func.isRequired,
  getAllocationTree: PropTypes.func.isRequired,
};

Content.defaultProps = {
  isLoading: false,
};

const mapStateToProps = state => {
  return {
    ...state.shared,
  };
};

export default connect(mapStateToProps, {
  getAssetsAllocation,
  getAllocationTree,
  showGridView,
  showTreeView,
})(Content);
