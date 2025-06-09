import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Button, Container, Row, Col, Alert, Spinner, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductTemplate } from "../../redux/action/productTemplateActions";

const FormRecipe = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { recipes } = useSelector((state) => state.recipes);
    const [showModal, setShowModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [showAllergenModal, setShowAllergenModal] = useState(false);
    const [allergenSearch, setAllergenSearch] = useState("");
    
   const ALLERGENI = [
     { id: 1, name: "Glutine" },
     { id: 2, name: "Latte" },
     { id: 3, name: "Uovo" },
     { id: 4, name: "Noccioline" },
     { id: 5, name: "Pesce" },
     { id: 6, name: "Crostacei" },
   ];
  const ricettaDaModificare = recipes.find((item) => item.id === Number(id));
  const { template: productTemplates } = useSelector((state) => state.productTemplate);
  useEffect(() => {
    dispatch(fetchProductTemplate());
  }, [dispatch]);

  const [titolo, setTitolo] = useState(ricettaDaModificare?.titolo || "");
  const [ingredientePrincipale, setIngredientePrincipale] = useState(
    typeof ricettaDaModificare?.ingredientePrincipale === "number"
      ? ricettaDaModificare.ingredientePrincipale
      : productTemplates.find((p) => p.name === ricettaDaModificare?.ingredientePrincipale)?.id || ""
  );
  const [descrizione, setDescrizione] = useState(ricettaDaModificare?.descrizione || "");
  const [difficolta, setDifficolta] = useState(ricettaDaModificare?.difficolta || "");
  const [tempoCottura, setTempoCottura] = useState(ricettaDaModificare?.tempoCottura || "");
  const [calorie, setCalorie] = useState(ricettaDaModificare?.calorie || "");
  const [conservazione, setConservazione] = useState(ricettaDaModificare?.conservazione || "");
  const [consiglio, setConsiglio] = useState(ricettaDaModificare?.consiglio || "");
  const [immagine, setImmagine] = useState(ricettaDaModificare?.immagine || "");
  const [ingredienti, setIngredienti] = useState(ricettaDaModificare?.ingredienti || []);
  const [preparazione, setPreparazione] = useState(ricettaDaModificare?.preparazione || []);
  const [allergeni, setAllergeni] = useState(ricettaDaModificare?.allergeni || []);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const newRecipe = {
      id: id ? Number(id) : undefined,
      titolo,
      ingredientePrincipale: productTemplates.find((p) => p.id === Number(ingredientePrincipale))?.name || "",
      descrizione,
      difficolta,
      tempoCottura: Number(tempoCottura),
      calorie: Number(calorie),
      conservazione,
      consiglio,
      immagine,
      ingredienti,
      preparazione,
      allergeni: allergeni.map((el) => Number(el)).filter((id) => !isNaN(id)),
    };
    const method = id ? "PUT" : "POST";
    const url = id ? `http://localhost:8082/api/recipes/${id}` : "http://localhost:8082/api/recipes";
    console.log("Payload inviato:", newRecipe);
    fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(newRecipe),
    })
      .then((res) => {
        if (!res.ok) {
          return res.text().then((text) => {
            throw new Error(text || "Errore durante la creazione della ricetta");
          });
        }
        return res.json();
      })
      .then(() => navigate(-1))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  return (
    <Container className="mt-4" style={{ paddingBottom: "100px" }}>
      <h4 className="title-color fw-bold text-center">{id ? "Modifica Ricetta" : "Crea Nuova Ricetta"}</h4>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Titolo</Form.Label>
              <Form.Control value={titolo} onChange={(e) => setTitolo(e.target.value)} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Ingrediente Principale</Form.Label>
              <Form.Control
                type="text"
                value={productTemplates.find((p) => p.id === Number(ingredientePrincipale))?.name || ""}
                placeholder="Seleziona un ingrediente"
                onClick={() => setShowModal(true)}
                readOnly
                style={{ cursor: "pointer", backgroundColor: "#f8f9fa" }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descrizione</Form.Label>
              <Form.Control value={descrizione} onChange={(e) => setDescrizione(e.target.value)} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Difficoltà</Form.Label>
              <Form.Control value={difficolta} onChange={(e) => setDifficolta(e.target.value)} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Tempo di Cottura</Form.Label>
              <Form.Control type="number" value={tempoCottura} onChange={(e) => setTempoCottura(e.target.value)} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Calorie</Form.Label>
              <Form.Control type="number" value={calorie} onChange={(e) => setCalorie(e.target.value)} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Conservazione</Form.Label>
              <Form.Control value={conservazione} onChange={(e) => setConservazione(e.target.value)} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Consiglio</Form.Label>
              <Form.Control value={consiglio} onChange={(e) => setConsiglio(e.target.value)} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>URL Immagine</Form.Label>
              <Form.Control value={immagine} onChange={(e) => setImmagine(e.target.value)} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Ingredienti</Form.Label>
              <Form.Control
                value={ingredienti.join(", ")}
                onChange={(e) => setIngredienti(e.target.value.split(",").map((el) => el.trim()))}
                placeholder="Es: pasta, olio, sale"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Preparazione</Form.Label>
              {preparazione.map((step, index) => (
                <div key={index} className="d-flex mb-2">
                  <Form.Control
                    value={step}
                    onChange={(e) => {
                      const newSteps = [...preparazione];
                      newSteps[index] = e.target.value;
                      setPreparazione(newSteps);
                    }}
                    placeholder={`Step ${index + 1}`}
                  />
                  <Button
                    variant="danger"
                    size="sm"
                    className="ms-2"
                    onClick={() => {
                      const newSteps = preparazione.filter((_, i) => i !== index);
                      setPreparazione(newSteps);
                    }}
                  >
                    &times;
                  </Button>
                </div>
              ))}
              <Button variant="secondary" size="sm" onClick={() => setPreparazione([...preparazione, ""])}>
                + Aggiungi Step
              </Button>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Allergeni</Form.Label>
              <Form.Control
                type="text"
                value={ALLERGENI.filter((a) => allergeni.includes(a.id))
                  .map((a) => a.name)
                  .join(", ")}
                onClick={() => setShowAllergenModal(true)}
                readOnly
                placeholder="Seleziona allergeni"
                style={{ cursor: "pointer", backgroundColor: "#f8f9fa" }}
              />
            </Form.Group>
          </Col>
        </Row>

        {error && <Alert variant="danger">{error}</Alert>}

        <div className="text-center">
          <Button type="submit" className="rounded-pill bg-color border-0" disabled={loading}>
            {loading ? <Spinner animation="border" size="sm" /> : id ? "Modifica Ricetta" : "Crea Ricetta"}
          </Button>
        </div>
      </Form>
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Seleziona Ingrediente Principale</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control type="text" placeholder="Cerca..." className="mb-3" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <div style={{ maxHeight: "300px", overflowY: "auto" }}>
            {productTemplates
              .filter((prod) => prod.name.toLowerCase().includes(searchTerm.toLowerCase()))
              .map((prod) => (
                <div
                  key={prod.id}
                  onClick={() => {
                    setIngredientePrincipale(prod.id);
                    setShowModal(false);
                  }}
                  style={{
                    padding: "10px",
                    borderBottom: "1px solid #eee",
                    cursor: "pointer",
                  }}
                >
                  {prod.name}
                </div>
              ))}
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={showAllergenModal} onHide={() => setShowAllergenModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Seleziona Allergeni</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control type="text" placeholder="Cerca..." className="mb-3" value={allergenSearch} onChange={(e) => setAllergenSearch(e.target.value)} />
          <div style={{ maxHeight: "300px", overflowY: "auto" }}>
            {ALLERGENI.filter((a) => a.name.toLowerCase().includes(allergenSearch.toLowerCase())).map((allergene) => {
              const selected = allergeni.includes(allergene.id);
              return (
                <div
                  key={allergene.id}
                  onClick={() => {
                    setAllergeni((prev) => (selected ? prev.filter((id) => id !== allergene.id) : [...prev, allergene.id]));
                  }}
                  style={{
                    padding: "10px",
                    borderBottom: "1px solid #eee",
                    cursor: "pointer",
                    backgroundColor: selected ? "#d4edda" : "transparent",
                  }}
                >
                  {allergene.name} {selected && "✓"}
                </div>
              );
            })}
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default FormRecipe;
