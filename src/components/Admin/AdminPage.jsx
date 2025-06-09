import { Container, Row, Col, Card, Image } from "react-bootstrap";
import prodottoIcon from "../../assets/image/guanciale.svg";
import ricettaIcon from "../../assets/image/SalmoneRicetta.svg";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
    const navigate = useNavigate()

        return (
          <>
            <Container fluid>
              <Row className="justify-content-center">
                <h5 className="title-color text-center" style={{ fontWeight: "700" }}>
                  Ciao Admin
                </h5>
                <Col xs={10} md={5} lg={4} className="mb-1">
                  <Card
                    className="text-center shadow-lg p-3 rounded-4 border-0"
                    onClick={() => {
                      navigate("/productManager");
                    }}
                  >
                    <Card.Body>
                      <Image src={prodottoIcon} alt="Gestione Prodotti" style={{ width: "80px" }} className="mb-3" />
                      <Card.Title className="title-color fw-bold">Gestione Dei Prodotti</Card.Title>
                      <Card.Text>Inserisci, modifica o elimina i prodotti base.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={10} md={5} lg={4} className="mb-4">
                  <Card
                    className="text-center shadow-lg p-3 rounded-4 border-0"
                    onClick={() => {
                      navigate("/recipeManager");
                    }}
                  >
                    <Card.Body>
                      <Image src={ricettaIcon} alt="Gestione Ricette" style={{ width: "80px" }} className="mb-3" />
                      <Card.Title className="title-color fw-bold">Gestione Delle Ricette</Card.Title>
                      <Card.Text>Inserisci, modifica o elimina le ricette.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </>
        );
    }

export default AdminPage;
