import { Card, Col } from "react-bootstrap";
import typeProduct from "../../Utils/mock/typeProduct";
const TypeProduct = () => {
  return (
    <>
      {typeProduct.map((elem) => (
        <Col key={`elem-${elem.id}`} className="m-3">
          <Card className="d-flex flex-row mx-1 " style={{ height: "40px" }}>
            <Card.Img variant="top" src={elem.image} alt={elem.name} style={{ width: "35px" }} className="ps-2"></Card.Img>
            <Card.Body className="">
              <Card.Title style={{ fontWeight: "300", fontSize: "13px", position: "relative", bottom: "3px" }} className="text-dark fw-1 text-center">
                {elem.name}
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default TypeProduct;
