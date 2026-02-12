import { useContext } from "react";
import { CartContext } from "../../../context/cart/CartContext";
import {
    INCREASE_QTY,
    DECREASE_QTY,
    REMOVE_FROM_CART
} from "../../../context/cart/CartActions";

const CartItem = ({ item }) => {
    const { dispatch } = useContext(CartContext);

    return (
        <div className="flex justify-between items-center border p-3 mb-3">
            <div>
                <h4>{item.title}</h4>
                <p>{item.price} EGP</p>
            </div>

            <div className="flex items-center gap-2">
                <button
                    onClick={() =>
                        dispatch({ type: DECREASE_QTY, payload: item.id })
                    }
                >
                    -
                </button>

                <span>{item.quantity}</span>

                <button
                    onClick={() =>
                        dispatch({ type: INCREASE_QTY, payload: item.id })
                    }
                >
                    +
                </button>

                <button
                    onClick={() =>
                        dispatch({ type: REMOVE_FROM_CART, payload: item.id })
                    }
                    className="text-red-600"
                >
                    Remove
                </button>
            </div>
        </div>
    );
};

export default CartItem;
