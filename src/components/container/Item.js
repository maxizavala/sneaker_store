import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

const {Body, Img, Footer, Text, Title} = Card

const Item = (props) => {

    return (
        <Card>
            <Img src = "http://placehold.it/300x200" />
            <Body>
                <Title>{props.titulo}</Title>
                <Text>
                    sarasa
                </Text>
            </Body>
            <Footer>
                <Button variant="info" size="sm">Ver Detalle</Button>
            </Footer>
        </Card>
    );
    
}

export default Item
