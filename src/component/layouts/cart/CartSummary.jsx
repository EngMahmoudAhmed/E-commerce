import { useContext } from "react";
import { CartContext } from "../../../context/cart/CartContext";

const CartSummary = () => {
  const { cart } = useContext(CartContext);

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="border p-4">
      <h3 className="text-xl mb-2">Summary</h3>
      <p>Total Items: {cart.length}</p>
      <p>Total Price: {total} EGP</p>

      <button className="bg-black text-white w-full py-2 mt-4">
        Checkout
      </button>
    </div>
  );
};

export default CartSummary;
