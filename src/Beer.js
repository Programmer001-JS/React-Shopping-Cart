import React,{useContext} from "react";
import { CartContext } from "./CartContext";

const Beer = (props) => {
    const [cart,setCart] = useContext(CartContext);
    const addCart = () => {
        const beer = {name:props.name ,price:props.price};
        setCart(curr=>[...curr,beer]);
    }
    return (
        <div className="beer">
            <h3>{props.name}</h3>
            <h3>{props.price}</h3>
            <button className="btn btn-warning" onClick={addCart}>Add to cart</button>
            <hr />
        </div>
    )
}
export default Beer;