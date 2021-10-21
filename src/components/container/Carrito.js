import { useContext } from "react";
import { CartContext } from "../../context/CartContext"
import CarritoList from "./CarritoList";
import { Jumbotron } from 'react-bootstrap';
import { Link } from "react-router-dom"

const Carrito = () => {

    const [cart] = useContext(CartContext)

    if (cart.length > 0) {
        return(
            <>
                <h1 className="tith1">Carrito</h1>
                <CarritoList/>
            </>
        )
    } else {
        return(
            <div className="pt-5">
                <Jumbotron className="">
                    <h1 className="display-3">Hola! :)</h1>
                    <p className="lead"> El carrito está vacío, podes ir al home y elegir algunos productos.</p>
                    <p className="lead">
                        <Link className="btn btn-info" to={"/"}> Ir al Home </Link>
                    </p>
                </Jumbotron>
            </div>
        )
    }

}

export default Carrito