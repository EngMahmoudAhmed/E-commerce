import { useContext } from "react";
import { CartContext } from "../../../context/cart/CartContext";

const CartItem = ({ item }) => {
    const { increaseQty, decreaseQty, removeFromCart } = useContext(CartContext);

    return (
        <div className="flex justify-between items-center border p-3 mb-3">
            <div>
                <h4>{item.title}</h4>
                <p>{item.price} EGP</p>
            </div>

            <div className="flex items-center gap-2">
                <button onClick={() => decreaseQty(item.id)}>-</button>

                <span>{item.quantity}</span>

                <button onClick={() => increaseQty(item.id)}>+</button>

                <button onClick={() => removeFromCart(item.id)} className="text-red-600">
                    Remove
                </button>
            </div>
        </div>
    );
};

export default CartItem;
