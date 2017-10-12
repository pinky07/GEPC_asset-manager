import {
  Card,
  CardBlock,
  CardTitle,
  Input,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';

import ColorPicker from './colorPicker';
import TreeService from '../../services/treeService';
import {
  updateDetailsNode,
  getAllAssetCategories,
  getAllAssetAllocationModelingBenchmarks,
} from '../../actions';

/**
 * Renders the selected node details.
 * 
 * @author Francisco Zuñiga
 * @author Rubén Jiménez
 * @class NodeDetails
 * @extends {React.Component}
 */
export class NodeDetails extends React.Component {
  /**
   * Creates an instance of NodeDetails.
   * 
   * @param {any} props Properties passed to this Component.
   * @memberof NodeDetails
   */
  constructor(props) {
    super(props);
    this.node = {
      clientname: '',
      planname: '',
      accountgrouptype: '',
      accountgroupid: '',
      accountgroupname: '',
      accountgroupshortname: '',
      accountgroupperformanceenddate: null,
      level: 0,
      id: 0,
      parent_object_id: '',
      as_of: '',
      policy_value: 0,
      aa_category: null,
      aa_model_benchmark: null,
      actual_mv: null,
    };
    this.state = {
      node: this.node,
    };
  }

  /**
   * Invoked immediately after a component is mounted. Dispatches actions to
   * download data required by this component.
   * 
   * @memberof NodeDetails
   */
  componentDidMount() {
    // Dispatch an action to fecth Asset Allocation Categories
    this.props.getAllAssetCategories();
    // Dispatch an action to fetch Asset Allocation Modeling Benchmarks
    this.props.getAllAssetAllocationModelingBenchmarks();
  }

  componentWillReceiveProps(nextProps) {
    console.log('LOL!');
    if (nextProps.selectedNode) {
      const { node } = nextProps.selectedNode;
      this.setState({
        node,
      });
    } else {
      this.setState({
        node: this.node,
      });
    }
  }

  onChangeInput = (event, nodeProp) => {
    let node = { ...this.state.node };
    node[nodeProp] = event.target.value;
    if (nodeProp === 'accountgroupname') {
      node.title = node.accountgroupname;
    }
    this.setState({
      node,
    });
  };

  /**
   * When the user changes the AA Category, this method will receive the 
   * selected option or undefined if no option present in the list was selected.
   * If an option is actually selected, an action to load the market benchmarks
   * will be dispatched.
   * 
   * @param {object} selectedOption Option selected by the user
   */
  onChangeAACategory = selectedOption => {
    let selectedOptionValue = null;
    if (selectedOption) {
      selectedOptionValue = selectedOption.value;
    }
    this.setState(
      {
        ...this.state,
        node: {
          ...this.state.node,
          aa_category: selectedOptionValue,
        },
      },
      () => this.props.updateDetailsNode(this.state.node)
    );
  };

  /**
   * When the user changes the AA Benchmark, this method will receive the
   * selected option or undefined if no option present in the list was selected.
   * 
   * @memberof NodeDetails
   */
  onChangeAABenchmark = selectedOption => {
    let selectedOptionValue = null;
    if (selectedOption) {
      selectedOptionValue = selectedOption.value;
    }
    this.setState(
      {
        ...this.state,
        node: {
          ...this.state.node,
          aa_model_benchmark: selectedOptionValue,
        },
      },
      () => this.props.updateDetailsNode(this.state.node)
    );
  };

  onChangePolicy(event) {
    this.setState({
      node: {
        ...this.state.node,
        policy_value: event.target.value,
      },
    });
  }

  onChangeActual(event) {
    this.setState({
      node: {
        ...this.state.node,
        actual_mv: event.target.value,
      },
    });
  }

  isRootNode = () => TreeService().isRootNode(this.props.selectedNode);

  renderPolicyValue = () =>
    this.state.node.policy_value ? `${this.state.node.policy_value}%` : '';

  onBlurTest = () => this.props.updateDetailsNode(this.state.node);

  changeColorAssignment = color => {
    this.setState(
      {
        node: {
          ...this.state.node,
          colorAssignment: color,
        },
      },
      () => this.props.updateDetailsNode(this.state.node)
    );
  };

  mapItem2Option(item) {
    let option = {};
    option.value = item.name;
    option.label = item.name;
    return option;
  }

  render() {
    const { isLoading } = this.props;
    const { node } = this.state;

    const allAssetCategoriesOptions = this.props.assetAllocationCategories.all.map(
      this.mapItem2Option
    );
    const allAssetAllocationModelingBenchmarksOptions = this.props.assetAllocationModelingBenchmarks.map(
      this.mapItem2Option
    );

    console.log('Props', this.props);
    console.log('Node', node);
    
    return (
      <div className="nodeDetails">
        <Card>
          <CardBlock>
            <CardTitle>Node Details</CardTitle>

            <InputGroup>
              <InputGroupAddon>AA Category</InputGroupAddon>
              <Select
                isLoading={isLoading}
                name="aa_category"
                value={node.aa_category}
                options={allAssetCategoriesOptions}
                onChange={this.onChangeAACategory}
                disabled={this.isRootNode()}
              />
            </InputGroup>

            <InputGroup>
              <InputGroupAddon>AA Benchmark</InputGroupAddon>
              <Select
                isLoading={isLoading}
                name="aa_benchmark"
                value={node.aa_model_benchmark}
                options={allAssetAllocationModelingBenchmarksOptions}
                onChange={this.onChangeAABenchmark}
                disabled={this.isRootNode()}
              />
            </InputGroup>

            <InputGroup>
              <InputGroupAddon>Node Name</InputGroupAddon>
              <Input
                value={this.state.node.accountgroupname}
                onChange={event =>
                  this.onChangeInput(event, 'accountgroupname')}
                disabled={this.isRootNode()}
              />
            </InputGroup>

            <InputGroup>
              <InputGroupAddon>Chart Abbreviation</InputGroupAddon>
              <Input
                value="Chart Abbreviation"
                onChange={event =>
                  this.onChangeInput(event, 'chart_abbreviation')} // TODO Review this!
                disabled={this.isRootNode()}
              />
            </InputGroup>

            <InputGroup>
              <InputGroupAddon>Short Code</InputGroupAddon>
              <Input
                type="select"
                onChange={event => this.onChangeInput(event, 'short_code')} // TODO Review this!
                disabled={this.isRootNode()}>
                <option>Short Code 1</option>
                <option>Short Code 2</option>
                <option>Short Code 3</option>
              </Input>
            </InputGroup>

            <InputGroup>
              <InputGroupAddon>CRM InvProd</InputGroupAddon>
              <Input disabled={this.isRootNode()} />
            </InputGroup>

            <InputGroup>
              <InputGroupAddon>Policy Weight</InputGroupAddon>
              <Input
                value={this.renderPolicyValue()}
                onChange={this.onChangePolicy}
                disabled={this.isRootNode()}
              />
            </InputGroup>

            <InputGroup>
              <InputGroupAddon>Actual Market Value</InputGroupAddon>
              <Input
                value={this.state.node.actual_mv || ''}
                onChange={this.onChangeActual}
                disabled={this.isRootNode()}
              />
            </InputGroup>

            <InputGroup>
              <InputGroupAddon>Color Assignment</InputGroupAddon>
              <div
                className={
                  this.isRootNode()
                    ? 'colorPickerWrapper disabled'
                    : 'colorPickerWrapper'
                }>
                <ColorPicker
                  changeColor={this.changeColorAssignment}
                  disabled={this.isRootNode()}
                />
              </div>
            </InputGroup>

            <InputGroup>
              <InputGroupAddon>Liquidity</InputGroupAddon>
              <Input
                type="select"
                onChange={event => this.onChangeInput(event, 'liquidity')} // TODO Review this!
                disabled={this.isRootNode()}>
                <option>Daily/Weekly</option>
                <option>Monthly</option>
                <option>Quarterly</option>
                <option>Semi-Annually</option>
                <option>Annually</option>
                <option>Illiquid</option>
              </Input>
            </InputGroup>

            <InputGroup>
              <InputGroupAddon>Active/Passive</InputGroupAddon>
              <Input
                type="select"
                onChange={event => this.onChangeInput(event, 'active_passive')} // TODO Review this!
                disabled={this.isRootNode()}>
                <option>Active</option>
                <option>Passive</option>
              </Input>
            </InputGroup>

            <InputGroup>
              <InputGroupAddon>Current Expense Ratio</InputGroupAddon>
              <Input disabled={this.isRootNode()} />
            </InputGroup>

            <InputGroup>
              <InputGroupAddon>Cost Basis</InputGroupAddon>
              <Input disabled={this.isRootNode()} />
            </InputGroup>
          </CardBlock>
        </Card>
      </div>
    );
  }
}

NodeDetails.propTypes = {
  // From store
  assetAllocationCategories: PropTypes.object.isRequired,
  assetAllocationModelingBenchmarks: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  selectedNode: PropTypes.object,
  // Actions
  updateDetailsNode: PropTypes.func.isRequired,
  getAllAssetCategories: PropTypes.func.isRequired,
  getAllAssetAllocationModelingBenchmarks: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    assetAllocationCategories: state.shared.assetAllocationCategories,
    assetAllocationModelingBenchmarks:
      state.shared.assetAllocationModelingBenchmarks,
    isLoading: state.shared.isLoading,
    selectedNode: state.allocationTree.selectedNode,
  };
};

export default connect(mapStateToProps, {
  updateDetailsNode,
  getAllAssetCategories,
  getAllAssetAllocationModelingBenchmarks,
})(NodeDetails);
