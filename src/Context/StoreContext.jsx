import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) =>{

    const [cartItems, setCartItems] = useState({})

    const addToCart = (itemId) =>{
        if(!cartItems[itemId]){
            setCartItems( (prev)=>({...prev,[itemId]:1}) )
        }
        else{
            setCartItems((prev) =>({...prev,[itemId]: prev[itemId]+1}))
        }
    }
    const removFromCart = (itemId) =>{
        setCartItems( (prev)=>({...prev,[itemId]:prev[itemId]-1}) )
    }

    useEffect( () =>{

    } ,[cartItems])

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removFromCart
    }
    
    return (
       <StoreContext.Provider value={contextValue}>
            {props.children}
       </StoreContext.Provider>
    )
}

export default StoreContextProvider