import { Col, Container, Image, Row } from "react-bootstrap";
import ShopEllipse from "../../../assets/image/ellipseShop.svg";
import freezyShop from "../../../assets/image/shop1.svg";
import ShoppingButtonList from "./ShoppingButtonList";
import EllipseShop from "../../../assets/shopImage/EllipseShop.svg";
import EllipseShop1 from "../../../assets/shopImage/EllipseShop1.svg";
import TypeProduct from "../Frigo/TypeProduct";

const ShopPage = () => {
  return (
    <>
      <Image src={ShopEllipse} className="bgTop" alt="ellipse"></Image>
      <Image src={EllipseShop} alt="ellipse" style={{ position: "absolute", top: "250px" }}></Image>
      <Image src={EllipseShop1} alt="ellipse" style={{ position: "absolute", top: "450px", right: "0" }}></Image>

      <Container fluid className="" style={{ position: "relative", bottom: "20px" }}>
        <Row className="d-flex justify-content-center">
          <Col className="align-center text-center">
            <Image src={freezyShop} alt="ellipse" style={{ width: "60px" }}></Image>
            <p className="text-light">Shop</p>
          </Col>
        </Row>
      </Container>
      <Container fluid className="p-0 m-0 ">
        <Row className="d-flex flex-nowrap overflow-auto p-0 m-0">
          <ShoppingButtonList />
        </Row>
      </Container>
      <Container>
        <Row>
          <TypeProduct />
        </Row>
      </Container>
    </>
  );
};

export default ShopPage;
