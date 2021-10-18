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


    const [cart, setCart, addItem] = useContext(CartContext)


    const onAdd = (cantidad) => {

        console.log("itemDetail")
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
                            <Title> {props.titulo} ~ {props.precio} </Title>
                            <Text> {props.descripcion} </Text>
                        </Body>
                        {cantidad ? <TerminarCompra/> : <ItemCount stock="5" initial="1" onAdd={onAdd}/>}
                    </Card>
                </Col>
            </Row>
        </>
    );
    
}

export default ItemDetail
