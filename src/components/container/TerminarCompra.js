import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import { Link } from "react-router-dom"
import Row from "react-bootstrap/Row"

const {Footer} = Card

const TerminarCompra = (props) => {

    return (
        <Footer>
            <Row>
                <Col className="text-center"> 
                    <Link className="btn btn-info" to={"/cart"}> Terminar mi compra </Link> 
                </Col>
            </Row>
        </Footer>
    )

}

export default TerminarCompra