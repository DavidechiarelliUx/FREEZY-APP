import { Container, Row, Col, Image } from "react-bootstrap";
import davideImg from "../../assets/Landing/DavideImg.jpg";

const ContactPage = () => {
  return (
    <div className="contact-bg">
      <Container className="py-5 text-center">
        <h1 className="fw-bold title-color mb-5">Contattami</h1>
        <Row className="justify-content-center align-items-center">
          <Col xs={12} md={4} className="mb-4 mb-md-0">
            <Image
              src={davideImg}
              roundedCircle
              className="shadow profile-img"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                border: "3px solid #5d8233",
              }}
            />
          </Col>
          <Col xs={12} md={6} className="text-start contact-info">
            <p>
              <i className="bi bi-telephone-fill me-2 title-color"></i>
              <strong>Telefono:</strong>{" "}
              <a href="tel:+393664367468" className="contact-link">
                366 4367468
              </a>
            </p>
            <p>
              <i className="bi bi-envelope-fill me-2 title-color"></i>
              <strong>Email:</strong>{" "}
              <a href="mailto:chiarellidavide99@gmail.com" className="contact-link">
                chiarellidavide99@gmail.com
              </a>
            </p>
            <p>
              <i className="bi bi-linkedin me-2 title-color"></i>
              <strong>LinkedIn:</strong>{" "}
              <a href="https://www.linkedin.com/in/davide-chiarelli-/" target="_blank" rel="noopener noreferrer" className="contact-link">
                Davide Chiarelli
              </a>
            </p>
            <p>
              <i className="bi bi-instagram me-2 title-color"></i>
              <strong>Instagram:</strong>{" "}
              <a href="https://www.instagram.com/davide_webdev/" target="_blank" rel="noopener noreferrer" className="contact-link">
                @davide_webdev
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactPage;
