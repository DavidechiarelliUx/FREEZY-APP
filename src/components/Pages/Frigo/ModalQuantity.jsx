import { Button, Form, Modal } from "react-bootstrap";

const ModalQuantity = ({ show, onHide, prodotto, quantita, setQuantita, dataScadenza, setDataScadenza, onConfirm }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton style={{ borderBottom: "none", background: "linear-gradient(to right, #7C67BB, #00BFA6)", color: "white" }}>
        <Modal.Title style={{ fontWeight: "600", fontSize: "1rem" }}>Aggiungi: {prodotto?.name}</Modal.Title>
      </Modal.Header>

      <Modal.Body className="text-center px-4">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontSize: "0.8rem", fontWeight: "500" }}>Quantità (grammi)</Form.Label>
            <Form.Control
              type="number"
              min="1"
              value={quantita}
              onChange={(e) => setQuantita(e.target.value)}
              className="text-center rounded-pill"
              style={{ fontSize: "0.8rem", border: "1px solid #ccc" }}
              placeholder="Es. 100"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontSize: "0.8rem", fontWeight: "500" }}>Data di Scadenza</Form.Label>
            <Form.Control
              type="date"
              value={dataScadenza}
              onChange={(e) => setDataScadenza(e.target.value)}
              className="text-center rounded-pill"
              style={{ fontSize: "0.8rem", border: "1px solid #ccc" }}
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer style={{ borderTop: "none", justifyContent: "center" }}>
        <Button variant="light" onClick={onHide} className="rounded-pill px-4 me-2" style={{ fontSize: "0.7rem", border: "1px solid #ccc" }}>
          Annulla
        </Button>
        <Button
          onClick={onConfirm}
          className="rounded-pill px-4"
          style={{
            fontSize: "0.7rem",
            background: "linear-gradient(to right, #7C67BB, #00BFA6)",
            border: "none",
            color: "white",
            fontWeight: "500",
          }}
        >
          Aggiungi
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalQuantity;
