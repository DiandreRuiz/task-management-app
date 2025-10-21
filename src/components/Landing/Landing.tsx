import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginLogoutButtons from "../NavBar/LoginLogoutButtons";

// Login / Logout will be managed by Auth0 context

const Landing: React.FC = () => {
    return (
        <Container className="mt-5">
            <Row>
                <Col className="text-center">
                    <h1>Welcome to the Task Management App</h1>
                </Col>
            </Row>
            <Row>
                <Col className="text-center d-flex justify-content-center gap-2">
                    <LoginLogoutButtons isLoggedIn={true} />
                </Col>
            </Row>
        </Container>
    );
};

export default Landing;
