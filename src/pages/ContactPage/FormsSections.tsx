import React from 'react'

const FormsSection: React.FC = () => (
  <div className="Forms__section">
    <div className="Forms__section__container">
      <div className="Forms__section__text">
        We love hearing from you, our Shop customers. Please contact us and we
        will make sure to get back to you as soon as we possibly can.
      </div>
      <div className="Forms__section__forms">
        <div className="forms__contacts">
          <div className="contacts__name-input">
            <label htmlFor="name">
              Your Name <span className="star">*</span>
            </label>
            <input type="text" id="name" />
          </div>
          <div className="contacts__email-input">
            <label htmlFor="email">
              Your Email <span className="star">*</span>
            </label>
            <input type="text" id="email" />
          </div>
          <div className="contacts__phone-number">
            <label htmlFor="phone-number">
              Your Phone Number <span className="star">*</span>
            </label>
            <input type="text" id="phone-number" />
          </div>
        </div>
        <div className="forms__feedback">
          <label htmlFor="feedback">
            What’s on your mind? * <span className="star">*</span>
          </label>
          <input type="text" id="feedback" />
        </div>
        <div className="forms__submit-btn">
          <button>Submit</button>
        </div>
      </div>
    </div>
  </div>
)

export default FormsSection
