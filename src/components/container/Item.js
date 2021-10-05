import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom"

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
                <Link className="btn btn-info btn-sm" to={"/producto/" + props.id}> Ver Detalle </Link>
            </Footer>
        </Card>
    );
    
}

export default Item
