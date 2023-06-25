import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <NavLink className="nav-link text-dark" activeclassname="fw-bold" aria-current="page" to={"/productos"}>Productos</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark" activeclassname="fw-bold" to={"/category/lanzamientos"}>Lanzamientos</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark" activeclassname="fw-bold" to={"/category/locales"}>Locales</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark" activeclassname="fw-bold" to={"/category/en familia"}>En Familia</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-dark" activeclassname="fw-bold" to={"/nosotros"}>Nosotros</NavLink>
            </li>
        </ul>
            
        
    )
}

export default NavBar;