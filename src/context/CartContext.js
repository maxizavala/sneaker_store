import React, { createContext, useState } from "react"

export const CartContext = createContext() // Contexto que utilizamos en las paginas

export const CartProvider = (props) => { // Configuracion de rutas

	const [cart, setCart] = useState([])

/*
	const addItem = (itemCount) => {

        const item = {id: props.id, img: props.img, titulo: props.titulo, precio: props.precio, cantidad: itemCount}

        let copiaCart = [...cart]
        let posicion = isInCart(props.id)

        if (posicion !== null) { // Existe el producto en carrito
            copiaCart[posicion].cantidad = Number(copiaCart[posicion].cantidad) + Number(itemCount)
        } else { // No existe el producto en carrito
            copiaCart.push(item)
        }

        setCart(copiaCart)
        
    }
*/

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
		    <CartContext.Provider value={[cart, setCart, removeItem, clear]}> 
				{props.children}
			</CartContext.Provider>
		</>
	)

}
