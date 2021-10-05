import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { useState, useEffect } from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const {Body, Img, Text, Title, Footer} = Card

const ItemDetail = (props) => {

    const [cantidad, setCantidad] = useState(0)

    return (
        <Card>
            <Img src = {props.img}/>
            <Body>
                <Title> {props.titulo} ~ {props.precio} </Title>
                <Text> {props.descripcion} </Text>
            </Body>
            <Footer>
                <Row>
                    <Col className="text-center">
                        <Button onClick={()=> setCantidad(cantidad + 1)}> + </Button>
                    </Col>
                    <Col className="text-center">
                        {cantidad}  
                    </Col>
                    <Col className="text-center">
                        <Button onClick={()=> setCantidad(cantidad - 1)}> - </Button>
                    </Col>
                </Row>
            </Footer>
        </Card>
    );
    
}

export default ItemDetail
