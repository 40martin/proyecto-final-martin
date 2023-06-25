import disponiblegoogleplay from "./images/disponible_google_play.png";
import facebook from "./images/facebook.svg";
import instagram from "./images/instagram.svg";
import youtube from "./images/youtube.svg";
import mcdonalds from "./images/mcdonalds-logo-bg-red.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="container-fluid text-primary bg-warning py-5">
            <div className="container">
            <div className="row">
                <div className="col">
                    <img src={mcdonalds} className="img-thumbnail" alt={"mcdonalds"} width={40} />
                    <h4>Política de Privacidad</h4>
                </div>
                <div className="col">
                    <h4>Defensa del Consumidor</h4>
                </div>
                <div className="col">
                    <h4>Contacto</h4>
                </div>
                <div className="col">
                    <Link to={"https://www.mcdonalds.com.ar/uploads/disponible_google_play_3x_c977cae3bc.png"} target={"_blank"}>
                    <img src={disponiblegoogleplay} alt={"googleplay"} width={100} /></Link>
                </div>

                <div className="col- text-end">
                    <Link to={"https://www.facebook.com/McDonaldsArgentina/"}><img src={facebook} alt={"facebook"} width={30} /></Link>
                    <Link to={"https://www.instagram.com/mcdonalds_ar/"}><img src={instagram} alt={"instagram"} width={30} /></Link>
                    <Link to={"https://www.youtube.com/user/McDonaldsSur"}><img src={youtube} alt={"youtube"} width={30} /></Link>
                </div>
            </div>
            
        </div>
        </div>
    )
}

export default Footer;