import Nav from 'react-bootstrap/Nav'
import CartWidget from "./CartWidget"
import { Link as NavLink } from "react-router-dom"

const {Item, Link} = Nav

const Links = () => {
    return (
        <Nav>
            <Item>
                <Link>
                    <NavLink to="/" className="link-nav">HOME</NavLink>
                </Link>
            </Item>
            <Item>
                <Link>
                    <NavLink to="/contacto" className="link-nav">CONTACTO</NavLink>
                </Link>
            </Item>
            <Item>
                <Link>
                    <NavLink to="/shop" className="link-nav"><CartWidget/></NavLink>
                </Link>
            </Item>
        </Nav>
    );
}

export default Links;