import React from 'react';
import { Col, Form, Image, Container, Row, Button } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import registerIcon from '../assets/register-icon.png';

const Register = (props) => {
    return (
        <Container fluid className="registration">
          <Row className="justify-content-center align-items-center">
            <Col sm={12} lg={8} xl={6} className="reg-form">
              <Form>
                <fieldset className="regform-content">
                  <legend className="form-legend">
                    <Image src={registerIcon} className="icon img-fluid" alt="icon" />
                    <h2 className="register-heading">Register Your Pantry</h2>
                  </legend>
                  <Form.Group  as={Row}>
                      <Form.Label column lg={4} className="label-size-restrict">Name of the Community Pantry</Form.Label>
                      <Col>
                        <Form.Control type="text" />
                      </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                      <Form.Label column lg={4} className="label-size-restrict">Contact Person</Form.Label>
                      <Col>
                        <Form.Control type="text" />
                      </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                      <Form.Label column lg={4} className="label-size-restrict">Contact Number</Form.Label>
                      <Col>
                        <Form.Control type="text" />
                      </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                      <Form.Label column lg={4} className="label-size-restrict">E-mail Address</Form.Label>
                      <Col>
                        <Form.Control type="email" />
                      </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                      <Form.Label column lg={4} className="label-size-restrict">
                        Location
                      </Form.Label>
                      <Col>
                        <Form.Control type="text" />
                        <Form.Row className="additional-text">
                          <Form.Text>Include as much details as possible</Form.Text>
                        </Form.Row>
                      </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                      <Form.Label column lg={4} className="label-size-restrict">Other Information</Form.Label>
                      <Col>
                        <Form.Control as="textarea" className="textarea" />
                        <Form.Row className="additional-text">
                          <Form.Text>You may include other relevant information such as links to your public posts about the pantry for updates, available goods, time and days open, etc.</Form.Text>
                        </Form.Row>
                      </Col>
                  </Form.Group>
                </fieldset>
                <Form.Row className="button-form-row">
                  <LinkContainer to="/donation">
                    <Button className="next-page-button">Next page &#62;&#62;</Button>
                  </LinkContainer>
                </Form.Row>
              </Form>
            </Col>
          </Row>
        </Container>
    );
}

export default Register;