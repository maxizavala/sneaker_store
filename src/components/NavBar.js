import CartWidget from "./CartWidget"

const NavBar = (props) => {

    return(
        <nav class="navbar navbar-expand-sm navbar-light bg-light">
            <div class="container">

                {/* Titulo */}
                <div class="navbar-brand mb-0 h1">
                    {props.titulo}
                </div>

                {/* Menu */}
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contacto</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><CartWidget/></a>
                    </li>
                </ul>

            </div>   
        </nav>
    )
    
}

export default NavBar