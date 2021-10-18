import React from "react"
import Card from "react-bootstrap/Card"
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TrashWidget from "../TrashWidget";
import Total from "./Total";

import { useContext } from "react";
import { CartContext } from "../../context/CartContext"

const {Body, Img, Text, Title} = Card


const CarritoList = () => {

    const [cart, setCart, removeItem] = useContext(CartContext)

    let total = 0

    return (
        <div>
            <Container >
                { cart.map((item) => {
                    total += item.cantidad*item.precio
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
                                                <Text> Precio: ${item.precio},00 </Text>
                                                <Text> Cantidad: {item.cantidad} </Text>
                                                <Text> Subtotal: ${item.cantidad*item.precio},00 </Text>
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
                <Row className="row justify-content-center">
                    <Col sm={8} className="pt-3 text-center">
                        <Total total={total}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
    
}

export default CarritoList