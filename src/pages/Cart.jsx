import { useContext } from "react";
import { CartContext } from "../context/cart/CartContext";
import CartItem from "../component/layouts/cart/CartItem";
import CartSummary from "../component/layouts/cart/CartSummary";

const Cart = () => {
    const { cart } = useContext(CartContext);

    if (cart.length === 0) {
        return <h2>Your cart is empty 🛒</h2>;
    }

    return (
        <div className="p-6">
            <h2 className="text-2xl mb-4">Your Cart</h2>

            <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2">
                    {cart.map(item => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </div>

                <CartSummary />
            </div>
        </div>
    );
};

export default Cart;
