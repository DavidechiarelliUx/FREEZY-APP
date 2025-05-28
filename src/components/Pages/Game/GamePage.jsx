import { Card, Col, Container, Image, Row } from "react-bootstrap";
import elipseGame from "../../../assets/gameImage/elipseGame.svg"
import avatar from "../../../assets/image/avatar.svg";
import avatar1 from "../../../assets/gameImage/avatar1.svg";
import avatar2 from "../../../assets/gameImage/avatar2.svg";
import avatar3 from "../../../assets/gameImage/avatar3.svg";
import badge1 from "../../../assets/gameImage/badge1.svg";
import badge2 from "../../../assets/gameImage/badge2.svg";
import badge3 from "../../../assets/gameImage/badge3.svg";
import badge4 from "../../../assets/gameImage/badge4.svg";
import badge5 from "../../../assets/gameImage/badge5.svg";
import albero from "../../../assets/gameImage/albero.svg";
import Ellipse1 from "../../../assets/gameImage/Ellipse1.svg";
import Elipse2 from "../../../assets/gameImage/Elipse2.svg";

const GamePage = () => {
  return (
    <>
      <Image src={elipseGame} alt="elipseGame" className="bgTop"></Image>
      <Image src={Elipse2} alt="elipseGame" style={{ position: "absolute", top: "480px", right: "0" }}></Image>
      <Image src={Ellipse1} alt="elipseGame" style={{ position: "absolute", top: "150px" }}></Image>
      <Container fluid>
        <Row className="d-flex justify-content-center text-center">
          <Col>
            <h2 className="ms-4 text-light" style={{ fontSize: "0.9rem" }}>
              Giochiamo Insieme !
            </h2>
          </Col>
        </Row>
      </Container>
      <Container fluid className="mt-4">
        <Row className="d-flex justify-content-center text-center">
          <Col>
            <h2 className="ms-4 text-light" style={{ fontSize: "0.9rem" }}>
              Scegli la modalità di gioco :
            </h2>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center text-center mt-3  ">
          <Card style={{ width: "10rem" }} className="align-items-center">
            <Card.Img variant="top" src={avatar} style={{ width: "85px" }} className="mt-2" />
            <Card.Body>
              <Card.Title className="title-color">Singolo</Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ width: "10rem" }} className="align-items-center">
            <Container fluid>
              <Row>
                <Col>
                  <Card.Img variant="top" src={avatar} style={{ width: "40px" }} className="mt-2" />
                </Col>
                <Col>
                  <Card.Img variant="top" src={avatar1} style={{ width: "40px" }} className="mt-2" />
                </Col>
                <Col>
                  <Card.Img variant="top" src={avatar2} style={{ width: "40px" }} className="mt-2" />
                </Col>
                <Col>
                  <Card.Img variant="top" src={avatar3} style={{ width: "40px" }} className="mt-2" />
                </Col>
              </Row>
            </Container>
            <Card.Body>
              <Card.Title className="title-color">Online</Card.Title>
            </Card.Body>
          </Card>
        </Row>
      </Container>
      <Container fluid className="mt-4">
        <h4 className="title-color px-3" style={{ fontWeight: "400" }}>
          I tuoi badge
        </h4>
        <Row className="d-flex flex-row flex-nowrap overflow-auto px-2 mt-3">
          <Image src={badge1} alt="badgeIcon" style={{ width: "60px" }}></Image>
          <Image src={badge2} alt="badgeIcon" style={{ width: "60px" }}></Image>
          <Image src={badge3} alt="badgeIcon" style={{ width: "60px" }}></Image>
          <Image src={badge4} alt="badgeIcon" style={{ width: "60px" }}></Image>
          <Image src={badge5} alt="badgeIcon" style={{ width: "60px" }}></Image>
          <Image src={badge5} alt="badgeIcon" style={{ width: "60px" }}></Image>
          <Image src={badge5} alt="badgeIcon" style={{ width: "60px" }}></Image>
          <Image src={badge5} alt="badgeIcon" style={{ width: "60px" }}></Image>
          <Image src={badge5} alt="badgeIcon" style={{ width: "60px" }}></Image>
          <Image src={badge5} alt="badgeIcon" style={{ width: "60px" }}></Image>
          <Image src={badge5} alt="badgeIcon" style={{ width: "60px" }}></Image>
        </Row>
        <h4 className="title-color px-3 mt-4">I tuoi progressi</h4>
        <Row className="d-flex justify-content-center text-center">
          <Image src={albero} style={{ width: "100px" }}></Image>
          <p className="title-color" style={{ fontSize: "12px" }}>
            hey manca poco per piantare il tuo albero
          </p>
        </Row>
      </Container>
    </>
  );
};

export default GamePage;
