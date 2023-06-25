const Carrousel = () => {
    return (
        <div classNameName="container-fluid my-5">
            <div classNameName="row">
                <div classNameName="col">
                <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active text-center">
                                <p>¡Nueva Bacon Cheddar McMelt!</p>
                                <p><a href="#"></a>Vení a probarla. Chequeadísimo que te va a encantar.</p>
                            
                            </div>
                            <div className="carousel-item text-center">
                                <p>¡Nuevas McCrispy Chicken con 100% pechuga de pollo!</p>
                                <p><a href="#">En sus versiones Deluxe, Cheddar & Bacon, Smoked BBQ y Spicy</a></p>
                            </div>
                            <div className="carousel-item text-center">
                                <p>McCafé Directo al Grano</p>
                        
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Carrousel;