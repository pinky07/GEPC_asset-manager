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

import TreeService from '../../services/treeService';
import { updateDetailsNode } from '../../actions';
import ColorPicker from './colorPicker';

export class NodeDetails extends React.Component {
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
    };
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
    return (
      <div className="nodeDetails">
        <Card>
          <CardBlock>
            <CardTitle>Node Details</CardTitle>

            <InputGroup>
              <InputGroupAddon>AA Category</InputGroupAddon>
              <Input
                type="select"
                onChange={event => this.onChangeInput(event, 'aa_category')} // TODO Review this!
                disabled={this.isRootNode()}>
                <option>AA Category 1</option>
                <option>AA Category 2</option>
                <option>AA Category 3</option>
              </Input>
            </InputGroup>

            <InputGroup>
              <InputGroupAddon>AA Benchmark</InputGroupAddon>
              <Input
                type="select"
                onChange={event => this.onChangeInput(event, 'aa_benchmark')} // TODO Review this!
                disabled={this.isRootNode()}>
                <option>AA Benchmark 1</option>
                <option>AA Benchmark 2</option>
                <option>AA Benchmark 3</option>
              </Input>
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
  selectedNode: PropTypes.object,
  updateDetailsNode: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    selectedNode: state.allocationTree.selectedNode,
  };
};

export default connect(mapStateToProps, { updateDetailsNode })(NodeDetails);
