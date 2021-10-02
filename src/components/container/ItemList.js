import React, {useState,useEffect} from 'react';
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Item from "./Item";

const articulos = ["zapatilla1", "zapatilla2", "zapatilla3"]

function crearPromesa() {
    return new Promise((resolve, reject) => {  
        setTimeout(
            function(){                          
                resolve(articulos);  
        }, 2000);      
    });     
}


const ItemList = (props) => {
    const [articulos, setArticulos] = React.useState(null);
    const [estado, setEstado] = useState('Loading...');

    useEffect(() => {        
        let requestArticulos = crearPromesa();

        requestArticulos
        .then( function(items_promise){
            setArticulos(items_promise);     
            setEstado('Listo!');           
        })      
    }, []);

    return (
        <Container>
            <Row>
                {(articulos !== null) && 
                articulos.map(prod => <Col sm={6} md={4} className="pt-3"> <Item titulo={prod}/> </Col>)}
            </Row>
        </Container>
    );
 
}

export default ItemList

