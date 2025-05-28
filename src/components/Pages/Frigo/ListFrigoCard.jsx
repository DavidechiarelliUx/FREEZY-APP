import { Card } from "react-bootstrap";
import listCardNameProductFrigo from "../../Utils/mock/mock";

const ListFrigoCard = ({ onCategoriaClick }) => {
  return (
    <>
      {listCardNameProductFrigo.map((elem) => (
        <Card
          key={`elem-${elem.id}`}
          className="d-flex flex-row mt-5 mx-1"
          style={{ width: "7rem", background: elem.bgColor, height: "40px" }}
          onClick={() => onCategoriaClick(elem.name.toLowerCase())}
        >
          <Card.Img variant="top" src={elem.image} alt={elem.name} style={{ width: "35px" }} className="ps-2" />
          <Card.Body className="">
            <Card.Title style={{ fontWeight: "300", fontSize: "10px", position: "relative", bottom: "4px", right: "5px" }} className="text-light fw-1">
              {elem.name}
            </Card.Title>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default ListFrigoCard;
