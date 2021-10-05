import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { useState, useEffect } from "react"

const {Footer} = Card

const ItemCount = (props) => {

    const [cantidad, setCantidad] = useState(props.initial)

    function setCant(operacion) {
        if (operacion === "suma" && cantidad < props.stock) {
            setCantidad(parseInt(cantidad) + 1)
        } else if (operacion === "resta" && cantidad > props.initial) {
            setCantidad(parseInt(cantidad) - 1)
        }
    }

    return (
        
        <>
            <Footer>
                <Row>
                    <Col className="text-center">
                        <Button className="btn btn-sm" onClick={()=> setCant("resta")}> - </Button>
                    </Col>
                    <Col className="text-center">
                        {cantidad}  
                    </Col>
                    <Col className="text-center">
                        <Button className="btn btn-sm" onClick={()=> setCant("suma")}> + </Button>
                    </Col>
                </Row>
            </Footer>
            <Footer>
                <Row>
                    <Col className="text-center"> <Button className="btn btn-info"> Agregar al Carrito </Button> </Col>
                </Row>
            </Footer>
        </>

    )
 
}

export default ItemCount