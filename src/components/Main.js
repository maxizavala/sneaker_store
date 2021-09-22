import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tarjeta from "./Tarjeta";

const Main = () => {

    return (
        <main>
            <Container>
                <Row>
                    <Col sm={6} md={4} className="pt-3">
                        <Tarjeta/>
                    </Col>
                    <Col sm={6} md={4} className="pt-3">
                        <Tarjeta/>
                    </Col>
                    <Col sm={6} md={4} className="pt-3">
                        <Tarjeta/>
                    </Col>
                </Row>
            </Container>
        </main>
    );
    
}

export default Main

