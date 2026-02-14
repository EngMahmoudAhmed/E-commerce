import { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../../context/cart/CartContext";

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    const handleAdd = () => {
        addToCart(product);
    };

    return (
        <article className="product-card" aria-label={product?.name}>
            <img
                src={product?.image}
                alt={product?.name}
                loading="lazy"
                width="240"
                height="240"
                className="product-card__image"
            />

            <div className="product-card__body">
                <h3 className="product-card__title">{product?.name}</h3>
                <p className="product-card__price">${product?.price}</p>
                <button
                    type="button"
                    className="product-card__add"
                    onClick={handleAdd}
                    aria-label={`Add ${product?.name} to cart`}
                >
                    Add to cart
                </button>
            </div>
        </article>
    );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        image: PropTypes.string,
    }).isRequired,
};

export default ProductCard;
