import { useContext } from "react";
import { CartContext } from "../context/CartContext"

const CartWidget = () => {

    const [cart] = useContext(CartContext)

    let suma = 0
    cart.forEach((item) => suma += Number(item.cantidad));

    if (suma > 0) {
        return(
            <div>
                <i className="material-icons">shopping_bag</i>
                <span className="minicart-cant"> { suma } </span>
            </div>
        )
    } else {
        return <></>
    }

    
}

export default CartWidget