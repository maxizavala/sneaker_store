import ItemDetail from './ItemDetail';
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, {useState,useEffect} from 'react';

const articulo = [
    {   id:1, 
        nombre: "Nike M2K Tekno", 
        img: "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dweb3a9dc7/products/NI_AO3108-401/NI_AO3108-401-1.JPG", 
        precio: "$7.800,00",
        descripcion: "Inspiradas en una versión retro de Nike, las Zapatillas Nike M2K Tekno más deportivos que nunca, y con un atractivo de los 90, con mezcla de materiales duraderos con un toque moderno que le da a tu look un aspecto diferencial; su suela ancha te da pasos amortiguados y mejor reacción en cualquier superficie."
    }, 
]

function getItems() {
    return new Promise((resolve) => {  
        setTimeout(
            function(){                          
                resolve(articulo);  
        }, 2000);      
    });     
}

const ItemDetailContainer = () => {

    const [articulo, setArticulos] = React.useState(null);
    const [estado, setEstado] = useState('Cargando');

    useEffect(() => {        
        let requestArticulo = getItems();

        requestArticulo
        .then( function(items_promise){
            setArticulos(items_promise);     
            setEstado('Listo');           
        })      
    }, []);

    return(
        <Container>
            <Row>
                <Col/>
                {(articulo !== null) && 
                articulo.map(art => 
                    <Col sm={8} className="pt-3" key={art.id}> 
                        <ItemDetail titulo={art.nombre} img={art.img} precio={art.precio} descripcion={art.descripcion}/> 
                    </Col>)}
                <Col/>
            </Row>
        </Container> 
    )
    
}

export default ItemDetailContainer
