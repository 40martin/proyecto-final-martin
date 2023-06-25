import mcdonaldslogo from "./images/mcdonalds-logo-footer-bg-white.png";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <img src={mcdonaldslogo} alt={"logo"} width={60} />

                </div>
                <div className="col-md-6 text-end">
                    <Link to={"/"}>Trabaja con Nosotros</Link> | <Link to={"/"}>Contacto</Link>

                </div>
            </div>

            <div className="col-md-4 text-center">
                
                    
            </div>
            
            <div className="col-md-4 text-end">
                
            </div>
            
            
        </div>
    )
}

export default Header;