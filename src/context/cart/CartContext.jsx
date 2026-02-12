import { useReducer, createContext } from "react";
import { CartReducer } from "./CartReducer";

export const CartContext = createContext();
const initialState = []

export const CartProvider = ({children}) => {
    const [cart, dispatch] = useReducer(CartReducer, initialState)

    return (
    <CartContext.Provider value={{cart, dispatch}}>
        {children}
    </CartContext.Provider>
    )
}