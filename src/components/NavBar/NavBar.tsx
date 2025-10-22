import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import { Link } from "react-router-dom";
import LoginLogoutButtons from "./LoginLogoutButtons";
import { useAuth0 } from "@auth0/auth0-react";

// Login / Logout will be managed by Auth0 context

function AppNavbar() {
    const { isAuthenticated } = useAuth0();
    const [navExpanded, setNavExpanded] = useState(false);
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top" expanded={navExpanded} onToggle={() => setNavExpanded(!navExpanded)}>
            <Container>
                <Navbar.Brand href="#home">Task Management App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/" onClick={() => setNavExpanded(false)}>
                            Home
                        </Nav.Link>
                        {isAuthenticated && (
                            <>
                                <Nav.Link as={Link} to="/dashboard" onClick={() => setNavExpanded(false)}>
                                    Dashboard
                                </Nav.Link>
                                <Nav.Link as={Link} to="/tasks" onClick={() => setNavExpanded(false)}>
                                    Tasks
                                </Nav.Link>
                            </>
                        )}
                        <LoginLogoutButtons />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppNavbar;
