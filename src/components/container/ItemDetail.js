import Card from "react-bootstrap/Card"
import ItemCount from "./ItemCount"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const {Body, Img, Text, Title} = Card

const ItemDetail = (props) => {

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
                        <ItemCount stock="5" initial="1"/>
                    </Card>
                </Col>
            </Row>
        </>
    );
    
}

export default ItemDetail
