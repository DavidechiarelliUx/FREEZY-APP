import { Container, Image, Modal } from "react-bootstrap";
import egg from "../../../assets/allergeni/egg.svg";
import fish from "../../../assets/allergeni/fish.svg";
import gluten from "../../../assets/allergeni/gluten.svg";
import milk from "../../../assets/allergeni/Milk.svg";
import peanut from "../../../assets/allergeni/peanut.svg";
import shrimp from "../../../assets/allergeni/Shrimp.svg";

const RecipsDescription = ({ ricette, onClose }) => {

    const allergenIcons = {
      "egg.svg": egg,
      "fish.svg": fish,
      "gluten.svg": gluten,
      "Milk.svg": milk,
      "peanut.svg": peanut,
      "Shrimp.svg": shrimp,
    };
  return (
    <Modal show={true} onHide={onClose} centered size="md" scrollable>
      <Modal.Header closeButton className="border-0 p-2"></Modal.Header>

      <Modal.Body style={{ maxHeight: "70vh", overflowY: "auto" }}>
        {/* Titolo + immagine */}
        <Container fluid className="text-center">
          <h5 className="fw-bold mb-3 title-color" style={{ fontSize: "1rem" }}>
            {ricette.titolo}
          </h5>
          <div
            style={{
              width: "100%",
              maxWidth: "250px",
              height: "150px",
              margin: "0 auto",
              overflow: "hidden",
              borderRadius: "12px",
              border: "1px solid #ccc",
            }}
          >
            <Image alt={ricette.titolo} src={ricette.immagine} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </Container>

        {/* Allergeni */}
        <h6 className="mt-3 text-center">Allergeni</h6>
        <div className="d-flex flex-wrap gap-2 justify-content-center">
          {ricette.allergeni.map((allergene, index) => (
            <Image
              key={index}
              src={allergenIcons[allergene.icona]}
              alt={allergene.name}
              style={{ width: "25px", height: "25px", marginLeft: "6px" }}
              className=""
            />
          ))}
        </div>

        {/* Info generali */}
        <Container fluid className="mt-3">
          <h6 className="fw-semibold" style={{ fontSize: "0.8rem" }}>
            Informazioni generali
          </h6>
          <p style={{ fontSize: "0.7rem" }}>
            <strong>Difficoltà:</strong> {ricette.difficolta}
          </p>
          <p style={{ fontSize: "0.7rem" }}>
            <strong>Tempo di cottura:</strong> {ricette.tempoCottura} min
          </p>
          <p style={{ fontSize: "0.7rem" }}>
            <strong>Calorie:</strong> {ricette.calorie} kcal
          </p>
          <p style={{ fontSize: "0.7rem" }}>
            <strong>Ingredienti:</strong> {[ricette.ingredientePrincipale, ...(ricette.ingredienti || [])].join(", ")}
          </p>
        </Container>

        {/* Preparazione */}
        <Container fluid className="mt-3">
          <h6 className="fw-semibold" style={{ fontSize: "0.8rem" }}>
            Preparazione
          </h6>
          {(Array.isArray(ricette.preparazione) ? ricette.preparazione : []).map((step, i) => (
            <p key={i} style={{ fontSize: "0.7rem", marginBottom: "0.4rem" }}>
              <strong>Passaggio {i + 1}:</strong> {step}
            </p>
          ))}
        </Container>

        {/* Conservazione e consiglio */}
        <Container fluid className="mt-3">
          <h6 className="fw-semibold" style={{ fontSize: "0.8rem" }}>
            Conservazione
          </h6>
          <p style={{ fontSize: "0.7rem" }}>{ricette.conservazione}</p>

          <h6 className="fw-semibold mt-3" style={{ fontSize: "0.8rem" }}>
            Consiglio dello chef
          </h6>
          <p style={{ fontSize: "0.7rem" }}>{ricette.consiglio}</p>
        </Container>
      </Modal.Body>

      <Modal.Footer className="border-0 mt-2"></Modal.Footer>
    </Modal>
  );
};

export default RecipsDescription;
