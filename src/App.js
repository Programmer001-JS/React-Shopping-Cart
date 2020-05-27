import React from "react" ;
import "./App.css";
import BeerList from "./BeerList";
import Cart from "./Cart";
import { CartProvider } from "./CartContext";


const App =()=>{
   return(
     <CartProvider>
     <div>
       <Cart/>
      <BeerList />
     </div>
     
     </CartProvider>
     
   )

}
export default App;