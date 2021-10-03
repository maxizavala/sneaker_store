import Card from "react-bootstrap/Card"

const {Body, Img, Text, Title} = Card

const ItemDetail = (props) => {

    return (
        <Card>
            <Img src = {props.img}/>
            <Body>
                <Title> {props.titulo} ~ {props.precio} </Title>
                <Text> {props.descripcion} </Text>
            </Body>
        </Card>
    );
    
}

export default ItemDetail