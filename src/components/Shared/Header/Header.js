import React from 'react';
import { Container, Navbar,  Nav} from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch, faUser, faPhone, faCartPlus, faSignInAlt} from "@fortawesome/free-solid-svg-icons";
import './Header.css';


const Header = () => {
    return (
      <div>
        <Navbar bg="light" expand="lg" fixed="top">
            <Container fluid>
              <Navbar.Brand href="/">
                <h2 className='web-name'>MaterialE-com</h2>
              </Navbar.Brand>
                <form className="d-flex search"> 
                  <input type="text" placeholder="Search" name="search" className='search-input'/>
                  <button type="submit" className='search-btn'><FontAwesomeIcon icon={faSearch} /></button>
                </form>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav className="me-auto my-2 my-lg-0 mid-nav" navbarScroll>
                    <Nav.Link as={HashLink} to="/womenServices" className="nav-text">Women</Nav.Link>
                    <Nav.Link as={HashLink} to="/menServices" className="nav-text">Men</Nav.Link>
                    <Nav.Link as={HashLink} to="/babyServices" className="nav-text">Babys</Nav.Link>
                  </Nav>
                    
                  <Nav className='mx-5 text-end'>
                    <Nav.Link as={HashLink} to="/profile" className="mx-lg-3 nav-cart"><FontAwesomeIcon icon={faUser} /></Nav.Link>
                    <Nav.Link as={HashLink} to="/contact" className="nav-cart"><FontAwesomeIcon icon={faPhone} /></Nav.Link>
                    <Nav.Link as={HashLink} to="/addcart" className="nav-cart mx-lg-3"><FontAwesomeIcon icon={faCartPlus} /></Nav.Link>
                    <Nav.Link as={HashLink} to="/login" className="nav-cart"><FontAwesomeIcon icon={faSignInAlt} /></Nav.Link>
                  </Nav>
              </Navbar.Collapse>
            </Container>
        </Navbar>
      </div> 
    );
};

export default Header;