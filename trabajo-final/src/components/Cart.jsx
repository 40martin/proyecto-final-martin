import { useContext } from "react";
import { CartContext } from "./context/CartContext";


const Cart = () => {
    const {cart, cartTotal, sumTotal} = useContext(CartContext);

    if (cartTotal() === 0) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <div className="alert alert-danger" role="alert">No se encontraron productos en el Carrito</div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <h1>Productos de Primera Calidad</h1>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <table className="table">
                    {
                        cart.map(item => (
                            <tr>
                                <td><img src={item.imagen} alt={item.titulo} width={60} /></td>
                                <td>{item.titulo}</td>
                                <td>{item.cantidad}</td>
                                <td>${item.cantidad * item.precio}</td>
                            </tr>
                        ))
                    }
                    <tr>
                        <td colSpan={3}>Total a Pagar</td>
                        <td>${sumTotal()}</td>
                    </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;