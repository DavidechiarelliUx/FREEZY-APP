import {  Container, Image, Modal } from "react-bootstrap";

const RicepsDescription =({ricette , onClose}) => {

    return (
      <>
        <Modal show={true} onHide={onClose} centered>
          <Modal.Header closeButton className="border-0 p-2"></Modal.Header>

          <Modal.Body>
            {/* Titolo + immagine */}
            <Container fluid className="text-center">
              <h5 className="fw-bold mb-3 title-color" style={{ fontSize: "1rem" }}>
                {ricette.titolo}
              </h5>
              <div
                style={{
                  width: "100%",
                  maxWidth: "250px",
                  height: "150px",
                  margin: "0 auto",
                  overflow: "hidden",
                  borderRadius: "12px",
                  border: "1px solid #ccc",
                }}
              >
                <Image alt={ricette.titolo} src={ricette.immagine} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            </Container>

            {/* Allergeni */}
            <Container fluid className="mt-4">
              <h6 className="fw-semibold mb-2" style={{ fontSize: "0.8rem" }}>
                Allergeni
              </h6>
              {ricette.allergeni.map((element, i) => (
                <div key={i} className="d-flex align-items-center gap-2 mb-1">
                  {element.icona && <img src={element.icona} alt={element.nome} style={{ width: "20px" }} />}
                  <span style={{ fontSize: "0.7rem" }}>{element.nome ?? ricette.allergeni}</span>
                </div>
              ))}
            </Container>

            {/* Info generali */}
            <Container fluid className="mt-3">
              <h6 className="fw-semibold" style={{ fontSize: "0.8rem" }}>
                Informazioni generali
              </h6>
              <p style={{ fontSize: "0.7rem", marginBottom: "0.3rem" }}>
                <strong>Difficoltà:</strong> {ricette.difficolta}
              </p>
              <p style={{ fontSize: "0.7rem", marginBottom: "0.3rem" }}>
                <strong>Tempo di cottura:</strong> {ricette.tempo_cottura}
              </p>
              <p style={{ fontSize: "0.7rem", marginBottom: "0.3rem" }}>
                <strong>Ingredienti:</strong> {ricette.ingrediente_principale}, {ricette.ingredienti_secondari.join(", ")}
              </p>
              <p style={{ fontSize: "0.7rem", marginBottom: "0.3rem" }}>
                <strong>Calorie:</strong> {ricette.calorie} kcal
              </p>
            </Container>

            {/* Preparazione */}
            <Container fluid className="mt-3">
              <h6 className="fw-semibold" style={{ fontSize: "0.8rem" }}>
                Preparazione
              </h6>
              {Object.entries(ricette.Preparazione).map(([passaggio, descrizione], index) => (
                <p key={index} style={{ fontSize: "0.7rem", marginBottom: "0.4rem" }}>
                  <strong>{passaggio.replace("passaggio", "Passaggio ")}:</strong> {descrizione}
                </p>
              ))}
            </Container>

            {/* Conservazione e consiglio */}
            <Container fluid className="mt-3">
              <h6 className="fw-semibold" style={{ fontSize: "0.8rem" }}>
                Conservazione
              </h6>
              <p style={{ fontSize: "0.7rem" }}>{ricette.conservazione}</p>

              <h6 className="fw-semibold mt-3" style={{ fontSize: "0.8rem" }}>
                Consiglio dello chef
              </h6>
              <p style={{ fontSize: "0.7rem" }}>{ricette.consiglio}</p>
            </Container>
          </Modal.Body>

          <Modal.Footer className="border-0 mt-2"></Modal.Footer>
        </Modal>
      </>
    );

}

export default RicepsDescription