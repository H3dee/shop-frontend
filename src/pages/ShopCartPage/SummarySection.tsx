import React, { useState } from "react";
import paypalLogo from "../../assets/img/icons/Group 114paypal_logo.svg";
import zipLogo from "../../assets/img/icons/Asset 1zip-logo.svg";
import rightArrow from "../../assets/img/icons/Vector 13right-pointer.svg";

const SummarySection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const getTotalItem = (name: string, value: string) => (
    <div className="total__item">
      <div className="item__name">{name}</div>
      <div className="item__value">${value}</div>
    </div>
  );

  return (
    <div className="summary-section">
      <div className="container">
        <div className="summary-section__row">
          <div className="summary-section__title">Summary</div>
          <div
            className={
              isOpen
                ? "summary-section__destination open"
                : "summary-section__destination"
            }
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <div className="destination__placeholder">
              <span className="title">Estimate Shipping and Tax</span>
              <span className="arrow">
                <img src={rightArrow} alt=" " />
              </span>
            </div>
            <div className="destination__expanded">
              <div className="expanded__text">
                Enter your destination to get a shipping estimate.
              </div>
            </div>
          </div>
          <div className="summary-section__total">
            {getTotalItem("Subtotal", "13,047.00")}
            {getTotalItem("Shipping", "21.00")}
            <div className="total__item__additional">
              (Standard Rate - Price may vary depending on the item/destination.
              TECS Staff will contact you.)
            </div>
            {getTotalItem("Tax", "1.91")}
            {getTotalItem("GST (10%)", "1.91")}
            <div className="total__item">
              <div className="item__name">Order Total </div>
              <div className="item__value">
                <span className="total-value">$13,068.00</span>
              </div>
            </div>
          </div>
          <div className="summary-section__actions">
            <div className="actions__proceed-btn">
              <button>Proceed to Checkout</button>
            </div>
            <div className="actions__check-paypal-btn">
              <button>
                <div className="check-paypal-btn__text">Check out with</div>
                <div className="check-paypal-btn__logo">
                  <img src={paypalLogo} alt=" " />
                </div>
              </button>
            </div>
            <div className="actions__check-btn">
              <button>Check Out with Multiple Addresses</button>
            </div>
          </div>
          <div className="summary-section__ad">
            <div className="ad__logo">
              <img src={zipLogo} alt=" " />
            </div>
            <div className="ad__text">
              <span className="bold">own</span> it now, up to 6 months interest
              free
              <a href="/home">learn more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummarySection;
