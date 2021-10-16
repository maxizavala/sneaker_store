import NavBar from "./components/NavBar"
import { Container } from "react-bootstrap"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import ItemListContainer from "./components/container/ItemListContainer"
import ItemDetailContainer from "./components/container/ItemDetailContainer"
import Contacto from "./components/container/Contacto"
import Carrito from "./components/container/Carrito"

import CartProvider from "./context/CartContext"


const App = () => {

    return(
        <CartProvider>
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
        </CartProvider>
    )
    
}

export default App