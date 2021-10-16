import React from "react"
import Card from "react-bootstrap/Card"
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TrashWidget from "../TrashWidget";

import { useContext } from "react";
import { CartContext } from "../../context/CartContext"

const {Body, Img, Text, Title} = Card


const Carrito = () => {

    const [cart, setCart, removeItem] = useContext(CartContext)

    return (
        <div>
            <h1>Carrito</h1>
            <Container >
                { cart.map((item) => {
                    return (
                        <Row className="row justify-content-center" key={item.id}>
                            <Col sm={8} className="pt-3">
                                <Card>
                                    <Row>
                                        <Col sm={4}>
                                            <Img src = {item.img} />
                                        </Col>
                                        <Col className="d-flex align-items-center">
                                            <Body sm={2} >
                                                <Title>{item.titulo}</Title>
                                                <Text> Precio: {item.precio} </Text>
                                                <Text> Cantidad: {item.cantidad} </Text>
                                            </Body>
                                        </Col>
                                        <Col sm={2} className="text-right">
                                            <div style={{cursor:'pointer'}} onClick={ () => removeItem(item.id) }> <TrashWidget/> </div>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                    )
                }) }
            </Container>
        </div>
    );
    
}

export default Carrito