import React, {useState,useEffect} from 'react';
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Item from "./Item";

const articulos = [
    {id:1, nombre: "Nike M2K Tekno", img: "https://www.moovbydexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dweb3a9dc7/products/NI_AO3108-401/NI_AO3108-401-1.JPG?sw=400&sh=400", precio: "$7.800,00"}, 
    {id:2, nombre: "Nike Air Max 200", img: "https://www.moovbydexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dwaa5211b9/products/NI_AT6175-100/NI_AT6175-100-1.JPG?sw=400&sh=400", precio: "$8.100,00"}, 
    {id:3, nombre: "Nike Air Max 270", img: "https://www.moovbydexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw3b12c7eb/products/NI_AH6789-107/NI_AH6789-107-1.JPG?sw=400&sh=400", precio: "$7.900,00"}
]

function crearPromesa() {
    return new Promise((resolve) => {  
        setTimeout(
            function(){                          
                resolve(articulos);  
        }, 2000);      
    });     
}


const ItemList = () => {
    const [articulos, setArticulos] = React.useState(null);
    const [estado, setEstado] = useState('Cargando');

    useEffect(() => {        
        let requestArticulos = crearPromesa();

        requestArticulos
        .then( function(items_promise){
            setArticulos(items_promise);     
            setEstado('Listo');           
        })      
    }, []);

    return (
        <Container>
            <Row>
                {(articulos !== null) && 
                articulos.map(art => <Col sm={6} md={4} className="pt-3" key={art.id}> <Item titulo={art.nombre} img={art.img} precio={art.precio}/> </Col>)}
            </Row>
        </Container>
    );
 
}

export default ItemList

