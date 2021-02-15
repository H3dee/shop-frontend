import React, { useState } from "react";

const FormsSection: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));

  return (
    <div className="Forms-section">
      <div className="Forms-section__container">
        <div className="Forms-section__text">
          We love hearing from you, our Shop customers. <br /> Please contact us
          and we will make sure to get back to you as soon as we possibly can.
        </div>
        <div className="Forms-section__forms">
          <div className="forms__contacts">
            <div className="contacts__name-input">
              <input
                autoComplete="off"
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => changeHandler(e)}
              />
              <label htmlFor="name">
                Your Name <span className="star">*</span>
              </label>
            </div>
            <div className="contacts__email-input">
              <input
                autoComplete="off"
                type="text"
                id="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => changeHandler(e)}
              />
              <label htmlFor="email">
                Your Email <span className="star">*</span>
              </label>
            </div>
            <div className="contacts__phone-number">
              <input
                autoComplete="off"
                type="text"
                id="phone-number"
                placeholder="Your Phone"
                name="phone"
                value={form.phone}
                onChange={(e) => changeHandler(e)}
              />
              <label htmlFor="phone-number">Your Phone Number</label>
            </div>
          </div>
          <div className="forms__feedback">
            <input
              autoComplete="off"
              type="text"
              id="feedback"
              placeholder="Jot us a note and we’ll get back to you as quickly as possible"
            />
            <label htmlFor="feedback">
              What’s on your mind? <span className="star">*</span>
            </label>
          </div>
          <div className="forms__submit-btn">
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormsSection;
