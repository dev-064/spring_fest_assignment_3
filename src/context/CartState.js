import cartContext from "./CartContext";
import { useState } from "react";
const cartState=(props)=>{
    const [cart,setCart]=useState([]);
    
    return(
        <cartContext.Provider value={{cart,setCart}}>
            {props.children}
        </cartContext.Provider>
    )
}
export default cartState;