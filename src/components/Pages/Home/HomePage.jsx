import {Container, Image, Row } from "react-bootstrap";
import avatar from "../../../assets/image/avatar.svg";
import CardProdottiHome from "./CardProdottiHome";
import CardRicette from "./CardRicette";
import bgTop from "../../../assets/image/bg-top.svg";
import bgBottom from "../../../assets/image/bg-bottom.svg"
import elipseLight from "../../../assets/image/elipseLight.svg"
import elipseColor from "../../../assets/image/elipsecolor.svg";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFridgeProducts } from "../../../redux/action/fridgeProductActions";

const HomePage= (props) => {
const dispatch = useDispatch();

useEffect(() => {
  dispatch(getFridgeProducts());
}, [dispatch]);

  return (
    <>
      <Image className="bgTop" src={bgTop}></Image>
      <Image className="elipseLight" src={elipseLight}></Image>
      <Image className="elipseColor" src={elipseColor}></Image>
      <Container fluid>
        <Row className="d-flex justify-content-center">
          <h2 className="text-light text-center" style={{ }}>
            Benvenuto {props.nome}
          </h2>
          <Image className="" style={{ width: "100px" }} src={avatar}></Image>
        </Row>
      </Container>
      <Container fluid>
        <h5 className="mt-5 ms-2 title-color" style={{  fontWeight: "500" }}>
          Questi prodotti stanno per scadere
        </h5>
        <Row className="d-flex flex-nowrap overflow-auto ms-2" style={{}}>
          <CardProdottiHome />
        </Row>
      </Container>
      <h5 className="mt-2 ms-4 title-color" style={{  fontWeight: "500" }}>
        Cosa cuciniamo oggi ?
      </h5>
      <Container fluid className="d-flex justify-content-center gap-3 ">
        <CardRicette />
      </Container>
      <Image className="bgBottom" src={bgBottom}></Image>
    </>
  );
};

export default HomePage;
 