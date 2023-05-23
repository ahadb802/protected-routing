import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import './index.css'
function Header() {

  let currentUser=JSON.parse(sessionStorage.getItem("User"));
 if(currentUser===null){
  currentUser={role:" "}
 }
  const loggedin=JSON.parse(sessionStorage.getItem("login"));
  const handlelogout= ()=>{
    sessionStorage.clear("login");
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <Link className="link-primary-color" to="/">Home</Link>
              {currentUser.role==="admin" ? <Link className="link-primary-color" to="/Setting">Setting</Link>: <span></span>}
              {loggedin? <Link className="link-primary-color" to="/dashboard">Dashboard</Link>:<span></span>}
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
