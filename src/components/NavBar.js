import Container from 'react-bootstrap/Container'
import Links from "./Links"
import Mensaje from './container/Mensaje'
import { Link as NavLink } from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar'
import { useMensaje } from "../context/MensajeContext"

const {Brand, Collapse, Toggle} = Navbar

const NavBar = (props) => {

    const { mensajeAlert, ocultarMensaje, mensajeTitulo, mensajeText, mensajeColor} = useMensaje()

    return (
        <>
            <Navbar as="header" expand="sm" className="color-nav" variant="dark">
                <Container>
                    <NavLink to="/">
                        <Brand className="fontmarca">{props.titulo}</Brand>
                    </NavLink>
                    <Toggle/>
                    <Collapse>
                        <Links/>
                    </Collapse>
                </Container>
            </Navbar>
            <Mensaje mensajeAlert={mensajeAlert} ocultarMensaje={ocultarMensaje} mensajeTitulo={mensajeTitulo} mensajeText={mensajeText} mensajeColor={mensajeColor} />
        </>
    )
    
}

export default NavBar