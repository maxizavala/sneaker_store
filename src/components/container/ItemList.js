import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Item from "./Item";

const ItemList = (props) => {

    let articulos = props.productos
    const categoria = props.categoria

    if (!!categoria) {
        let filtrados = articulos.filter(art => art.categoria === categoria);
        articulos = filtrados
    }
    
    return (
        <Container>
            <Row>
                {(articulos !== null) && 
                articulos.map(art => <Col sm={6} md={4} className="pt-3" key={art.id}> <Item titulo={art.nombre} img={art.img} precio={art.precio} id={art.id}/> </Col>)}
            </Row>
        </Container>
    );
 
}

export default ItemList

