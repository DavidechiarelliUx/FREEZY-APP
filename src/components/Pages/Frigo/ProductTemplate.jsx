import { useEffect, useState } from "react";
import { fetchProductTemplate } from "../../../redux/action/productTemplateActions";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button, Row, Col, Container, Form, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import arrowBack from "../../../assets/listIcon/arrowBack.svg"
import frigoImage from "../../../assets/image/frigoImage.svg";
import { fetchFridgeProduct, getFridgeProducts } from "../../../redux/action/fridgeProductActions";
import ModalQuantity from "./ModalQuantity";

const ProductTemplate = () => {
  const dispatch = useDispatch();
  const templates = useSelector((state) => state.productTemplate.template);
  const loading = useSelector((state) => state.productTemplate.loading);
  const error = useSelector((state) => state.productTemplate.error);

  const [searchTerm, setSearchTerm] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [prodottoSelezionato, setProdottoSelezionato] = useState(null);
  const [quantita, setQuantita] = useState("");
  const [dataScadenza, setDataScadenza] = useState("");



const navigate= useNavigate();
  useEffect(() => {
    dispatch(fetchProductTemplate());
  }, [dispatch]);

  const filteredTemplates = templates.filter((template) => template.name.toLowerCase().includes(searchTerm.toLowerCase()));


 const handleAddProduct = (template) => {
  setProdottoSelezionato(template);
  setQuantita("");
  setDataScadenza("");
  setShowModal(true);
};

const handleAggiuntaProdotto = () => {
  const productData = {
    productTemplateId: prodottoSelezionato.id,
    quantita: parseInt(quantita),
    dataScadenza,
  };

  dispatch(fetchFridgeProduct(productData))
    .then(() => {
      dispatch(getFridgeProducts());

      setShowToast(true);
      setShowModal(false);
    })
    .catch(() => {
      setErrorMessage("Errore durante l'aggiunta del prodotto");
    });
};



  return (
    <>
      <Image src={frigoImage} alt="image frigo" className="bgTop"></Image>
      <Container style={{ paddingBottom: "100px" }}>
        <Row className=" align-items-center text-center mb-3">
          <Col xs={1}>
            <Image src={arrowBack} alt="Back" style={{ width: "35px", height: "35px" }} onClick={() => navigate(-1)} />
          </Col>
          <Col>
            <h2 className=" text-light  text-center align-center">Scegli un Prodotto</h2>
          </Col>
        </Row>

        <Form className="mb-4">
          <Form.Control
            type="text"
            placeholder="Cerca prodotto..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="rounded-pill shadow-sm"
          />
        </Form>

        {loading && <p>Loading...</p>}
        {error && <p>Errore: {error}</p>}
        {errorMessage && (
          <div className="alert alert-danger text-center" role="alert">
            {errorMessage}
          </div>
        )}

        {showToast && (
          <div className="toast show position-fixed bottom-0 end-0 m-3" role="alert" style={{ zIndex: 9999, minWidth: "200px" }}>
            <div className="toast-header bg-success text-white">
              <strong className="me-auto">Successo</strong>
              <button type="button" className="btn-close btn-close-white" onClick={() => setShowToast(false)}></button>
            </div>
            <div className="toast-body">Prodotto aggiunto al frigo!</div>
          </div>
        )}

        <Row className="g-3">
          {filteredTemplates.map((template) => (
            <Col key={template.id} xs={6} sm={4} md={3} lg={2}>
              <Card className="h-100 shadow-sm rounded-4 text-center border-0" style={{ fontSize: "0.75rem" }}>
                <div style={{ height: "100px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Card.Img variant="top" src={template.image} style={{ maxHeight: "100px", objectFit: "contain" }} />
                </div>
                <Card.Body className="p-2 d-flex flex-column justify-content-between">
                  <Card.Title style={{ fontSize: "0.85rem" }}>{template.name}</Card.Title>

                  <Button
                    className="border-0 mt-1 rounded-pill"
                    style={{
                      fontSize: "0.6rem",
                      background: "linear-gradient(to right, #7C67BB, #00BFA6)",
                      color: "white",
                      fontWeight: "500",
                    }}
                    onClick={() => handleAddProduct(template)}
                  >
                    Aggiungi Prodotto
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <ModalQuantity
        show={showModal}
        onHide={() => setShowModal(false)}
        prodotto={prodottoSelezionato}
        quantita={quantita}
        setQuantita={setQuantita}
        dataScadenza={dataScadenza}
        setDataScadenza={setDataScadenza}
        onConfirm={handleAggiuntaProdotto}
      />
    </>
  );
};

export default ProductTemplate;
