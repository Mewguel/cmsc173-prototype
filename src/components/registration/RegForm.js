import React from 'react';
import { Col, Row, Form, Button } from "react-bootstrap";


function RegisterPantry() {
    return (
        <div className="registration d-flex justify-content-center align-items-center">
          <div className="reg-form col-md-8">
            <div className="regform-content">
              <Form.Group>
                <div className="header row-offset-3">
                     {/* <img src="register-icon.png" class="img-fluid" alt="icon" /> */}
                    <h1>Register Your Pantry</h1>
                    {/* <hr class="my-4"></hr> */}
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <Form.Row>
                  <Form.Label column lg={3}>
                    Name of the Community Pantry
                  </Form.Label>
                  <Col>
                    <Form.Control type="text" />
                  </Col>
                </Form.Row>
                <br />
                <Form.Row>
                  <Form.Label column lg={3}>
                    Contact Person
                  </Form.Label>
                  <Col>
                    <Form.Control type="text"/>
                  </Col>
                </Form.Row>
                <br />
                <Form.Row>
                  <Form.Label column lg={3}>
                    Contact Number
                  </Form.Label>
                  <Col>
                    <Form.Control type="text"/>
                  </Col>
                </Form.Row>
                <br />
                <Form.Row>
                  <Form.Label column lg={3}>
                    E-mail Address
                  </Form.Label>
                  <Col>
                    <Form.Control type="text"/>
                  </Col>
                </Form.Row>
                <br />
                <Form.Row>
                  <Form.Label column lg={3}>
                    Location
                  </Form.Label>
                  <Col>
                    <Form.Control type="text"/>
                  </Col>
                </Form.Row>
                <br /><br />
              </Form.Group>
            </div>
              {/* <Button className="register-btn col-md-3 offset-md-8">REGISTER</Button> */}
              <button type="button" class="btn btn-outline-primary col-md-3 offset-md-8">REGISTER</button>
          </div>
        </div>
      );
}

export default RegisterPantry;