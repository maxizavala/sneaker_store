import React, { createContext, useState } from "react"

export const CartContext = createContext() // Contexto que utilizamos en las paginas

export const CartProvider = (props) => { // Configuracion de rutas

	const [cart, setCart] = useState([])


	const addItem = (id , cant) => {
        if (isInCart(id) !== -1) { // Existe el item en el carrito
            setCart(cart[id].cantidad + cant)
        } else { // No existe el item en el carrito
            setCart(cart.push({id: id, cantidad: cant}))
        }
    }


    const removeItem = (idItem) => { 

        let copiaCart = [...cart]
        let posicion = isInCart(idItem)

        copiaCart.splice(posicion, 1)
        setCart(copiaCart)
    }


    const isInCart = (idItem) => {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id === idItem) {
                return i
            }
        }
    }


    const clear = () => {
        setCart([]);
    }
	

	return (
		<>
		    <CartContext.Provider value={[cart, setCart, removeItem, clear, addItem]}> 
				{props.children}
			</CartContext.Provider>
		</>
	)

}
