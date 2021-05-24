import React from 'react';
import { Col, Form, Image, Container, Row, Button } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import registerIcon from '../assets/register-icon.png';

const Donation = (props) => {
    return (
        <Container fluid className="registration">
          <Row className="justify-content-center align-items-center">
            <Col sm={12} lg={8} xl={6} className="reg-form">
              <Form>
                <fieldset className="regform-content">
                  <legend className="form-legend">
                    <Image src={registerIcon} className="icon img-fluid" alt="icon" />
                    <h2 className="register-heading">Donation Details</h2>
                  </legend>
                  <Form.Group as={Row} className="donation-option-row">
                      <Col>
                        <Form.Control as="select" defaultValue="GCash" className="select-donation-option">
                            <option>GCash</option>
                            <option>PayPal</option>
                            <option>PayMaya</option>
                            <option>Bank Transfer</option>
                        </Form.Control>
                      </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="donation-input-questions">
                      <Form.Label column lg={4} className="label-size-restrict">Account Name</Form.Label>
                      <Col>
                        <Form.Control type="text" />
                      </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="donation-input-questions">
                      <Form.Label column lg={4} className="label-size-restrict">Account Number</Form.Label>
                      <Col>
                        <Form.Control type="text" />
                      </Col>
                  </Form.Group>
                  <Form.Row className="additional-text">
                    <Form.Text>You may include other relevant information such as links to your public posts about the pantry for updates, available goods, time and days open, etc.</Form.Text>
                </Form.Row>
                  <Form.Group as={Row} className="donation-input-questions">
                      <Form.Label column lg={4} className="label-size-restrict">Link</Form.Label>
                      <Col>
                        <Form.Control type="text" />
                      </Col>
                  </Form.Group>
                </fieldset>
                <Form.Row className="button-form-row">
                  <Col id="button-previous">
                    <LinkContainer to="/register">
                      <Button className="next-page-button" id="previous-button-donation">&#60;&#60; Previous page</Button>
                    </LinkContainer>
                  </Col>
                  <Col id="button-register">
                    <Button className="register-button-donation">Register</Button>
                  </Col>
                </Form.Row>
              </Form>
            </Col>
          </Row>
        </Container>
    );
}

export default Donation;