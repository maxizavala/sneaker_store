import React, { createContext, useState } from "react"

export const CartContext = createContext() // Contexto que utilizamos en las paginas

const CartProvider = (props) => { // Configuracion de rutas

	const [cart, setCart] = useState([])


	const addItem = (id , cant) => {
        if (isInCart(id) !== -1) { // Existe el item en el carrito
            setCart(cart[id].cantidad + cant)
        } else { // No existe el item en el carrito
            setCart(cart.push({id: id, cantidad: cant}))
        }
    }


    const removeItem = (id) => {
        if (isInCart(id) !== -1) {
            setCart(cart.splice(id, 1))
        }
    }


    const clear = () => {
        setCart([]);
    }

    const isInCart = (id) => {
        let posicion = -1
        for (let i=0; i < cart.length; i++) { 
            if (id === cart[i].item.id) { 
                posicion = i     
            }
        }
        return posicion
    }
	

	return (
		<>
		    <CartContext.Provider value={[cart, setCart]}> 
				{props.children}
			</CartContext.Provider>
		</>
	)

}

export default CartProvider