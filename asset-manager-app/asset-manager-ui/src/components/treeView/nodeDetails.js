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
              <InputGroupAddon>Node Name</InputGroupAddon>
              <Input
                value={this.state.node.accountgroupname}
                onChange={event =>
                  this.onChangeInput(event, 'accountgroupname')}
                onBlur={this.onBlurTest}
              />
            </InputGroup>
            <br />

            <InputGroup>
              <InputGroupAddon>Short Code</InputGroupAddon>
              <Input
                value={this.state.node.accountgroupshortname}
                disabled={this.isRootNode()}
              />
            </InputGroup>
            <br />

            <InputGroup>
              <InputGroupAddon>CRM Invest Prod</InputGroupAddon>
              <Input disabled={this.isRootNode()} />
            </InputGroup>
            <br />

            <InputGroup>
              <InputGroupAddon>Policy Weight</InputGroupAddon>
              <Input
                value={this.renderPolicyValue()}
                onChange={this.onChangePolicy}
                disabled={this.isRootNode()}
              />
            </InputGroup>
            <br />

            <InputGroup>
              <InputGroupAddon>Actual MV</InputGroupAddon>
              <Input
                value={this.state.node.actual_mv || ''}
                onChange={this.onChangeActual}
                disabled={this.isRootNode()}
              />
            </InputGroup>
            <br />

            <InputGroup>
              <InputGroupAddon>Assumption</InputGroupAddon>
              <Input disabled={this.isRootNode()} />
            </InputGroup>
            <br />

            <InputGroup>
              <InputGroupAddon>Return Series</InputGroupAddon>
              <Input disabled={this.isRootNode()} />
            </InputGroup>
            <br />

            <InputGroup>
              <InputGroupAddon>Color Assignment</InputGroupAddon>
              <ColorPicker
                changeColor={this.changeColorAssignment}
                disabled={this.isRootNode()}
              />
            </InputGroup>
            <br />

            <InputGroup>
              <InputGroupAddon>Liquidity</InputGroupAddon>
              <Input disabled={this.isRootNode()} />
            </InputGroup>
            <br />

            <InputGroup>
              <InputGroupAddon>Active/Pasive</InputGroupAddon>
              <Input disabled={this.isRootNode()} />
            </InputGroup>
            <br />

            <InputGroup>
              <InputGroupAddon>Expense Ratio</InputGroupAddon>
              <Input disabled={this.isRootNode()} />
            </InputGroup>
            <br />

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
