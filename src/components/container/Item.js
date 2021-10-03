import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

const {Body, Img, Footer, Text, Title} = Card

const Item = (props) => {

    return (
        <Card>
            <Img src = {props.img} />
            <Body>
                <Title>{props.titulo}</Title>
                <Text>{props.precio}</Text>
            </Body>
            <Footer>
                <Button variant="info" size="sm">Ver Detalle</Button>
            </Footer>
        </Card>
    );
    
}

export default Item
