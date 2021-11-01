import Alert from 'react-bootstrap/Alert'

const Mensaje = ({mensajeAlert, ocultarMensaje, mensajeText, mensajeTitulo, mensajeColor}) => {
  
    if (mensajeAlert) {
        return (
            <Alert variant={mensajeColor} onClose={ ocultarMensaje } dismissible>
                <Alert.Heading>{mensajeTitulo}</Alert.Heading>
                <p>{mensajeText}</p>
            </Alert>
        );
    }
    return <></>;
}

export default Mensaje