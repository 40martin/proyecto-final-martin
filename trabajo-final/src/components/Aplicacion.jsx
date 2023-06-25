import pediapp from "./images/pedi-app.jpg";

const Aplicacion = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col text-center">
                    <img src={pediapp} alt="app" className="img-fluid" width={100} />
                    <h2 className="my-3">Disfrutá McDonald's a tu manera</h2>
                    <a href="/" className="btn btn-danger"><b>Comprar por la APP</b></a>
                </div>
            </div>

        </div>
    )
}

export default Aplicacion;