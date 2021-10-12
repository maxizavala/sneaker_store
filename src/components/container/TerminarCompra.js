import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom"

const {Footer} = Card

const TerminarCompra = (props) => {

    return (
        <Footer>
            <Row>
                <Col className="text-center"> 
                    <Link className="btn btn-info" to={"/shop"}> Terminar mi compra </Link> 
                </Col>
            </Row>
        </Footer>
    )

}

export default TerminarCompra