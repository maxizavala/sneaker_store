import ItemDetail from './ItemDetail';
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom'

const articulos = [
    {   id: 1, 
        nombre: "Nike M2K Tekno", 
        img: "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dweb3a9dc7/products/NI_AO3108-401/NI_AO3108-401-1.JPG", 
        precio: "$7.800,00",
        descripcion: "Inspiradas en una versión retro de Nike, las Zapatillas Nike M2K Tekno más deportivos que nunca, y con un atractivo de los 90, con mezcla de materiales duraderos con un toque moderno que le da a tu look un aspecto diferencial; su suela ancha te da pasos amortiguados y mejor reacción en cualquier superficie."
    }, 
    {   id: 2, 
        nombre: "Nike Air Max 200", 
        img: "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwaa5211b9/products/NI_AT6175-100/NI_AT6175-100-1.JPG", 
        precio: "$8.100,00",
        descripcion: "Inspiradas en los patrones de energía que irradian de la tierra, como el flujo de lava y las ondas rítmicas del océano, las Nike Air Max 200 cuentan con la unidad Max Air más grande hasta la fecha. Con una amortiguación excepcional y detalles modernos, esta zapatilla irradia una sensación de frescor."
    },
    {   id: 3, 
        nombre: "Nike Air Max 270", 
        img: "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw3b12c7eb/products/NI_AH6789-107/NI_AH6789-107-1.JPG", 
        precio: "$7.900,00",
        descripcion: "Con las Zapatillas Nike Air Max 270 inicia tu jornada de ejercicio con comodidad y estilo, la espuma suave le dará comodidad al pie, su cámara de aire con una estética llamativa y visible te dará una mejor amortiguación en cada paso y mejor tracción cuando corrés o caminás."
    }
]


function crearPromesa() {
    return new Promise((resolve) => {  
        setTimeout(
            function(){                          
                resolve(articulos);  
        }, 2000);      
    });     
}


const ItemDetailContainer = () => {

    let { id } = useParams()
    let articulo = articulos[id-1]

    return(
        <Container>
            <Row>
                <Col/>
                    <Col sm={8} className="pt-3" key={articulo.id}> 
                        <ItemDetail titulo={articulo.nombre} img={articulo.img} precio={articulo.precio} descripcion={articulo.descripcion}/> 
                    </Col>
                <Col/>
            </Row>
        </Container> 
    )
    
}

export default ItemDetailContainer
