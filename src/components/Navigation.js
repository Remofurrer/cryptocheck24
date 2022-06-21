import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link} from 'react-router-dom'

function Navigation() {
    return (
    <Navbar collapseOnSelect expand="lg" className="navbar">
        <Container>
        <Link to="/"  className="navbar__logo"><Navbar.Brand className="navbar__logo">CryptoCheck24</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="navlink" href="/">Home</Nav.Link>
            <Nav.Link className="navlink"  href="explore">Unternehmen finden</Nav.Link>
            <Nav.Link className="navlink"  href="https://www.yuh.com/de" target="blank">Krypto kaufen</Nav.Link>
            <Nav.Link className="navlink"  href="https://www.bitcoinsuisse.com/de/bitcoin-suisse-pay" target="blank">Krypto akzeptieren</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default Navigation
