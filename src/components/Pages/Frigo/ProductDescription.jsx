import { Container, Image, Row, Button, Modal } from "react-bootstrap";
import addCart from "../../../assets/listIcon/add-cart.svg";
import cestino from "../../../assets/listIcon/cestino.svg";
import { useDispatch } from "react-redux";
import { deleteFridgeProduct } from "../../../redux/action/fridgeProductActions";

function ProductDescription({ prodotto, onClose }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteFridgeProduct(prodotto.id));
    onClose(); // chiudo la modale dopo la cancellazione
  };
const calcolaGiorniRimanenti = (dataScadenza) => {
  const oggi = new Date();
  const scadenza = new Date(dataScadenza);
  const differenzaInMs = scadenza - oggi;
  const giorni = Math.ceil(differenzaInMs / (1000 * 60 * 60 * 24));
  return giorni >= 0 ? giorni : 0;
};

const giorniRimanenti = calcolaGiorniRimanenti(prodotto.dataScadenza);
  return (
    <>
      <Modal
        className="modal show"
        style={{
          display: "block",
          position: "absolute",
          top: "0",
          backgroundColor: "rgba(0,0,0,0.3)",
          backdropFilter: "blur(4px)",
        }}
        show
        onHide={onClose}
        centered
      >
        <Modal.Header closeButton className="border-0 bg-transparent"></Modal.Header>

        <Container fluid>
          <Row className="d-flex flex-column justify-content-center align-items-center text-center">
            <Image
              alt={prodotto.nomeProdotto}
              src={prodotto.immagine}
              style={{
                width: "160px",
                height: "160px",
                border: "3px solid #00BFA6",
                borderRadius: "20px",
                objectFit: "contain",
              }}
            />
            <Modal.Title className="title-color mt-3" style={{ fontSize: "1.5rem", fontWeight: "600" }}>
              {prodotto.nomeProdotto}
            </Modal.Title>
          </Row>
        </Container>

        <Modal.Body className="text-center">
          <p style={{ fontSize: "0.9rem" }}>
            <strong>Scadenza:</strong> {giorniRimanenti} giorni
          </p>
          <p style={{ fontSize: "0.9rem" }}>
            <strong>Quantità:</strong> {prodotto.quantita} gr
          </p>
          <div className="pt-2">
            <h5 className="title-color">Come conservarla?</h5>
            <p style={{ fontSize: "0.85rem" }}>{prodotto.conservazione}</p>
          </div>
        </Modal.Body>

        <Modal.Footer className="d-flex justify-content-center border-0 gap-3">
          <Button variant="outline-success" className="rounded-circle" style={{ width: "50px", height: "50px" }}>
            <Image src={addCart} style={{ width: "25px" }} />
          </Button>

          <Button variant="outline-danger" className="rounded-circle" style={{ width: "50px", height: "50px" }} onClick={handleDelete}>
            <Image src={cestino} style={{ width: "25px" }} />
          </Button>
        </Modal.Footer>

        <div className="text-center pb-4">
          <Button
            className="rounded-pill px-4 py-2"
            style={{
              background: "linear-gradient(to right, #7C67BB, #00BFA6)",
              border: "none",
              fontSize: "0.85rem",
            }}
          >
            Cuciniamo con questo prodotto
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default ProductDescription;
