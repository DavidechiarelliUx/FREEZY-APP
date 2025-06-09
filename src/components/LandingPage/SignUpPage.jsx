import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Spinner, Alert, Image } from "react-bootstrap";
import logo from "../../assets/image/LogoFreezy.svg";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [profileImage, setProfileImage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("profileImage", profileImage);

    fetch("http://localhost:8082/api/auth/register", {
      method: "POST",
      body: formData,
    })
      .then(async (res) => {
        const responseBody = await res.text();
        console.log("Raw response:", responseBody);

        if (!res.ok) {
          throw new Error(responseBody || "Registrazione fallita");
        }
        alert("Registrazione avvenuta con successo!");
        navigate("/");
      })
      .catch((error) => {
        console.error("Errore registrazione:", error);
        console.log("Dati inviati:", { username, email, password, profileImage });
        setError(error.message);
      });
  };
  return (
    <div className="d-flex align-items-center justify-content-center bg-color" style={{ minHeight: "100vh" }}>
      <Container style={{ maxWidth: "400px", padding: "2rem", backgroundColor: "white", borderRadius: "20px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
        <Image src={logo} alt="logo" className="d-block mx-auto mb-3" />
        <h3 className="text-center mb-4 p-sidebar" style={{ fontWeight: "bold", fontSize: "25px" }}>
          Registrati su Freezy
        </h3>

        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="inserisci username" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Inserisci la tua email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Crea una password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </Form.Group>

         <Form.Group className="mb-3">
            <Form.Label>Immagine Profilo</Form.Label>
            <Form.Control type="file" onChange={(e) => setProfileImage(e.target.files[0])} />
        </Form.Group>
          {error && <Alert variant="danger">{error}</Alert>}

          <Button variant="success" type="submit" className="w-100 rounded-pill bg-color" style={{ border: "none" }} disabled={loading}>
            {loading ? <Spinner animation="border" size="sm" /> : "Registrati"}
          </Button>
        </Form>

        <div className="text-center mt-3">
          <span>Hai già un account?</span>{" "}
          <Button variant="link" onClick={() => navigate("/")} style={{ textDecoration: "none", fontWeight: "500" }} className="title-color">
            Torna al Login
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default SignUpPage;
