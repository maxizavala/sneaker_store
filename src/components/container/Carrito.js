import React from "react"
import Card from "react-bootstrap/Card"
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button"

import { useContext } from "react";
import { CartContext } from "../../context/CartContext"

const {Body, Img, Text, Title, Footer} = Card


const Carrito = () => {

    const [cart, setCart, removeItem] = useContext(CartContext)

    return (
        <div>
            <h1>Carrito</h1>
            <Container >
                { cart.map((item) => {
                    return (
                        <Row className="row justify-content-center" key={item.id}>
                            <Col sm={4} className="pt-3">
                                <Card>
                                    <Img src = {item.img} />
                                    <Body>
                                        <Title>{item.titulo}</Title>
                                        <Text>{item.precio}</Text>
                                    </Body>
                                    <Footer>
                                        <Button className="btn btn-info btn-sm" onClick={ () => removeItem(item.id) }> Eliminar </Button> 
                                    </Footer>
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