import { Col, Container, Image, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { fetchRecipe } from "../../../redux/action/recipeAction";
import { useDispatch, useSelector } from "react-redux";
import egg from "../../../assets/allergeni/egg.svg";
import fish from "../../../assets/allergeni/fish.svg";
import gluten from "../../../assets/allergeni/gluten.svg";
import milk from "../../../assets/allergeni/Milk.svg";
import peanut from "../../../assets/allergeni/peanut.svg";
import shrimp from "../../../assets/allergeni/Shrimp.svg";
import elipseGame from "../../../assets/gameImage/elipseGame.svg";
import RecipeModal from "./RecipeDes";

const RecipePage = () => {
  const recipe = useSelector((state) => state.recipes.recipes);
  const dispatch = useDispatch();
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    dispatch(fetchRecipe());
  }, [dispatch]);

  const allergenIcons = {
    "egg.svg": egg,
    "fish.svg": fish,
    "gluten.svg": gluten,
    "Milk.svg": milk,
    "peanut.svg": peanut,
    "Shrimp.svg": shrimp,
  };

  return (
    <>
      <Image src={elipseGame} alt="elipseGame" className="bgTop" />
      <Container fluid>
        <Row className="d-flex justify-content-center">
          <h5 className="text-light text-center">Le nostre ricette</h5>
          <Image
            style={{ width: "100px", borderRadius: "100%", height: "100px" }}
            src="https://www.negroni.com/sites/default/files/ricette_in_5_minuti.jpg"
            className="border p-0 shadow-lg"
            alt="img ricette"
          />
        </Row>
      </Container>

      <Container fluid style={{ paddingBottom: "100px" }}>
        <Row className="justify-content-center mt-4">
          {recipe.map((elem) => (
            <Col xs={12} md={10} lg={8} key={elem.id} className="mb-4">
              <div className="d-flex bg-light rounded-4 shadow p-3 align-items-center" onClick={() => setSelectedRecipe(elem)} style={{ cursor: "pointer" }}>
                <Image
                  src={elem.immagine}
                  alt={elem.titolo}
                  style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "12px" }}
                  className="me-3"
                />
                <div className="flex-grow-1 d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="mb-1 title-recipe">
                      <strong>{elem.titolo}</strong>
                    </h5>
                    <p className="mb-1 title-recipe">
                      <strong>Difficoltà:</strong> {elem.difficolta}
                    </p>
                    <p className="mb-1 title-recipe">
                      <strong>Tempo di cottura:</strong> {elem.tempoCottura} minuti
                    </p>
                  </div>
                  <div className="d-flex justify-content-end">
                    {elem.allergeni.map((allergene, index) => (
                      <Image
                        key={index}
                        src={allergenIcons[allergene.icona]}
                        alt={allergene.name}
                        style={{ width: "25px", height: "25px", marginLeft: "6px" }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      {selectedRecipe && <RecipeModal recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />}
    </>
  );
};

export default RecipePage;
