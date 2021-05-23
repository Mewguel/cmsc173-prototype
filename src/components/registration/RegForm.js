import React from 'react';
import { Col, Row, Form } from "react-bootstrap";


function RegisterPantry() {
    const handleClick = () => {
      alert('hello')
    }

    return (
        <div className="registration d-flex justify-content-center align-items-center">
          <div className="reg-form col-md-8 ">
                <div className="header">
                {/* <img src={require('/images/image-name.png')} /> */}
                     <img src={require("../../assets/register-icon.png").default} className="icon img-fluid" alt="icon" />
                    <h2>Register Your Pantry</h2>
                    {/* <hr class="my-4"></hr> */}
                </div>
            <div className="regform-content pt-5">
              <Form.Group>
                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
                    <Form.Control as="textarea" className="textarea"/>
                  </Col>
                </Form.Row>
                <br />
                <Form.Row>
                  <Form.Label column lg={3}>
                    Other Information
                  </Form.Label>
                  <Col>
                    <Form.Control as="textarea" className="textarea"/>
                  </Col>
                </Form.Row>
                <Form.Row class="form-text col-lg-9 offset-3">
                  <small>
                    You may include other relevant information such as links to your public posts about the pantry for updates, available goods, time and days open, etc.
                  </small>
                </Form.Row>
                <br /><br />
              </Form.Group>
            </div>
              {/* <Button className="register-btn col-md-3 offset-md-8">REGISTER</Button> */}
              <button 
                type="button" 
                class="btn btn-outline-primary col-md-3 offset-md-8"
                onclick={handleClick}
                >REGISTER</button>
          </div>
        </div>
      );
}

export default RegisterPantry;