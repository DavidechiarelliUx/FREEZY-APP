import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import cestino from "../../../assets/listIcon/cestino.svg";
import addCart from "../../../assets/listIcon/add-cart.svg";
import prodotti from "../../Utils/mock/mockProdotti";
import { useState } from "react";
import ProductDescription from "./ProductDescription";

const CardFrigo = ({ categoriaSelezionata }) => {
  const prodottiFiltrati = prodotti.filter((prod) => prod.tipo.toLowerCase() === categoriaSelezionata.toLowerCase());

  const [prodottoSelezionato , setProdottoSelezionato] = useState("");
  const [showModal , setShowModal] = useState(false);
  return (
    <>
      {prodottiFiltrati.map((elem) => (
        <Card
          key={elem.id}
          className="d-flex flex-row mt-2"
          style={{ width: "90%", height: "80px", border: "1px solid grey" }}
          onClick={() => {setProdottoSelezionato(elem); setShowModal(true)}}
        >
          <Card.Img
            variant="top"
            src={elem.image}
            alt="insalata"
            style={{ width: "50px", height: "50px", position: "relative", top: "1rem" }}
            className="ps-2 "
          />
          <Card.Body className="title-color">
            <Card.Title className="title-color" style={{ fontWeight: "400", fontSize: "15px" }}>
              {elem.nomeProdotto}
            </Card.Title>
            <Container className="p-0">
              <Row>
                <Col xs={4} style={{ fontWeight: "300", fontSize: "8px" }}>
                  <p>
                    Scadenza tra : <br />
                    {elem.scadenza} days
                  </p>
                </Col>
                <Col xs={3} style={{ fontWeight: "300", fontSize: "8px" }}>
                  <p>
                    Quantità : <br />
                    {elem.quantità} gr
                  </p>
                </Col>
                <Col xs={2} className="mx-2 p-0" style={{ position: "relative", bottom: "10px" }}>
                  <Button className="border-1 bg-transparent border-secondary">
                    <Image alt="cestino" src={addCart} style={{ width: "20px" }}></Image>
                  </Button>
                </Col>
                <Col xs={2} style={{ position: "relative", bottom: "10px" }}>
                  <Button className="border-1 bg-transparent border-secondary">
                    <Image alt="cestino" src={cestino} style={{ width: "20px" }}></Image>
                  </Button>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      ))}
      {showModal && <ProductDescription prodotto={prodottoSelezionato} onClose={() => setShowModal(false)} />}
    </>
  );
};

export default CardFrigo;
