import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import ItemCount from "./ItemCount"
import Row from "react-bootstrap/Row"
import Spinner from 'react-bootstrap/Spinner'
import TerminarCompra from "./TerminarCompra"
import { useCarrito } from "../../context/CartContext"
import { useState } from "react"

const {Body, Img, Text, Title } = Card

const ItemDetail = (props) => {


    const [cantidad, setCantidad] = useState(null)

    const {addItem} = useCarrito()


    const onAdd = (cantidad) => {

        setCantidad(cantidad)
        addItem({id: props.id, img: props.img, titulo: props.titulo, precio: props.precio, cantidad: cantidad})
        
    } 


    return (
        <Row>
            <Col className="pt-3" sm={12} md={6}>
                <Card className="">
                    { props.img ? <Img src = {props.img}/> : <Spinner className="spin" animation="border" /> }  
                </Card>
            </Col>
            <Col className="pt-3" sm={12} md={6}>
                <Card>
                    {
                        props.titulo ?
                            ( <Body>
                                <Title> {props.titulo} ~ ${props.precio},00 </Title>
                                <Text> {props.descripcion} </Text>
                            </Body> )
                        :
                            <Spinner className="spin" animation="border" />
                        
                    }
                    { 
                        props.titulo && cantidad ? 
                            <TerminarCompra/> 
                        : props.titulo ?
                            <ItemCount stock={props.stock} initial="1" onAdd={onAdd} /> 
                        : ""
                    }
                </Card>
            </Col>
        </Row>
    );
    
}

export default ItemDetail
