import { Col, Container, Image, Modal, Row, Button } from "react-bootstrap";
import CardProdottiHome from "./CardProdottiHome";
import CardRicette from "./CardRicette";
import bgTop from "../../../assets/image/bg-top.svg";
import bgBottom from "../../../assets/image/bg-bottom.svg";
import elipseLight from "../../../assets/image/elipseLight.svg";
import elipseColor from "../../../assets/image/elipsecolor.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFridgeProducts } from "../../../redux/action/fridgeProductActions";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  const fridgeProducts = useSelector((state) => state.fridgeProduct?.fridgeProducts || []);
  const isLoading = useSelector((state) => state.fridgeProduct?.loading || false);
  const [utente, setUtente] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalShown, setModalShown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    fetch("http://localhost:8082/api/auth/current-user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Errore nel recupero dell'utente");
        return res.json();
      })
      .then((data) => {
        setUtente(data);
      })
      .catch((err) => console.error("Errore:", err));
  }, []);

  useEffect(() => {
    if (utente) {
      dispatch(getFridgeProducts());
    }
  }, [utente]);

useEffect(() => {
  if (!isLoading && utente && !modalShown) {
    if (fridgeProducts.length === 0) {
      setShowModal(true);
      setModalShown(true); 
    }
  }
}, [fridgeProducts.length, isLoading, utente, modalShown]);

  return (
    <>
      <Image className="bgTop" src={bgTop} />
      <Image className="elipseLight" src={elipseLight} />
      <Image className="elipseColor" src={elipseColor} />

      <Container fluid className="text-center m2-4">
        <Row className="justify-content-center">
          <Col xs="auto">
            <h2 className="text-light">Benvenuto {utente?.username}</h2>
            <Image
              src={utente?.profileImage}
              alt="Profilo"
              roundedCircle
              style={{
                width: "80px",
                height: "80px",
                objectFit: "cover",
              }}
            />
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <h5 className="mt-5 ms-2 title-color" style={{ fontWeight: "500" }}>
          Questi prodotti stanno per scadere
        </h5>
        <Row className="d-flex flex-nowrap overflow-auto ms-2">
          <CardProdottiHome />
        </Row>
      </Container>

      <h5 className="mt-2 ms-4 title-color" style={{ fontWeight: "500" }}>
        Cosa cuciniamo oggi?
      </h5>
      <Container fluid className="d-flex justify-content-center gap-3">
        <CardRicette />
      </Container>

      <Image className="bgBottom" src={bgBottom} />

      <Modal key="welcome-modal" show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Benvenuto su Freezy!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Non hai ancora inserito nessun prodotto nel frigo.
          <br />
          Inizia subito ad aggiungere il tuo primo alimento!
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={() => {
              setShowModal(false);
              navigate("/productTemplate"); 
            }}
          >
            Aggiungi prodotto
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default HomePage;
