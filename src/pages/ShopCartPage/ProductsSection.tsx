import React from "react";
import CartItem from "./CartItem";

const ProductsSection: React.FC = () => {
  return (
    <div className="products-section">
      <div className="container">
        <div className="products-section__row">
          <div className="products-section__head-info">
            <div className="head-info__description">
              <div className="description__item-name">Item</div>
            </div>
            <div className="head-info__options">
              <div className="options__item-name">Price</div>
              <div className="options__item-name">Qty</div>
              <div className="options__item-name">Subtotal</div>
            </div>
          </div>
          <div className="products-section__list">
            <CartItem />
            <CartItem />
          </div>
          <div className="products-section__buttons">
            <div className="buttons__continue">
              <button>Continue Shopping</button>
            </div>
            <div className="buttons__clear">
              <button>Clear Shopping Cart</button>
            </div>
            <div className="buttons__update">
              <button>Update Shopping Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
