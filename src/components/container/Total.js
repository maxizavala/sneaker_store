import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { useState } from "react"

const {Title, Body} = Card

const Total = (props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <Card>
                <Body> 
                <Title> TOTAL: ${props.total},00 </Title>
                    <Button variant="info" onClick={handleShow}> Finalizar Compra </Button> 
                </Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Completá tus datos:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nombre y Apellido</Form.Label>
                            <Form.Control type="text" placeholder="Beto Perez" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="nombre@dominio.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control type="text" placeholder="11223344" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Enviar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
    
}

export default Total