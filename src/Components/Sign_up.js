import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Sign_up extends React.Component {
  render() {
    return (
      <Form>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>Nom :</Label>
        <Col sm={10}>
          <Input type="email" name="email" id="exampleEmail" placeholder="" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>Prenom</Label>
        <Col sm={10}>
          <Input type="text" name="email" id="exampleEmail" placeholder="" />
        </Col>
      </FormGroup>
      
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>Mail</Label>
        <Col sm={10}>
          <Input type="text" name="email" id="exampleEmail" placeholder="" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>Telephone</Label>
        <Col sm={10}>
          <Input type="text" name="email" id="exampleEmail" placeholder="" />
        </Col>
      </FormGroup>
      
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>Addresse Postale</Label>
        <Col sm={10}>
          <Input type="text" name="email" id="exampleEmail" placeholder="" />
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