import React from "react";
import "./Subtotal.css";
import { Link, useNavigate } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
function Subtotal() {
  const navigate = useNavigate();

  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ( {basket.length} )items:
              <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        // value={0}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button onClick={(e) => navigate("/payment")}>Proceed To Checkout</button>
    </div>
  );
}

export default Subtotal;
