import cafe from "./images/cafe-recien-hecho.jpg";
import cajita from "./images/cajita-feliz.jpg";


const Promociones = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <p><img src={cafe} alt={"cafe"} className="img-fluid" /></p>
                    <h3>Simple y rico. Dejá de dar vueltas y andá Directo al Grano conociendo más de McCafé.</h3>
                    <p><a href="/" className="btn btn-dark"><b>Comprar</b></a></p>

                </div>
                <div className="col">
                <p><img src={cajita} alt={"cajita"} className="img-fluid" /></p>
                    <h3>¡Disfrutá de la diversión bajo el mar con los juguetes de La Sirenita, de Disney en Cajita Feliz!</h3>
                    <p><a href="/" className="btn btn-dark"><b>Comprar</b></a></p>

                </div>
            </div>
        </div>
    )
}

export default Promociones;