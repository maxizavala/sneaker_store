import NavBar from "./components/NavBar"
import ItemListContainer from "./components/container/ItemListContainer"

const App = () => {

    return(
        <>
            <NavBar titulo="Sneaker Store"/>
            <ItemListContainer greeting="Bienvenido a Sneaker Store."/>
        </>
    )
    
}
// Exporto la funcion
export default App