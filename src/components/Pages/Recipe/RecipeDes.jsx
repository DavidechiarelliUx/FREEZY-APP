import { Modal, Container, Image } from "react-bootstrap";
import egg from "../../../assets/allergeni/egg.svg";
import fish from "../../../assets/allergeni/fish.svg";
import gluten from "../../../assets/allergeni/gluten.svg";
import milk from "../../../assets/allergeni/Milk.svg";
import peanut from "../../../assets/allergeni/peanut.svg";
import shrimp from "../../../assets/allergeni/Shrimp.svg";


const RecipeDes = ({ recipe, onClose }) => {
  const allergenIcons = {
    "egg.svg": egg,
    "fish.svg": fish,
    "gluten.svg": gluten,
    "Milk.svg": milk,
    "peanut.svg": peanut,
    "Shrimp.svg": shrimp,
  };
  return (
    <Modal show={true} onHide={onClose} centered>
      <Modal.Header closeButton />
      <Modal.Body>
        <Container className="text-center">
          <h5 className="fw-bold mb-3">{recipe.titolo}</h5>
          <Image
            src={recipe.immagine}
            alt={recipe.titolo}
            style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "10px" }}
            className="mb-3"
          />
          <p>{recipe.descrizione}</p>
        </Container>

        <Container>
          <h6 className="mt-3">Ingredienti</h6>
          <ul style={{ fontSize: "0.8rem" }}>
            <li>
              <strong>{recipe.ingredientePrincipale}</strong>
            </li>
            {recipe.ingredienti.map((ingrediente, index) => (
              <li key={index}>{ingrediente}</li>
            ))}
          </ul>
          <p>
            <strong>Difficoltà:</strong> {recipe.difficolta}
          </p>
          <p>
            <strong>Tempo di cottura:</strong> {recipe.tempoCottura} minuti
          </p>
          <p>
            <strong>Calorie:</strong> {recipe.calorie} K
          </p>
          <p>
            <strong>Conservazione:</strong> {recipe.conservazione}
          </p>
          <p>
            <strong>Consiglio:</strong> {recipe.consiglio}
          </p>

          <h6 className="mt-3">Allergeni</h6>
          <div className="d-flex flex-wrap gap-2">
            {recipe.allergeni.map((allergene, index) => (
              <Image key={index} src={allergenIcons[allergene.icona]} alt={allergene.name} style={{ width: "25px", height: "25px", marginLeft: "6px" }} />
            ))}
          </div>

          <h6 className="mt-3">Preparazione</h6>
          <ul>
            {recipe.preparazione.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default RecipeDes;
