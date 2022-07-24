import React from "react";

import caret from "./images/caret.png";
import minus from "./images/minus.png";
import plus from "./images/plus.png";

export const ProductPurchase = ({ price }) => (
  <section className="product-desc__purchase">
    <div className="product-desc__purchase-quantity">
      Quantity <img src={minus} alt="Decrease Quantity" /> 1{" "}
      <img src={plus} alt="Increase Quantity" />
    </div>
    <div className="product-desc__purchase-one-time">
      One Time Purchase <img src={caret} alt="Select Frequency" />
    </div>
    <div className="product-desc__purchase-price-button">
      <div className="product-desc__purchase-price">{price}</div>
      <button className="product-desc__purchase-button" name="AddToBag">
        Add To Bag
      </button>
    </div>
  </section>
);
