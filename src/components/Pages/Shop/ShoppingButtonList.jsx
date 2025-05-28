import { Card } from "react-bootstrap";
import listShopping from "../../Utils/mock/listShopping";
const ShoppingButtonList = () => {
  return (
    <>
      {listShopping.map((elem) => (
        <Card key={elem.id} className="d-flex flex-row mx-1 " style={{ width: "13rem", height: "40px" }}>
          <Card.Img variant="top" src={elem.image} alt={elem.name} style={{ width: "35px" }} className="ps-2"></Card.Img>
          <Card.Body className="">
            <Card.Title style={{ fontWeight: "300", fontSize: "13px", position: "relative", bottom: "3px" }} className="text-dark fw-1 text-center">
              {elem.name}
            </Card.Title>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default ShoppingButtonList;
