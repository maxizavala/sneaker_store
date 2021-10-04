import NavBar from "./components/NavBar"
import Main from "./components/Main"
import { BrowserRouter } from "react-router-dom"

const App = () => {

    return(
        <BrowserRouter>
            <NavBar titulo="SNEAKER STORE"/>
            <Main/>
        </BrowserRouter>
    )
    
}

export default App