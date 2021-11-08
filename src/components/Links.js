import CartWidget from "./CartWidget"
import Nav from 'react-bootstrap/Nav'
import { NavDropdown } from 'react-bootstrap'
import { Link as NavLink } from "react-router-dom"

const {Item} = Nav

const Links = () => {
    return (
        <Nav>
            <Item>
                <div className="nav-link">
                    <NavLink to="/" className="link-nav">HOME</NavLink>
                </div>
            </Item>
            <NavDropdown title="CATEGORIAS" id="nav-dropdown" className="link-nav">
                <Item>
                    <div className="nav-link">
                        <NavLink to="/categorias/hombre" className="link-nav">HOMBRE</NavLink>
                    </div>
                </Item>
                <Item>
                    <div className="nav-link">
                        <NavLink to="/categorias/mujer" className="link-nav">MUJER</NavLink>
                    </div>
                </Item>
            </NavDropdown>
            <Item>
                <div className="nav-link">
                    <NavLink to="/contacto" className="link-nav">CONTACTO</NavLink>
                </div>
            </Item>
            <Item>
                <div className="nav-link">
                    <NavLink to="/cart" className="link-nav"><CartWidget/></NavLink>
                </div>
            </Item>
        </Nav>
    );
}

export default Links;