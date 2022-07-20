import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
function Checkout() {
  const [{ basket, user }] = useStateValue();
  return (
    <div className="checkout_outer_div">
      <div className="checkout_image">
        <img
          src="https://img.freepik.com/free-photo/cart-from-supermarket-basket_423170-821.jpg?w=2000"
          alt="Cart pic here"
        />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#212529"
          fill-opacity="1"
          d="M0,64L48,96C96,128,192,192,288,202.7C384,213,480,171,576,128C672,85,768,43,864,42.7C960,43,1056,85,1152,101.3C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <div className="checkout">
        <div>
          <div className="checkout_header">
            <h6>Hey, {user?.displayName}</h6>
            <h3 className="checkout_title">Your Shopping Basket</h3>
          </div>
        </div>
        <div>
          <Subtotal />
        </div>
      </div>
      <div className="checkout_product_div">
        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default Checkout;
