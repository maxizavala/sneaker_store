import ItemDetail from './ItemDetail';
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import { firestore } from "../../firebase"



const ItemDetailContainer = () => {

    let { id } = useParams();

    const [art, setArt] = useState({id:-1, nombre: "", img: "", precio:"", descripcion: ""});

    useEffect(()=>{

        const query = firestore.collection('productos').doc(id).get()
        query
            .then( (info) => {
                setArt({id: info.id, ...info.data()})
            })
            .catch( error => console.log(error))

    },[id])

    return(
        <Container>
            <Row className="row justify-content-center">
                <Col className="pt-3" key={art.id}> 
                    <ItemDetail titulo={art.nombre} img={art.img} precio={art.precio} descripcion={art.descripcion} id={art.id} stock={art.stock}/> 
                </Col>
            </Row>
        </Container> 
    )

}

export default ItemDetailContainer
