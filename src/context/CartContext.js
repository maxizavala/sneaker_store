import React, { createContext, useState } from "react"

export const CartContext = createContext() // Contexto que utilizamos en las paginas

export const CartProvider = (props) => { // Configuracion de rutas

	const [cart, setCart] = useState([])


	const addItem = (item) => {

        let copiaCart = [...cart]
        let posicion = isInCart(item.id)

        if (posicion !== null) { // Existe el producto en carrito
            copiaCart[posicion].cantidad = Number(copiaCart[posicion].cantidad) + Number(item.cantidad)
        } else { // No existe el producto en carrito
            if (item.id !== -1) {
                copiaCart.push(item)
            }
        }

        setCart(copiaCart) 
        
    }


    const removeItem = (idItem) => { 

        let copiaCart = [...cart]
        let posicion = isInCart(idItem)

        copiaCart.splice(posicion, 1)
        setCart(copiaCart)
    }


    const isInCart = (idItem) => {
        let posicion = null
        let i = 0
        while (posicion == null && i < cart.length) {
            if (cart[i].id === idItem) {
                posicion = i
            }
            i++
        }
        return posicion
    }


    const clear = () => {
        setCart([]);
    }
	

	return (
		<>
		    <CartContext.Provider value={[cart, setCart, removeItem, clear, addItem, isInCart]}> 
				{props.children}
			</CartContext.Provider>
		</>
	)

}
