import { Container, Row, Col, Image } from "react-bootstrap";
import commpan from "../res/commpan.jpg";

const About = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} lg={6} className="colNoPad">
          <div className="aboutSectionTall">
            <h1 className="textAlignCenter aboutHead">
              LOCATE PANTRIES WITH
              <br />
              PANTRY POINT
            </h1>
            <h4 className="textAlignCenter aboutSub">
              Give what you can, take what you need.
              <br /> Everyone’s welcome.
            </h4>
          </div>
        </Col>
        <Col xs={12} lg={6} className="colNoPad">
          <div className="aboutSectionTall">
            <Image src={commpan} className="fullImageInParent" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={6} className="colNoPad">
          <div className="aboutSectionSmall">
            <h2 className="textAlignCenter aboutSemiHead">
              Find any community pantry that you
              <br />
              need wherever you are!
            </h2>
          </div>
        </Col>
        <Col xs={12} lg={6} className="colNoPad">
          <div className="aboutSectionSmall">
            <h2 className="textAlignCenter aboutSemiHead">
              Donate to these registered communitys
              <br /> pantries without fear
            </h2>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="textAlignCenter aboutFooter">
          <h2>
            SOMETHING WRONG?
            <br />
            CALL US: 09XX-XXX-XXXX
          </h2>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
