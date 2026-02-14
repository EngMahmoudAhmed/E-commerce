import CartSummary from "../component/layouts/cart/CartSummary";
import { useCart } from "../hooks/useCart";

const Cart = () => {
    const { cart = [] } = useCart();

    const total = cart.reduce((acc, item) => acc + (Number(item.price) || 0) * (item.quantity || 1), 0);
    const fmt = (v) => new Intl.NumberFormat(undefined, { style: "currency", currency: "EGP", maximumFractionDigits: 2 }).format(v);

    return (
        <div className="p-6">
            <h2 className="text-2xl mb-6">Your Cart</h2>

            <div className="lg:flex lg:items-center lg:justify-center lg:gap-6">

                <div className="mt-6 lg:mt-0 lg:w-140">
                    <CartSummary />
                </div>
            </div>

        </div>
    );
};

export default Cart;
