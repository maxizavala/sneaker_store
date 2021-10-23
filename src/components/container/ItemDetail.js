import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useContext, useState } from "react"
import ItemCount from "./ItemCount"
import TerminarCompra from "./TerminarCompra"

import { CartContext } from "../../context/CartContext"

const {Body, Img, Text, Title } = Card

const ItemDetail = (props) => {


    const [cantidad, setCantidad] = useState(null)


    const [cart, setCart, removeItem, clear, addItem, isInCart] = useContext(CartContext)


    const onAdd = (cantidad) => {

        setCantidad(cantidad)
        addItem({id: props.id, img: props.img, titulo: props.titulo, precio: props.precio, cantidad: cantidad})
        
    } 


    return (
        <>
            <Row>
                <Col className="pt-3" sm={12} md={6}>
                    <Card>
                        <Img src = {props.img}/>
                    </Card>
                </Col>
                <Col className="pt-3" sm={12} md={6}>
                    <Card>
                        <Body>
                            <Title> {props.titulo} ~ ${props.precio},00 </Title>
                            <Text> {props.descripcion} </Text>
                        </Body>
                        {cantidad ? <TerminarCompra/> : <ItemCount stock={props.stock} initial="1" onAdd={onAdd} time={props.time} />}
                    </Card>
                </Col>
            </Row>
        </>
    );
    
}

export default ItemDetail
