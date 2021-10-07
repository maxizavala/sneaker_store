import ItemDetail from './ItemDetail';
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import { productos } from '../productos';




const ItemDetailContainer = () => {

    let { id } = useParams();
    const articulo = productos[id-1]

    const [art, setProduct] = useState({id:-1, nombre: "", img: "", precio:"", descripcion: ""});

    useEffect(()=>{

        const getProduct = new Promise((res)=>{
            setTimeout( () => res(articulo), 2000)
        })

        getProduct.then( (art) => {
            setProduct(art)
        })

    },[])

    // Return ---------------------------------------
    return(
        <Container>
            <Row className="row justify-content-center">
                <Col className="pt-3" key={art.id}> 
                    <ItemDetail titulo={art.nombre} img={art.img} precio={art.precio} descripcion={art.descripcion}/> 
                </Col>
            </Row>
        </Container> 
    )

}

export default ItemDetailContainer
