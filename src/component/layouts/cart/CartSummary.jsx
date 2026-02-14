import { useCart } from "../../../hooks/useCart";

const CartSummary = () => {
  const { cart = [], increaseQty, decreaseQty, removeFromCart } = useCart();

  const totalItems = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
  const total = cart.reduce(
    (acc, item) => acc + (Number(item.price) || 0) * (item.quantity || 1),
    0
  );

  const fmt = (v) => new Intl.NumberFormat(undefined, { style: "currency", currency: "EGP", maximumFractionDigits: 2 }).format(v);

  if (!cart || cart.length === 0) {
    return (
      <div className="bg-white shadow rounded p-6 text-center">
        <h3 className="text-xl font-semibold mb-2">Your cart is empty</h3>
        <p className="text-sm text-gray-500">Add products to see them here.</p>
      </div>
    );
  }

  return (
    <aside className="items-center grid border-2 rounded-lg shadow p-4 lg:w-[560px]">
      <header className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Order Summary</h3>
        <span className="text-sm text-gray-500">{fmt(total)}</span>
      </header>

      <div className="space-y-6 max-h-[72vh] overflow-auto pr-2">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            <img
              src={item.thumbnail || item.image || item.img || ""}
              alt={item.title || item.name || "product"}
              loading="lazy"
              className="w-20 h-20 object-cover rounded"
            />

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium truncate">{item.title || item.name}</div>
                <div className="text-sm font-semibold">{fmt(Number(item.price) || 0)}</div>
              </div>

              <div className="mt-2 flex items-center gap-2">
                <button onClick={() => decreaseQty(item.id)} className="px-2 py-1 rounded cursor-pointer">-</button>
                <div className="w-8 text-center">{item.quantity || 1}</div>
                <button onClick={() => increaseQty(item.id)} className="px-2 py-1 rounded cursor-pointer">+</button>
                <button onClick={() => removeFromCart(item.id)} className="ml-3 text-xs text-red-600 cursor-pointer">Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 border-t pt-4">
        <div className="flex items-center justify-between text-sm mb-3">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-semibold">{fmt(total)}</span>
        </div>

        <button className="w-full bg-black text-white py-2 rounded disabled:opacity-50 cursor-pointer" disabled={cart.length === 0}>
          Proceed to Checkout
        </button>
      </div>
    </aside>
  );
};

export default CartSummary;
