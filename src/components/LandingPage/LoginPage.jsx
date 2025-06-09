import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Spinner, Alert, Image } from "react-bootstrap";
import logo from "../../assets/image/LogoFreezy.svg";

const LoginPage = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");

  console.log("Render di LoginPage");

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Sto partendo col login");
    setLoading(true);
    setError(null);

   fetch("http://localhost:8082/api/auth/login", {
     method: "POST",
     headers: { "Content-type": "application/json" },
     body: JSON.stringify({ username, password }),
   })
     .then((res) => {
       console.log("Stato della response:", res.status);
       if (res.ok) {
         return res.json();
       } else {
         throw new Error("Credenziali non valide");
       }
     })
     .then((data) => {
       localStorage.setItem("token", data.token);
       localStorage.setItem("ruolo", data.roles[0] === "ROLE_ADMIN" ? "ADMIN" : "USER");
       console.log("Dati login:", data);

       const isAdmin = data.roles.includes("ROLE_ADMIN");
       if (isAdmin) {
         navigate("/adminPage");
       } else {
         navigate("/homePage");
       }
     })
     .catch((error) => {
       setError(error.message);
     })
     .finally(() => {
       setLoading(false);
     });
}

  return (
    <div className="d-flex align-items-center justify-content-center bg-color p-3" style={{ minHeight: "100vh" }}>
      <Container style={{ maxWidth: "400px", padding: "2rem", backgroundColor: "white", borderRadius: "20px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
        <Image src={logo} alt="logo" className="d-block mx-auto mb-3"></Image>
        <h3 className="text-center mb-4 p-sidebar " style={{ fontWeight: "bold", fontSize: "25px" }}>
          Accedi a Freezy
        </h3>

        <Form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Invio form partito");
            handleLogin(e);
          }}
        >
          <Form.Group controlId="formUser" className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Inserisci Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Inserisci password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </Form.Group>

          {error && <Alert variant="danger">{error}</Alert>}

          <Button variant="success" type="submit" className="w-100 rounded-pill bg-color" style={{ border: "none" }} disabled={loading}>
            {loading ? <Spinner animation="border" size="sm" /> : "Accedi"}
          </Button>
        </Form>

        <div className="text-center mt-3">
          <span>Non sei registrato?</span>{" "}
          <Button variant="link" onClick={() => navigate("/signup")} style={{ textDecoration: "none", fontWeight: "500" }} className="title-color">
            Vai alla registrazione
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
