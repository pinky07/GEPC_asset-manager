import {
  Card,
  CardBlock,
  CardTitle,
  Input,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap';
import React from 'react';

class MixDetails extends React.Component {
  render() {
    return (
      <div className="nodeDetails mixDetails">
        <Card>
          <CardBlock>
            <CardTitle>Mix Details</CardTitle>
            <InputGroup>
              <InputGroupAddon>Comments</InputGroupAddon>
              <Input />
            </InputGroup>
            <br />

            <InputGroup>
              <InputGroupAddon>Mix Name</InputGroupAddon>
              <Input />
            </InputGroup>
            <br />

            <InputGroup>
              <InputGroupAddon>Effective Date</InputGroupAddon>
              <Input />
            </InputGroup>
            <br />

            <InputGroup>
              <InputGroupAddon>Mix Type</InputGroupAddon>
              <Input />
            </InputGroup>
            <br />

            <InputGroup>
              <InputGroupAddon>Market Value</InputGroupAddon>
              <Input />
            </InputGroup>
          </CardBlock>
        </Card>
      </div>
    );
  }
}

export default MixDetails;
