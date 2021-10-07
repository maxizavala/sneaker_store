import NavBar from "./components/NavBar"
import { Container } from "react-bootstrap"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import ItemListContainer from "./components/container/ItemListContainer"
import ItemDetailContainer from "./components/container/ItemDetailContainer"
import Contacto from "./components/container/Contacto"
import Shop from "./components/container/Shop"


const App = () => {

    return(
        <BrowserRouter>
            <NavBar titulo="SNEAKER STORE"/>
            <Container>
                <Switch>

                    <Route exact path="/" component={ ItemListContainer }/>

                    <Route exact path="/contacto" component= { Contacto }/>
                    
                    <Route exact path="/shop" component= { Shop }/>

                    <Route exact path="/producto/:id" component= { ItemDetailContainer }/>

                    <Route exact path="/categorias/:categoria" component= { ItemListContainer }/>

                </Switch>
            </Container>
        </BrowserRouter>
    )
    
}

export default App