import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const HomePage: React.FC = () => {


    return (
        <Container>
            <Row className="justify-content-center mt-5">
                <Col xs={12} md={6} className="w-auto">
                    <h1>Hello World</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage