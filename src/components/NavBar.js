import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Links from "./Links"
import { Link as NavLink } from "react-router-dom"

// Destructuring
const {Brand, Collapse, Toggle} = Navbar

const NavBar = (props) => {

    return (
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
    )
    
}

export default NavBar