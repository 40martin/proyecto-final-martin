import { Link } from "react-router-dom";
import cart from "./images/cart.svg";
import { CartContext } from "./context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
    const {cartTotal} = useContext(CartContext);
    
    return (
        (cartTotal() > 0) ? <Link className="btn btn-light position-relative py-3" to={"/cart"}>
            <img src={cart} alt="cart" width={25} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cartTotal()}</span>
        </Link> : ""
        
    )
}

export default CartWidget;