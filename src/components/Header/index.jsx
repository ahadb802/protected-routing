import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import './index.css'
function Header() {

  let currentUser=JSON.parse(localStorage.getItem("logedUser"));
  if(currentUser===null){
    currentUser=[{role:""}]
  }
  const handlelogout= ()=>{
    localStorage.setItem("loggedin","false");
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <Link className="link-primary-color" to="/">Home</Link>
              {currentUser[0].role==="user" || currentUser[0].role==="" ? <span></span>:<Link className="link-primary-color" to="/Setting">Setting</Link>}
            <Link className="link-primary-color" to="/dashboard">Dashboard</Link>
          </Nav>
        </Navbar.Collapse>
        <Link className="link-primary-color" to="/login">
          <FontAwesomeIcon icon={faUser} />
        </Link>
        <Link  className="link-primary-color"to="/login" onClick={handlelogout}>
          <FontAwesomeIcon icon={faRightFromBracket} />
        </Link>
      </Container>
    </Navbar>
  );
}

export default Header;
