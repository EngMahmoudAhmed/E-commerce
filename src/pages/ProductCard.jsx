import { useContext } from "react";
import { CartContext } from "../context/cart/CartContext";
import { ADD_TO_CART } from "../context/cart/CartActions";

function ProductCard({ product }) {

  const { state: cart, dispatch } = useContext(CartContext);

  const handleAddToCart = () => {
    dispatch({ type: ADD_TO_CART, payload: product });
    console.log(cart);
    
  };

  return (
    <div className=" hover:shadow-gray-700 rounded-2xl shadow-xl transition overflow-hidden">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-48 w-full object-cover"
      />

      <div className="p-4 m">
        <span className="text-xs text-blue-600 font-medium uppercase">
          {product.category}
        </span>

        <h2 className="font-semibold text-lg mt-1 truncate">{product.title}</h2>

        <p className="text-sm text-gray-500 mt-2 line-clamp-2">
          {product.description}
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="font-bold">${product.price}</span>
          <span className="text-sm">⭐ {product.rating}</span>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => handleAddToCart()}
            className="px-4 m-auto py-2 cursor-pointer bg-gray-900 text-white rounded-lg text-sm hover:bg-gray-900 transition"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
