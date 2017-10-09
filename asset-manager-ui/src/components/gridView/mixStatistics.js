import { Button, Card, CardBlock, CardTitle, Collapse } from 'reactstrap';
import React from 'react';

class MixStatistics extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collapse: false };
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  };

  render() {
    return (
      <div className="statistics">
        <Button color="primary" onClick={this.toggle}>
          {this.state.collapse ? 'Hide' : 'Show'} Statistics
        </Button>

        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBlock>
              <CardTitle>Statistics</CardTitle>
            </CardBlock>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default MixStatistics;
