import Button from 'react-bootstrap/Button'
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from "react-bootstrap/Row";
import { firestore } from "../../firebase"
import { useState } from 'react';

const Contacto = () => {

    const {Group, Label, Control} = Form
    const [datos, setDatos] = useState(false);


    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }


    const nuevoContacto = () => {

        const contacto = {
            mensaje: datos,
        }

        const nuevoContacto = firestore.collection('contacto')
        const query = nuevoContacto.add(contacto)

        query.then(result => {
            console.log("Gracias por su mensaje")
            document.getElementById("Formulario").reset();
        }).catch( error => 
            console.log("Error")
        ).finally(
            
        )}


    return (
        <Container>
            <Row className="row justify-content-center">
                <Col sm={8}>
                    <h1 className="tith1">Contacto</h1>

                    <Form id="Formulario">
                        <Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Label>Nombre</Label>
                            <Control required type="text" placeholder="Beto Perez" onChange={handleInputChange} name="nombre" />
                        </Group>
                        <Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Label>Email</Label>
                            <Control required type="email" placeholder="nombre@dominio.com" onChange={handleInputChange} name="email" />
                        </Group>
                        <Group className="mb-3" controlId="exampleForm.ControlInput3">
                            <Label>Mensaje</Label>
                            <Control as="textarea" rows={3} onChange={handleInputChange} name="mensaje" />
                        </Group>
                        <Button variant="primary" onClick={ nuevoContacto }>
                                Enviar
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
    
}

export default Contacto