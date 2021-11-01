import { BrowserRouter, Route, Switch } from "react-router-dom"

import Carrito from "./components/container/Carrito"
import { CartProvider } from "./context/CartContext"
import Contacto from "./components/container/Contacto"
import { Container } from "react-bootstrap"
import ItemDetailContainer from "./components/container/ItemDetailContainer"
import ItemListContainer from "./components/container/ItemListContainer"
import MensajeProvider from "./context/MensajeContext"
import NavBar from "./components/NavBar"

const App = () => {

    return(
        <CartProvider>
            <MensajeProvider>
                <BrowserRouter>
                    <NavBar titulo="SNEAKER STORE"/>
                    <Container>
                        <Switch>

                            <Route exact path="/" component={ ItemListContainer }/>

                            <Route exact path="/contacto" component= { Contacto }/>
                            
                            <Route exact path="/cart" component= { Carrito }/>

                            <Route exact path="/producto/:id" component= { ItemDetailContainer }/>

                            <Route exact path="/categorias/:categoria" component= { ItemListContainer }/>

                        </Switch>
                    </Container>
                </BrowserRouter>
            </MensajeProvider>
        </CartProvider>
    )
    
}

export default App