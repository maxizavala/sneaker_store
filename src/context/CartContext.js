import { createContext, useContext, useState } from 'react'

const context = createContext()

const {Provider} = context

export const useCarrito = () => useContext(context)

const CartProvider = ({children}) => {

	const [cart, setCart] = useState([])

	const addItem = (item) => {

        let copiaCart = [...cart]
        let posicion = isInCart(item.id)

        if (posicion !== null) {
            copiaCart[posicion].cantidad = Number(copiaCart[posicion].cantidad) + Number(item.cantidad)
        } else {
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
	
    const contextValue = {
        cart, 
        setCart, 
        removeItem, 
        clear, 
        addItem, 
        isInCart
    }

	return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    )

}

export default CartProvider
