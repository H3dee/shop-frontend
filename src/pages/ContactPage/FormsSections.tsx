import React from 'react';

const FormsSection: React.FC = () => (
    <div className="Forms-section">
        <div className="Forms-section__container">
            <div className="Forms-section__text">
                We love hearing from you, our Shop customers. <br /> Please
                contact us and we will make sure to get back to you as soon as
                we possibly can.
            </div>
            <div className="Forms-section__forms">
                <div className="forms__contacts">
                    <div className="contacts__name-input">
                        <label htmlFor="name">
                            Your Name <span className="star">*</span>
                        </label>
                        <input
                            autoComplete="off"
                            type="text"
                            id="name"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="contacts__email-input">
                        <label htmlFor="email">
                            Your Email <span className="star">*</span>
                        </label>
                        <input
                            type="text"
                            id="email"
                            placeholder="Your Email"
                        />
                    </div>
                    <div className="contacts__phone-number">
                        <label htmlFor="phone-number">
                            Your Phone Number <span className="star">*</span>
                        </label>
                        <input
                            type="text"
                            id="phone-number"
                            placeholder="Your Phone"
                        />
                    </div>
                </div>
                <div className="forms__feedback">
                    <label htmlFor="feedback">
                        What’s on your mind? <span className="star">*</span>
                    </label>
                    <input
                        type="text"
                        id="feedback"
                        placeholder="Jot us a note and we’ll get back to you as quickly as possible"
                    />
                </div>
                <div className="forms__submit-btn">
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
);

export default FormsSection;
