import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const {Body, Img, Footer, Text, Title} = Card

const Tarjeta = () => {

    return (
        <Card>
            <Img src = "http://placehold.it/300x200" />
            <Body>
                <Title>Producto</Title>
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

export default Tarjeta
