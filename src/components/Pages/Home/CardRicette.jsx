import { Card, Container, Col, Button } from "react-bootstrap";

import ricette from "../../Utils/mock/mockRicette"
import prodotti from "../../Utils/mock/mockProdotti";
import { useState } from "react";
import RicepsDescription from "./RicepsDescription";

const CardRicette = () => {
  const prodottiInScadenza = prodotti.filter((p) => p.scadenza <= 2);
  const ricetteFiltrate = ricette.filter((r) => prodottiInScadenza.some((p) => r.ingrediente_principale.toLowerCase() === p.nomeProdotto.toLowerCase()));
  const ricetteDaMostrare = ricetteFiltrate.slice(0, 2);

  const [ricettaSelezionata , setRicettaSelezionata] = useState("");
  const [showModal , setShowModal] = useState(false);
  return (
    <>
      {ricetteDaMostrare.map((elem) => (
        <Card
          key={elem.id}
          className="p-3 text-center"
          style={{
            width: "200px",

            borderRadius: "20px",
            border: "2px solid #63B498",
            backgroundImage: `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url(${elem.immagine})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            overflow: "hidden",
          }}
        >
          <div className="d-flex justify-content-center mb-2">
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid #63B498",
              }}
            >
              <Card.Img variant="top" src={elem.immagine} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>

          <Card.Title style={{ fontSize: "0.85rem", fontWeight: "600" }}>{elem.titolo}</Card.Title>

          <Container className="mt-2 px-0">
            <div className="d-flex justify-content-between px-1" style={{ fontSize: "0.55rem" }}>
              <Col className="p-0 text-start">
                <strong>Ingredienti:</strong>
                {[elem.ingrediente_principale, ...elem.ingredienti_secondari.slice(0, 2)].map((ingr, index) => (
                  <div key={index}>{ingr}</div>
                ))}
              </Col>
              <Col className="p-0 text-end">
                <div>
                  <strong>Tempo:</strong>
                  <div>{elem.tempo_cottura}</div>
                </div>
                <div className="mt-1">
                  <strong>Esecuzione:</strong>
                  <div style={{ textTransform: "capitalize" }}>{elem.difficolta}</div>
                </div>
              </Col>
            </div>
          </Container>

          <Button
            className="border-0 mt-3 rounded-pill"
            style={{
              fontSize: "0.6rem",
              background: "linear-gradient(to right, #7C67BB, #00BFA6)",
              color: "white",
              fontWeight: "500",
            }}
            onClick={() => {
              setRicettaSelezionata(elem);
              setShowModal(true);
            }}
          >
            Incominciamo
          </Button>
        </Card>
      ))}
      {showModal && <RicepsDescription ricette={ricettaSelezionata} onClose={() => setShowModal(false)} />}
    </>
  );
};

export default CardRicette;
