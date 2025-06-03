import { Card } from "react-bootstrap";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useSelector } from "react-redux";

const CardProdottiHome = () => {
  const fridgeProducts = useSelector((state) => state.fridgeProduct.fridgeProducts) || [];

  const prodottiInScadenza = [...fridgeProducts]
    .map((elem) => ({
      ...elem,
      scadenza: Math.max(0, Math.floor((new Date(elem.dataScadenza) - new Date()) / (1000 * 60 * 60 * 24))),
    }))
    .sort((a, b) => a.scadenza - b.scadenza)
    .slice(0, 10);


  const getColore = (giorni) => {
    if (giorni <= 0) return "black";
    if (giorni <= 2) return "red";
    if (giorni <= 5) return "orange";
    return "green";
  };

  return (
    <>
      {prodottiInScadenza.map((elem) => {
        const percentuale = Math.min((elem.scadenza / 10) * 100, 100);

        return (
          <Card
            key={elem.id}
            className="d-flex flex-row mt-2 mx-2 justify-content-center align-items-center p-0"
            style={{ width: "10.5rem", height: "50px", borderColor: getColore(elem.scadenza) }}
          >
            <Card.Img
              variant="top"
              src={elem.immagine}
              alt={elem.nomeProdotto}
              style={{ width: "30px", height: "30px" }}
              className="mx-1"
            />
            <Card.Body className="m-0 p-0">
              <Card.Title className="mt-1 mx-0" style={{ fontWeight: "500", fontSize: "12px", position: "relative", top: "3px" }}>
                {elem.nomeProdotto}
              </Card.Title>
            </Card.Body>
            <div style={{ width: 35, height: 35, marginRight: "5px" }}>
              <CircularProgressbar
                value={percentuale}
                text={`${elem.scadenza}d`}
                styles={buildStyles({
                  pathColor: getColore(elem.scadenza),
                  textColor: getColore(elem.scadenza),
                  trailColor: "#eee",
                  textSize: "28px",
                })}
              />
            </div>
          </Card>
        );
      })}
    </>
  );
};

export default CardProdottiHome;
