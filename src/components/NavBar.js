import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Links from "./Links"

// Destructuring
const {Brand, Collapse, Toggle} = Navbar

const NavBar = (props) => {

    return (
        <Navbar as="header" expand="sm" className="color-nav" variant="dark">
            <Container>
                <Brand className="fontmarca">{props.titulo}</Brand>
                <Toggle/>
                <Collapse>
                    <Links/>
                </Collapse>
            </Container>
        </Navbar>
    )
    
}

export default NavBar