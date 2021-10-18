import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { useState } from "react"


const {Footer} = Card

const ItemCount = ({stock, initial, onAdd}) => {

    const [cantidad, setCantidad] = useState(initial)

    function setCant(operacion) {
        if (operacion === "suma" && cantidad < stock) {
            setCantidad(parseInt(cantidad) + 1)
        } else if (operacion === "resta" && cantidad > initial) {
            setCantidad(parseInt(cantidad) - 1)
        }
    }

    
    const agregar = () => {

        console.log("itemCount")
        onAdd(cantidad)

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
                    <Col className="text-center"> 
                        <Button className="btn btn-info" onClick={ agregar }> Agregar al Carrito </Button> 
                    </Col>
                </Row>
            </Footer>
        </>

    )
 
}

export default ItemCount