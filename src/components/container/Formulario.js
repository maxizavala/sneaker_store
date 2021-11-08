import Button from 'react-bootstrap/Button'
import Card from "react-bootstrap/Card"
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import { firestore } from "../../firebase"
import { useCarrito } from "../../context/CartContext"
import { useMensaje } from "../../context/MensajeContext"
import { useState } from "react"

const Formulario = (props) => {

    const {cart, clear} = useCarrito()
    const {Group, Label, Control} = Form
    const {Header, Title, Body, Footer} = Modal

    const [show, setShow] = useState(false)
    const [datos, setDatos] = useState(false)
    const [boton, setBoton] = useState(false)

    const {mostrarMensaje, setMensajeTitulo, setMensajeText, setMensajeColor} = useMensaje()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [name, setName] = useState(false)
    const [tel, setTel] = useState(false)
    const [email1, setEmail1] = useState(false)


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
            
        }).catch(error => 
            setMensajeColor("danger"),
            setMensajeTitulo("Sucedió algo que no esperabamos :("),
            setMensajeText("Por favor volvé a intentar en unos minutos."),
            setTimeout(
                function(){                          
                    mostrarMensaje()  
            }, 2000)
        
        ).finally(() =>
            handleClose(),
            clear()
        )
        
    }

    
    const nameConfirm = (event) => {
        if (event.target.value !== undefined && event.target.value !== '') {
            setName(true)
            setDatos({
                ...datos,
                [event.target.name] : event.target.value
            })
        } else {
            setBoton(false)
        }
    }

    
    const telConfirm = (event) => {
        if (event.target.value !== undefined && event.target.value !== '') {
            setTel(true)
            setDatos({
                ...datos,
                [event.target.name] : event.target.value
            })
        } else {
            setBoton(false)
        }
    }

    
    const emailConfirm1 = (event) => {
        if (event.target.value !== undefined && event.target.value !== '') {
            setEmail1(event.target.value)
            setDatos({
                ...datos,
                [event.target.name] : event.target.value
            })
        } else {
            setBoton(false)
        }
    }
    

    const emailConfirm2 = (event) => {
        if (event.target.value === email1 && name && tel) {
            setBoton(true)
        } else {
            setBoton(false)
        }
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
                        <Group className="mb-3" controlId="validationCustom01">
                            <Label>Nombre y Apellido</Label>
                            <Control className="form-control" type="text" placeholder="Beto Perez" onChange={nameConfirm} name="nombre" required/>
                        </Group>
                        <Group className="mb-3" controlId="validationCustom02">
                            <Label>Teléfono</Label>
                            <Control type="text" placeholder="11223344" onChange={telConfirm} name="telefono" />
                        </Group>
                        <Group className="mb-3" controlId="validationCustom03">
                            <Label>Email</Label>
                            <Control type="email" placeholder="nombre@dominio.com" onChange={emailConfirm1} name="email"/>
                        </Group>
                        <Group className="mb-3" controlId="validationCustom04">
                            <Label>Repetí tu email</Label>
                            <Control type="email" placeholder="nombre@dominio.com" onChange={emailConfirm2} name="email2"/>
                        </Group>
                    </Form>
                    
                </Body>
                <Footer>
                    { boton ? 
                    <Button variant="primary" onClick={ nuevaOrden }>
                        Enviar
                    </Button>
                    :
                    <Button variant="primary" disabled>
                        Enviar
                    </Button>
                    }
                </Footer>
            </Modal>
        </>
    )
    
}

export default Formulario