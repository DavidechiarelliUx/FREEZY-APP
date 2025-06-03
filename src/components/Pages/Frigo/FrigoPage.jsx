import { Button, Col, Container, Image, Row } from "react-bootstrap";
import frigoImage from "../../../assets/image/frigoImage.svg";
import addIcon from "../../../assets/image/addIcon.svg";
import ListFrigoCard from "./ListFrigoCard";
import CardFrigo from "./CardFrigo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const FrigoPage = () => {
  const [categoria, setCategoria] = useState("verdura");

  const navigate = useNavigate()

  return (
    <>
      <Image src={frigoImage} alt="image frigo" className="bgTop"></Image>
      <Container fluid>
        <Row className="d-flex justify-content-between">
          <Col xs={1}>
            <Button className="rounded-5 bg-transparent border-0 position-relative" style={{ bottom: "10px" }} onClick={()=> {
              navigate("/productTemplate")
            }}>
              <p className="mb-1" style={{ fontSize: "6px" }}>
                Add your product
              </p>
              <Image src={addIcon}></Image>
            </Button>
          </Col>
          <Col xs={8}>
            <h5 className="text-center text-light" style={{ }}>
              Questi sono i prodotti nel tuo frigo !
            </h5>
          </Col>
          <Col xs={1}></Col>
              </Row>
      </Container>
      <Container fluid>
        <Row className="d-flex flex-nowrap overflow-auto ">
          <ListFrigoCard onCategoriaClick={setCategoria} />
        </Row>
      </Container>
      <Container fluid className="mt-3 pb-5 mb-5">
        <Row className="d-flex justify-content-center">
          <CardFrigo categoriaSelezionata={categoria} />
        </Row>
      </Container>
    </>
  );
};

export default FrigoPage;
