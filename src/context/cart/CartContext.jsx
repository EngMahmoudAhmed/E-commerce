import { useReducer, createContext, useEffect, useMemo, useCallback } from "react";
import { CartReducer } from "./CartReducer";
import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREASE_QTY,
    DECREASE_QTY,
} from "./CartActions";

export const CartContext = createContext();

const getInitialCart = () => {
    try {
        const storedCart = typeof window !== "undefined" ? localStorage.getItem("cart") : null;
        return storedCart ? JSON.parse(storedCart) : [];
    } catch (err) {
        return [];
    }
};

export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(CartReducer, [], getInitialCart);

    useEffect(() => {
        try {
            localStorage.setItem("cart", JSON.stringify(cart));
        } catch (err) {
            // ignore localStorage write errors
        }
    }, [cart]);

    const addToCart = useCallback((product) => {
        dispatch({ type: ADD_TO_CART, payload: product });
    }, []);

    const removeFromCart = useCallback((id) => {
        dispatch({ type: REMOVE_FROM_CART, payload: id });
    }, []);

    const increaseQty = useCallback((id) => {
        dispatch({ type: INCREASE_QTY, payload: id });
    }, []);

    const decreaseQty = useCallback((id) => {
        dispatch({ type: DECREASE_QTY, payload: id });
    }, []);

    const value = useMemo(() => ({ cart, addToCart, removeFromCart, increaseQty, decreaseQty }), [cart, addToCart, removeFromCart, increaseQty, decreaseQty]);

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};