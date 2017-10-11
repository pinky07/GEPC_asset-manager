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
import { updateDetailsNode, getAllAssetCategories } from '../../actions';

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
      policy_value: '',
      actual_mv: '',
      accountgroupshortname: '',
      accountgroupname: '',
    };
    this.state = {
      node: this.node,
      selectedAACategoryValue: undefined,
      selectedAABenchmarkValue: undefined,
    };
  }

  /**
   * Invoked immediately after a component is mounted.
   * 
   * @memberof NodeDetails
   */
  componentDidMount() {
    // Dispatch an action to fecth Asset Allocation Categories
    this.props.getAllAssetCategories();
  }

  componentWillReceiveProps(nextProps) {
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
    let selectedOptionValue = undefined;
    if (selectedOption) {
      selectedOptionValue = selectedOption.value;
      this.props.getAssetAllocationMarketBenchmark(selectedOption.value);
    }
    this.setState(
      {
        ...this.state,
        node: {
          ...this.state.node,
          aa_category: selectedOptionValue,
        },
        selectedAACategoryValue: selectedOptionValue,
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
    let selectedOptionValue = undefined;
    if (selectedOption) {
      selectedOptionValue = selectedOption.value;
    }
    this.setState({
      ...this.state,
      selectedAABenchmarkValue: selectedOptionValue,
    });
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

  render() {
    const { isLoading } = this.props;
    const allAssetCategories = this.props.assetCategories.all;
    const allAssetCategoriesOptions = allAssetCategories.map(item => {
      let option = {};
      option.value = item.name;
      option.label = item.name;
      return option;
    });

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
                value={this.state.selectedAACategoryValue}
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
                value={this.state.selectedAABenchmarkValue}
                options={allAssetCategoriesOptions}
                onChange={this.onChangeAABenchmark}
                disabled={
                  this.isRootNode() || !this.state.selectedAACategoryValue
                }
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
                <option>Daily</option>
                <option>Monthly</option>
                <option>Yearly</option>
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
  assetAllocationCategories: PropTypes.array.isRequired,
  assetAllocationMarketBenchmarks: PropTypes.array.isRequired,
  assetCategories: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  selectedNode: PropTypes.object,
  updateDetailsNode: PropTypes.func.isRequired,
  getAllAssetCategories: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    selectedNode: state.allocationTree.selectedNode,
    assetAllocationCategories: state.shared.assetAllocationCategories,
    assetAllocationMarketBenchmarks:
      state.shared.assetAllocationMarketBenchmarks,
    assetCategories: state.shared.assetCategories,
  };
};

export default connect(mapStateToProps, {
  updateDetailsNode,
  getAllAssetCategories,
})(NodeDetails);
