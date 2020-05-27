import React from "react";
import Beer from "./Beer";

const BeerList =()=>{
    const beer = [
      {name:"lav",price:190,id:1},
      {name:"Jelen",price:200,id:2},
      {name:"Bip",price:220,id:3},
      {name:"Niksicko",price:310,id:4}

    ]
    return(
        <div>
            {
             beer.map(item=>(
             <Beer key={item.id} name={item.name} price={item.price}/>    
             ))

            }
        </div>
    )
}
export default BeerList;