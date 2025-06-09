import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Container, Row, Col, Card, Image, Spinner, Alert } from "react-bootstrap";
import arrowBack from "../../assets/listIcon/arrowBack.svg";
import { deleteProductTemplate, fetchProductTemplate } from "../../redux/action/productTemplateActions";

const ProductTemplateManager = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { template: productTemplates, loading, error } = useSelector((state) => state.productTemplate);



  useEffect(() => {
    dispatch(fetchProductTemplate());
  }, [dispatch]);

  return (
    <Container className="mt-4">
      <Row className="d-flex justify-content-center align-items-center mb-3">
        <Col xs={1}>
          <Image src={arrowBack} alt="Back" style={{ width: "35px", height: "35px", cursor: "pointer" }} onClick={() => navigate(-1)} />
        </Col>
        <Col className="title-color fw-bold text-center">
          <h4>Gestione Prodotti Base</h4>
        </Col>
      </Row>
      <Container fluid>
        <Row className="d-flex justify-content-center align-items-center mb-5">
          <Button className="rounded-pill bg-color border-0" style={{ width: "50%" }} onClick={() => navigate("/form-product-template")}>
            Aggiungi Prodotto
          </Button>
        </Row>
      </Container>

      {loading && <Spinner animation="border" />}
      {error && <Alert variant="danger">{error}</Alert>}

      <Row>
        {productTemplates?.filter(Boolean).map((prod) => (
          <Col key={prod.id} xs={12} md={6} className="mb-4">
            <Card className="shadow rounded-4 border-0 h-100">
              <Card.Body className="text-center">
                <Image
                  src={prod?.image || "https://via.placeholder.com/100"}
                  roundedCircle
                  style={{ width: "100px", height: "100px", objectFit: "cover", border: "1px solid black" }}
                  className="mb-3"
                />
                <Row>
                  <Card.Title className="title-color fw-bold">{prod?.name || "Nome non disponibile"}</Card.Title>
                </Row>
                <Card.Text className="mb-2">
                  <strong>Tipo:</strong> {prod?.tipo || "-"} <br />
                  <strong>Unità di misura:</strong> {prod?.unitaDiMisura || "-"} <br />
                </Card.Text>
                <Card.Text style={{ fontSize: "0.9rem" }}>
                  {prod?.conservazione?.length > 60 ? prod.conservazione.substring(0, 120) + "..." : prod?.conservazione || "-"}
                </Card.Text>
                <div className="d-flex justify-content-center gap-2 mt-3">
                  <Button variant="outline-primary" onClick={() => navigate(`/form-product-template/${prod.id}`)}>
                    Modifica
                  </Button>
                  <Button variant="outline-danger" onClick={() => dispatch(deleteProductTemplate(prod.id))}>
                    Elimina
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductTemplateManager;
