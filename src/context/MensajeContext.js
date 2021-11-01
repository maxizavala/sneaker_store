import { createContext, useContext, useState } from 'react'

const context = createContext()

const {Provider} = context

export const useMensaje = () => useContext(context)

const MensajeProvider = ({children}) => {

    let [mensajeAlert, setMensajeAlert] = useState(false)
    let [mensajeTitulo, setMensajeTitulo] = useState("")
    let [mensajeText, setMensajeText] = useState("")
    let [mensajeColor, setMensajeColor] = useState("")

    const mostrarMensaje = () => {
        setMensajeAlert(true)
    }

    const ocultarMensaje = () => {
        setMensajeAlert(false)
    }

    const contextValue = {
        mensajeAlert,
        mensajeTitulo,
        mensajeText,
        mensajeColor,
        mostrarMensaje,
        ocultarMensaje,
        setMensajeTitulo,
        setMensajeText,
        setMensajeColor
    }

    return (
            <Provider value={contextValue}>
                {children}
            </Provider>
    )
}
 
export default MensajeProvider