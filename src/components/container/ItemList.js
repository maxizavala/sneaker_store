import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Item from "./Item";

const ItemList = (props) => {

    const articulos = ["zapatilla1", "zapatilla2", "zapatilla3"]

    return (
            <Container>

                <Row>
                    {articulos.map(u => <Col sm={6} md={4} className="pt-3"> <Item titulo={u}/> </Col>)}
                </Row>

            </Container>
    );
    
}

export default ItemList

