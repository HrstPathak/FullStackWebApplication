import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img
        className="checkoutProduct_image"
        alt="There is some error"
        src={image}
      />
      <div className="checkoutProduct_info">
        <div className="checkoutProduct_title">{title}</div>
        <div className="checkoutProduct_price">
          <small>₹</small>
          <strong>{price}</strong>
        </div>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket} className="checkoutProduct_">
            Remove From Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
