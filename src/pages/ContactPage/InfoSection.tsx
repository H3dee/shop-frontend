import React from "react";

const InfoSection: React.FC = () => (
  <div className="Info-section">
    <div className="Info-section__container">
      <div className="Info-section-item">
        <div className="section-item__content">
          <div className="content__title">Address:</div>
          <div className="content__text">
            1234 Street Adress City Address, 1234
          </div>
        </div>
      </div>
      <div className="Info-section-item">
        <div className="section-item__content">
          <div className="content__title">Phone:</div>
          <div className="content__text">(00)1234 5678</div>
        </div>
      </div>
      <div className="Info-section-item">
        <div className="section-item__content">
          <div className="content__title">We are open:</div>
          <div className="content__text">
            <p> Monday - Thursday: 9:00 AM - 5:30 PM </p>
            <p> Friday 9:00 AM - 6:00 PM</p>
            <p>Saturday: 11:00 AM - 5:00 PM</p>
          </div>
        </div>
      </div>
      <div className="Info-section-item">
        <div className="section-item__content">
          <div className="content__title">E-mail:</div>
          <div className="content__text">
            <a href="/contact">shop@email.com</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default InfoSection;
