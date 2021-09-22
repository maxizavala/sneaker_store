// 1 Traer la libreria React
import React from 'react'

// 2 Traer la libreria ReactDOM
import ReactDOM from 'react-dom'

// 5 Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import "./estilos.css"

// 3 Importo un componente
import App from './App'

// 4 Renderizo el componente
ReactDOM.render(
    <App/>,
    document.getElementById("root")
);
