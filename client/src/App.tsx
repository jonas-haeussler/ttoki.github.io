import React from "react";
// import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import TabPanel from  "./organization/TabPanel";
import Statistics from "./statistics/Statistics";


const App = () => {

  return (
  <React.StrictMode>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
      <Navbar.Brand href="/"><img
        src="/logo.png"
        width="25"
        height="25"
        padding-right="10"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /> Tischtennis Oberkirchberg </Navbar.Brand>
        <Navbar.Toggle aria-controls="responive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Startseite</Nav.Link>
              <Nav.Link href="/planning">Mannschaftsplanung</Nav.Link>
              <Nav.Link href="/statistics">Statistiken</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Router>
        <Routes>
          <Route path="/" element={<></>}/>
          <Route path="/planning" element={<TabPanel />}/>
          <Route path="/statistics" element={<Statistics/>}/>
        </Routes>
      </Router>
    </React.StrictMode>
  )
};

export default App;