import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useState } from "react"
import ItemCount from "./ItemCount"
import TerminarCompra from "./TerminarCompra"

const {Body, Img, Text, Title } = Card

const ItemDetail = (props) => {

    const [cantidad, setCantidad] = useState(null)

    const onAdd = itemCount => {
        setCantidad(itemCount)
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
