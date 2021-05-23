import React from 'react';
import { Col, Form, Image, Container, Row, Button } from 'react-bootstrap';
import registerIcon from '../assets/register-icon.png';

const handleClick = () => {
    alert('hello')
  }

const Register = (props) => {
    return (
        <Container fluid className="registration">
          <Row className="justify-content-center align-items-center">
            <Col md={12} lg={8} xl={6} className="reg-form">
                <Row className="header">
                    <Image src={registerIcon} className="icon img-fluid" alt="icon" />
                    <h2 className="register-heading">Register Your Pantry</h2>
                </Row>
                <Form className="regform-content pt-5">
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
                      </Col>
                  </Form.Group>
                  <Form.Row className="additional-text">
                    <Form.Text>Include as much details as possible</Form.Text>
                  </Form.Row>
                  <Form.Group as={Row}>
                      <Form.Label column lg={4} className="label-size-restrict">Other Information</Form.Label>
                      <Col>
                        <Form.Control as="textarea" className="textarea" />
                      </Col>
                  </Form.Group>
                  <Form.Row className="additional-text">
                    <Form.Text>You may include other relevant information such as links to your public posts about the pantry for updates, available goods, time and days open, etc.</Form.Text>
                  </Form.Row>
                  <Button  
                    className="btn btn-outline-primary col-md-3 offset-md-8"
                    onclick={handleClick}
                    >
                      REGISTER
                  </Button>
                    {/* <Form.Row>
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
                  </> */}
                  {/* <Button className="register-btn col-md-3 offset-md-8">REGISTER</Button> */}
              </Form>
            </Col>
          </Row>
        </Container>
    );
}

export default Register;