import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Container, Row, Col, Card, Image, Spinner, Alert } from "react-bootstrap";
import arrowBack from "../../assets/listIcon/arrowBack.svg";
import { fetchRecipe, deleteRecipe } from "../../redux/action/recipeAction";


const RecipeManager = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { template: productTemplates } = useSelector((state) => state.productTemplate);
  const { recipes: recipes, loading, error } = useSelector((state) => state.recipes);


  useEffect(() => {
    dispatch(fetchRecipe());
  }, [dispatch]);

  return (
    <Container className="mt-4">
      <Row className="d-flex justify-content-center align-items-center mb-3">
        <Col xs={1}>
          <Image src={arrowBack} alt="Back" style={{ width: "35px", height: "35px", cursor: "pointer" }} onClick={() => navigate(-1)} />
        </Col>
        <Col className="title-color fw-bold text-center">
          <h4>Gestione Ricette</h4>
        </Col>
      </Row>
      <Container fluid>
        <Row className="d-flex justify-content-center align-items-center mb-5">
          <Button className="rounded-pill bg-color border-0" style={{ width: "50%" }} onClick={() => navigate("/form-recipe")}>
            Aggiungi Ricetta
          </Button>
        </Row>
      </Container>

      {loading && <Spinner animation="border" />}
      {error && <Alert variant="danger">{error}</Alert>}

      <Row>
        {recipes?.filter(Boolean).map((prod) => (
          <Col key={prod.id} xs={12} md={6} className="mb-4">
            <Card className="shadow rounded-4 border-0 h-100">
              <Card.Body className="text-center">
                <Image
                  src={prod.immagine}
                  roundedCircle
                  style={{ width: "100px", height: "100px", objectFit: "cover", border: "1px solid black" }}
                  className="mb-3"
                />
                <Row>
                  <Card.Title className="title-color fw-bold">{prod.titolo}</Card.Title>
                </Row>
                <Card.Text className="mb-2">
                  <strong>Ingrediente : </strong> <br />{" "}
                  {productTemplates.find((p) => p.id === Number(prod.ingredientePrincipale))?.name || prod.ingredientePrincipale}
                  <br />
                  <strong>Descrizione</strong>
                  <br /> {prod.descrizione}
                  <br />
                </Card.Text>
                <div className="d-flex justify-content-center gap-2 mt-3">
                  <Button variant="outline-primary" onClick={() => navigate(`/form-recipe/${prod.id}`)}>
                    Modifica
                  </Button>
                  <Button variant="outline-danger" onClick={() => dispatch(deleteRecipe(prod.id))}>
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

export default RecipeManager;
