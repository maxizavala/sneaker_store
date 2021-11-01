import { useContext, useState } from "react"

import Button from 'react-bootstrap/Button'
import Card from "react-bootstrap/Card"
import { CartContext } from "../../context/CartContext"
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import { firestore } from "../../firebase"
import { useMensaje } from "../../context/MensajeContext"

const Formulario = (props) => {


    const [cart, setCart, removeItem, clear] = useContext(CartContext)
    const {Group, Label, Control} = Form
    const {Header, Title, Body, Footer} = Modal

    const [show, setShow] = useState(false);
    const [datos, setDatos] = useState(false);

    const {mostrarMensaje, setMensajeTitulo, setMensajeText, setMensajeColor} = useMensaje()

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
            setMensajeColor("success")
            setMensajeTitulo("Gracias por tu compra!")
            setMensajeText("En breve te enviaremos por email la confirmacion de tu compra. Tu número de orden es '" + result.id + "'")
            mostrarMensaje()
        }).catch( error => 
            setMensajeColor("danger"),
            setMensajeTitulo("Gracias por tu mensaje!"),
            setMensajeText("En breve nos comunicaremos con vos para responder todas tus consultas."),
            mostrarMensaje()
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
                <Card.Body> 
                <Card.Title> TOTAL: ${props.total},00 </Card.Title>
                    <Button variant="info" onClick={handleShow}> Finalizar Compra </Button> 
                </Card.Body>
            </Card>
            

            <Modal show={show} onHide={handleClose}>
                <Header closeButton>
                    <Title>Completá tus datos:</Title>
                </Header>
                <Body>

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
                    
                </Body>
                <Footer>
                    <Button variant="primary" onClick={ nuevaOrden }>
                        Enviar
                    </Button>
                </Footer>
            </Modal>
        </>
    )
    
}

export default Formulario