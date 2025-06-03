import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipe } from "../../../redux/action/recipeAction";
import { Card, Image, Container } from "react-bootstrap";
import RecipsDescription from "./RecipsDescription";

const CardRicette = () => {
  const dispatch = useDispatch();

  const ricette = useSelector((state) => state.recipes.recipes) || [];
  const fridgeProducts = useSelector((state) => state.fridgeProduct.fridgeProducts) || [];

  const [ricettaSelezionata, setRicettaSelezionata] = useState(null);


  useEffect(() => {
    dispatch(fetchRecipe());
  }, [dispatch]);

  const prodottiInScadenza = fridgeProducts
    .map((prod) => ({
      ...prod,
      scadenza: Math.max(0, Math.floor((new Date(prod.dataScadenza) - new Date()) / (1000 * 60 * 60 * 24))),
    }))
    .filter((prod) => prod.scadenza <= 10);

  const ricetteFiltrate = ricette.filter((ricetta) =>
    prodottiInScadenza.some((prodotto) => ricetta.ingredientePrincipale?.toLowerCase().trim() === prodotto.nomeProdotto?.toLowerCase().trim())
  );

  return (
    <Container className="mt-1">
      <div className="scroll-container">
        {ricetteFiltrate.map((ricetta) => (
          <Card
            key={ricetta.id}
            className="text-center mx-2"
            style={{
              width: "180px",
              minWidth: "180px",
              borderRadius: "20px",
              border: "2px solid #63B498",
              backgroundImage: `linear-gradient(rgba(255,255,255,0.75), rgba(255,255,255,0.75)), url(${ricetta.immagine})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
          >
            <Card.Body>
              <Card.Title style={{ fontSize: "1rem", fontWeight: "600" }}>{ricetta.titolo}</Card.Title>
              <Image src={ricetta.immagine} alt={ricetta.titolo} style={{ width: "150px" }} className="rounded-3" />
              <button
                className="btn btn-sm mt-3 rounded-pill"
                style={{ background: "#63B498", color: "white", fontWeight: "500", fontSize: "0.75rem" }}
                onClick={() => setRicettaSelezionata(ricetta)}
              >
                Incominciamo
              </button>
            </Card.Body>
          </Card>
        ))}
      </div>
      {ricettaSelezionata && <RecipsDescription ricette={ricettaSelezionata} onClose={() => setRicettaSelezionata(null)} />}
    </Container>
  );
};

export default CardRicette;
