import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Login extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>ID ou email:</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="exampleEmail" placeholder="" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Password</Label>
          <Col sm={10}>
            <Input type="password" name="email" id="exampleEmail" placeholder="" />
          </Col>
        </FormGroup>
        
       
        
          
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}