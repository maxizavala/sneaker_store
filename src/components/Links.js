import Nav from 'react-bootstrap/Nav'
import CartWidget from "./CartWidget"
import { Link as NavLink } from "react-router-dom"

import { NavDropdown } from 'react-bootstrap'

const {Item, Link} = Nav

const Links = () => {
    return (
        <Nav>
            <Item>
                <Link>
                    <NavLink to="/" className="link-nav">HOME</NavLink>
                </Link>
            </Item>
            <NavDropdown title="CATEGORIAS" id="nav-dropdown" className="link-nav">
                <Item>
                    <Link>
                        <NavLink to="/categorias/hombre" className="link-nav">HOMBRE</NavLink>
                    </Link>
                </Item>
                <Item>
                    <Link>
                        <NavLink to="/categorias/mujer" className="link-nav">MUJER</NavLink>
                    </Link>
                </Item>
            </NavDropdown>
            <Item>
                <Link>
                    <NavLink to="/contacto" className="link-nav">CONTACTO</NavLink>
                </Link>
            </Item>
            <Item>
                <Link>
                    <NavLink to="/cart" className="link-nav"><CartWidget/></NavLink>
                </Link>
            </Item>
        </Nav>
    );
}

export default Links;