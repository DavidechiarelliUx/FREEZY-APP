import { Container, Image, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import addCart from "../../../assets/listIcon/add-cart.svg";
import cestino from "../../../assets/listIcon/cestino.svg";

function ProductDescription({prodotto, onClose}) {
  return (
    <>
    <Modal className="modal show" style={{ display: "block", position: "absolute", top: "0" }} show onHide={onClose}>
      <Modal.Header closeButton className="border-0"></Modal.Header>
      <Container fluid>
        <Row className="d-flex justify-content-center align-items-center text-center">
          <Image alt={prodotto.nomeProdotto} src={prodotto.image} style={{ width: "200px", border: "2px solid grey", borderRadius: "10px" }}></Image>
          <Modal.Title className="title-color mt-3">{prodotto.nomeProdotto}</Modal.Title>
        </Row>
      </Container>

      <Modal.Body>
        <p>Scadenza tra : {prodotto.scadenza} giorni</p>
        <p>Quantità : {prodotto.quantità} gr</p>
        <Container fluid className="pt-3">
            <Row className="d-flex justify-content-center align-items-center text-center">
        <h3 className="title-color">Come Conservarla?</h3>
        <p>{prodotto.descrizione}</p>
            </Row>     
        </Container>
      </Modal.Body>

      <Modal.Footer className="border-0 d-flex justify-content-center m-0 p-0">
        <Button variant="outline-secondary" >
          <Image src={addCart}></Image>
        </Button>
        <Button variant="outline-secondary">
          <Image src={cestino}></Image>
        </Button>
      </Modal.Footer>
    <Button className="py-2 m-3" variant="secondary">Cuciniamo con questo prodotto</Button>
    </Modal>
    </>
  );
}

export default ProductDescription;
