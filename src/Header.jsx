import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import React from "react";

function Header() {
  return (
    <div>
      <Navbar
        class="navbar navbar-dark bg-primary"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand href="/">AWS Amplify - ML</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/TextIdentification">Text Identification</Nav.Link>
            <Nav.Link href="/LabelsIdentification">
              Labels Identification
            </Nav.Link>
            <Nav.Link href="/EntitiesIdentification">
              Celebrity Identification
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              href="https://docs.amplify.aws/lib/predictions/intro/q/platform/js"
              target="_blank"
            >
              Learn More
            </Nav.Link>
            <Nav.Link
              href="https://github.com/sameer-goel/AWS-Amplify-ML-Workshop"
              target="_blank"
            >
              Sameer Goel
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
