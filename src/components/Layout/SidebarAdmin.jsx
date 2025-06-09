import { Nav, Image } from "react-bootstrap";
import { Link, useLocation } from "react-router";
import home from "../../assets/image/home.svg";
import freezer from "../../assets/image/freezer.svg";
import shop from "../../assets/image/shop.svg";
import recipe from "../../assets/listIcon/recipe.svg";
import admin from "../../assets/listIcon/admin.svg";

const SidebarAdmin = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => currentPath === path;

  return (
    <>
      <Nav
        fill
        className="position-fixed bottom-0 d-lg-none bg-transparent mb-2 "
        style={{
          left: "5px",
          right: "5px",
          background: "linear-gradient(white, white) padding-box, linear-gradient(90deg, rgba(124, 103, 187, 1) 50%, rgba(99, 180, 152, 1) 100%) border-box",
          borderRadius: "16px",
          border: "2px solid transparent",
          boxSizing: "border-box",
          zIndex: "1",
        }}
      >
        <Nav.Item>
          <Nav.Link className={`nav-icon--lower ${isActive("/homepage") ? "active-link" : ""}`} as={Link} to="/homepage">
            <Image src={home} alt="Logo home"></Image>
            <p className="p-sidebar">Home</p>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className={`nav-icon--lower ${isActive("/frigoPage") ? "active-link" : ""}`} as={Link} to="/frigoPage">
            <Image src={freezer} alt="logo frigo"></Image>
            <p className="p-sidebar">Frigo</p>
          </Nav.Link>
        </Nav.Item>
        <Nav.Link className={`nav-icon--lower ${isActive("/recipePage") ? "active-link" : ""}`} as={Link} to="/recipePage">
          <Image src={recipe} alt="logo game"></Image>
          <p className="p-sidebar">Ricette</p>
        </Nav.Link>
        <Nav.Item>
          <Nav.Link className={`nav-icon--lower ${isActive("/shopPage") ? "active-link" : ""}`} as={Link} to="/shopPage">
            <Image src={shop} alt="logo shop"></Image>
            <p className="p-sidebar">Shop</p>
          </Nav.Link>
        </Nav.Item>
          <Nav.Item>
            <Nav.Link className={`nav-icon--lower ${isActive("/adminPage") ? "active-link" : ""}`} as={Link} to="/adminPage">
              <Image src={admin} alt="logo admin"></Image>
              <p className="p-sidebar">Admin</p>
            </Nav.Link>
          </Nav.Item>
      </Nav>
    </>
  );
};

export default SidebarAdmin;
