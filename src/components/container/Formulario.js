import { useContext, useState } from "react"

import Button from 'react-bootstrap/Button'
import Card from "react-bootstrap/Card"
import { CartContext } from "../../context/CartContext"
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import { firestore } from "../../firebase"

const {Title, Body} = Card

const Formulario = (props) => {


    const [cart, setCart, removeItem, clear] = useContext(CartContext)
    const {Group, Label, Control} = Form

    const [show, setShow] = useState(false);
    const [datos, setDatos] = useState(false);
    const [validated, setValidated] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const nuevaOrden = () => {

        const orden = {
            buyer: datos,
            cart: cart,
            total: props.total
        }

        const nuevaOrden = firestore.collection('ordenes')
        const query = nuevaOrden.add(orden)

        query.then(result => {
            console.log(result.id)
        }).catch( error => 
            console.log("Error")
        ).finally(() =>
            handleClose(),
            clear()
        )
    }


    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }


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
                        <Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Label>Nombre y Apellido</Label>
                            <Control required type="text" placeholder="Beto Perez" onChange={handleInputChange} name="nombre" />
                        </Group>
                        <Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Label>Email</Label>
                            <Control required type="email" placeholder="nombre@dominio.com" onChange={handleInputChange} name="email" />
                        </Group>
                        <Group className="mb-3" controlId="exampleForm.ControlInput3">
                            <Label>Teléfono</Label>
                            <Control required type="text" placeholder="11223344" onChange={handleInputChange} name="telefono" />
                        </Group>
                    </Form>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={ nuevaOrden }>
                        Enviar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
    
}

export default Formulario