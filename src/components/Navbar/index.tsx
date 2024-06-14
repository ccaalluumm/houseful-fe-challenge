import { Container, Navbar } from "react-bootstrap";

export const Nav = () => {
  return (
    <Navbar style={{ marginBottom: "2rem", backgroundColor: "#DBFF3B" }} data-testid="nav">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/public/assets/images/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            data-testid="brand-image"
          />{" "}
          React Houseful Frontend Challenge
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
