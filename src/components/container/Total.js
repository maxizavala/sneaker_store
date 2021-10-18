import Card from "react-bootstrap/Card"

const {Body, Img, Text, Title} = Card

const Total = (props) => {

    return(
        <Card>
            <Title> TOTAL: ${props.total},00 </Title>
        </Card>
    )
    
}

export default Total