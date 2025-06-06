import { Container, Image, Row } from "react-bootstrap";
import avatar from "../../../assets/image/avatar.svg";
import CardProdottiHome from "./CardProdottiHome";
import CardRicette from "./CardRicette";
import bgTop from "../../../assets/image/bg-top.svg";
import bgBottom from "../../../assets/image/bg-bottom.svg";
import elipseLight from "../../../assets/image/elipseLight.svg";
import elipseColor from "../../../assets/image/elipsecolor.svg";
import { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { getFridgeProducts } from "../../../redux/action/fridgeProductActions";

const HomePage = () => {
  const dispatch = useDispatch();

  
  const [utente, setUtente] = useState(null);

useEffect(() => {
  const token = localStorage.getItem("token");
  if (!token) return;

  fetch("http://localhost:8082/api/auth/current-user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error("Errore nel recupero dell'utente");
      return res.json();
    })
    .then((data) => {
      setUtente(data);
    })
    .catch((err) => console.error("Errore:", err));
}, []);

useEffect(() => {
  if (utente) {
    dispatch(getFridgeProducts());
  }
}, [utente]);
  return (
    <>
      <Image className="bgTop" src={bgTop} />
      <Image className="elipseLight" src={elipseLight} />
      <Image className="elipseColor" src={elipseColor} />

      <Container fluid>
        <Row className="d-flex justify-content-center">
          <h2 className="text-light text-center">Benvenuto {utente?.username}</h2>
          <Image style={{ width: "100px" }} src={avatar} />
        </Row>
      </Container>

      <Container fluid>
        <h5 className="mt-5 ms-2 title-color" style={{ fontWeight: "500" }}>
          Questi prodotti stanno per scadere
        </h5>
        <Row className="d-flex flex-nowrap overflow-auto ms-2">
          <CardProdottiHome />
        </Row>
      </Container>

      <h5 className="mt-2 ms-4 title-color" style={{ fontWeight: "500" }}>
        Cosa cuciniamo oggi?
      </h5>
      <Container fluid className="d-flex justify-content-center gap-3">
        <CardRicette />
      </Container>

      <Image className="bgBottom" src={bgBottom} />
    </>
  );
};

export default HomePage;
