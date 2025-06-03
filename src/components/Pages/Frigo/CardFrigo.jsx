import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import cestino from "../../../assets/listIcon/cestino.svg";
import addCart from "../../../assets/listIcon/add-cart.svg";
import { useState } from "react";
import ProductDescription from "./ProductDescription";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFridgeProduct, getFridgeProducts } from "../../../redux/action/fridgeProductActions";

const CardFrigo = ({ categoriaSelezionata }) => {
const fridgeProduct = useSelector((state) => state.fridgeProduct.fridgeProducts)||[];

const prodottiFiltrati = fridgeProduct.filter((prod) => prod.tipo.toLowerCase() === categoriaSelezionata.toLowerCase());


  const [prodottoSelezionato , setProdottoSelezionato] = useState("");
  const [showModal , setShowModal] = useState(false);

  const dispatch = useDispatch();


  useEffect(()=> {
    dispatch(getFridgeProducts())
  },[dispatch])
  return (
    <>
      {prodottiFiltrati.map((elem) => (
        <Card
          key={elem.id}
          className="d-flex flex-row mt-2 shadow border-0 rounded-4"
          style={{ width: "90%", height: "90px", fontSize: "0.8rem" }}
          onClick={() => {
            setProdottoSelezionato(elem);
            setShowModal(true);
          }}
        >
          <Card.Img
            src={elem.immagine}
            alt={elem.nomeProdotto}
            style={{ width: "60px", height: "60px", objectFit: "contain", marginTop: "15px", marginLeft: "10px" }}
          />

          <Card.Body className="title-color mt-1">
            <Card.Title className="title-color" style={{ fontWeight: "400", fontSize: "15px" }}>
              {elem.nomeProdotto}
            </Card.Title>
            <Container className="p-0">
              <Row>
                <Col xs={4} style={{ fontWeight: "300", fontSize: "8px" }}>
                  <p>
                    Scadenza tra: <br />
                    {Math.ceil((new Date(elem.dataScadenza) - new Date()) / (1000 * 60 * 60 * 24))} giorni
                  </p>
                </Col>
                <Col xs={3} style={{ fontWeight: "300", fontSize: "8px" }}>
                  <p>
                    Quantità: <br />
                    {elem.quantita} gr
                  </p>
                </Col>
                <Col xs={2} className="mx-2 p-0" style={{ position: "relative", bottom: "10px" }}>
                  <Button className=" border-0 bg-transparent border-secondary">
                    <Image alt="cestino" src={addCart} style={{ width: "20px" }}></Image>
                  </Button>
                </Col>
                <Col xs={2} style={{ position: "relative", bottom: "10px" }}>
                  <Button
                    className="border-0 bg-transparent border-secondary"
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(deleteFridgeProduct(elem.id));
                    }}
                  >
                    <Image alt="cestino" src={cestino} style={{ width: "20px" }} />
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
