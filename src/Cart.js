import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
    const [cart, setCart] = useContext(CartContext);
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
    const nameBeer = cart.reduce((acc, curr) => acc + curr.name, 0);
    return (
        <div className="racun">
            <h2>Piva : {cart.length}</h2>
            <h2>Racun :{totalPrice} </h2>
            <h2>Vrsta: {nameBeer} </h2>

            <hr />
        </div>
    )

}
export default Cart;