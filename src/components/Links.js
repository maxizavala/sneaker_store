import Nav from 'react-bootstrap/Nav'
import CartWidget from "./CartWidget"

const {Link, Item} = Nav

const Links = () => {
    return (
        <Nav>
            <Item>
                <Link href="#">HOME</Link>
            </Item>
            <Item>
                <Link href="#">CONTACTO</Link>
            </Item>
            <Item>
                <Link href="#"><CartWidget/></Link>
            </Item>
        </Nav>
    );
}

export default Links;