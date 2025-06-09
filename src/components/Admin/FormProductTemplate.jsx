import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col, Alert, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateProductTemplate } from "../../redux/action/productTemplateActions";

const FormProductTemplate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
    const { id } = useParams();
    const { template } = useSelector((state) => state.productTemplate);

const prodottoDaModificare = id ? template.find((item) => item.id === Number(id)) : null;
const [name, setName] = useState(prodottoDaModificare?.name || "");
const [tipo, setTipo] = useState(prodottoDaModificare?.tipo || "");
const [conservazione, setConservazione] = useState(prodottoDaModificare?.conservazione || "");
const [unitaDiMisura, setUnitaDiMisura] = useState(prodottoDaModificare?.unitaDiMisura || "");
const [image, setImage] = useState(prodottoDaModificare?.image || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);



  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const newProduct = {
      name,
      tipo,
      conservazione,
      unitaDiMisura,
      image,
    };
    const fetchOperation = id
      ? dispatch(updateProductTemplate(id, newProduct))
      : fetch("http://localhost:8082/api/product-templates", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(newProduct),
        }).then((res) => {
          if (!res.ok) throw new Error("Errore durante la creazione del prodotto");
          return res.json();
        });

    Promise.resolve(fetchOperation)
      .then(() => navigate(-1))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  return (
    
    <Container className="mt-4" style={{ paddingBottom: "100px" }}>
      <h4 className="title-color fw-bold text-center"> {id ? "Modifica Prodotto" : "Crea Nuovo Prodotto"}</h4>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Nome</Form.Label>
              <Form.Control value={name} onChange={(e) => setName(e.target.value)} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Tipo</Form.Label>
              <Form.Select value={tipo} onChange={(e) => setTipo(e.target.value)} required>
                <option value="">Seleziona</option>
                <option value="VERDURA">Verdura</option>
                <option value="FRUTTA">Frutta</option>
                <option value="CARNE">Carne</option>
                <option value="PESCE">Pesce</option>
                <option value="FORMAGGIO">Formaggio</option>
                <option value="SCATOLETTA">Scatoletta</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Unità di Misura</Form.Label>
              <Form.Select value={unitaDiMisura} onChange={(e) => setUnitaDiMisura(e.target.value)} required>
                <option value="">Seleziona</option>
                <option value="GRAMMI">Grammi</option>
                <option value="LITRI">Litri</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Conservazione</Form.Label>
              <Form.Control as="textarea" rows={5} value={conservazione} onChange={(e) => setConservazione(e.target.value)} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>URL Immagine</Form.Label>
              <Form.Control value={image} onChange={(e) => setImage(e.target.value)} required />
            </Form.Group>
          </Col>
        </Row>

        {error && <Alert variant="danger">{error}</Alert>}

        <div className="text-center">
          <Button type="submit" className="rounded-pill bg-color border-0" disabled={loading}>
            {loading ? <Spinner animation="border" size="sm" /> : id ? "Modifica Prodotto" : "Crea Prodotto"}
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default FormProductTemplate;
