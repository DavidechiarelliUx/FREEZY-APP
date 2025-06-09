import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import homeImage from "../../assets/Landing/mockupHomePage.svg";
import loginImage from "../../assets/Landing/mockupLogin.svg";
import logo from "../../assets/Landing/logoColor.svg";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-bg">
      <Container className="text-center py-5">
        <Image src={logo} alt="Freezy Logo" className="logo-landing mb-4" />

        <h1 className="fw-bold title-color">Benvenuto su Freezy</h1>
        <p className="lead text-muted mt-3 animated-fade">
         freezy è un app che rivoluziona la gestione del tuo frigorifero per ridurre lo spreco alimentare e aiutarti a risparmiare tempo, denaro e cibo.
        </p>

        <Row className="align-items-center mt-5">
          <Col md={6}>
            <Image src={homeImage} alt="Home Mockup" className="img-fluid rounded" />
          </Col>
          <Col md={6} className="text-start mt-4 mt-md-0">
            <h3 className="title-color">Cosa puoi fare con Freezy?</h3>
            <ul className="feature-list">
              <li>📅 Tieni traccia dei prodotti in frigo e delle loro scadenze</li>
              <li>📋 Ricevi ricette basate su ciò che sta per scadere</li>
              <li>🛒 Fai la spesa direttamente tramite il nostro e-commerce integrato</li>
              <li>⚠️ Ricevi avvisi automatici prima che gli alimenti scadano</li>
              <li>👨‍🍳 Scopri nuovi modi per cucinare con ciò che hai</li>
            </ul>
          </Col>
        </Row>

        <Row className="align-items-center mt-5">
          <Col md={6}>
            <Image src={loginImage} alt="Login Mockup" className="img-fluid rounded login-img " />
          </Col>
          <Col md={6} className="text-start mt-5">
            <h4 className="title-color">Unisciti alla rivoluzione anti-spreco</h4>
            <p className="text-muted">
              Che tu sia uno studente, un genitore o semplicemente qualcuno che ama cucinare, Freezy ti aiuta a usare al meglio ciò che hai già in frigo.
            </p>
          </Col>
        </Row>
            <Button className="rounded-pill mt-3 bg-color border-0 px-4 py-2" onClick={() => navigate("/login")}>
              Inizia Ora
            </Button>
      </Container>
    </div>
  );
};

export default LandingPage;
