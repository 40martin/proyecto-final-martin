const Item = ({item}) => {
    return (
        <>
            <div className="col-md-4 my-3 text-center">
                <img src={item.imagen} className="card-img-top" alt={item.titulo} />
                <div className="card-body">
                    <h3>{item.titulo}</h3>
                    <p className="card-text">{item.descripcion}<br /><b>${item.precio}</b></p>
                </div>
            </div>
        </>

    )
}

export default Item;