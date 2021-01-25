import React from "react";
import { InfoSection } from "../../interfaces/IHeader";
import fbIcon from "../../assets/img/icons/fb-icon.svg";
import instIcon from "../../assets/img/icons/inst_icon.svg";

const HeaderInfoSection: React.FC<InfoSection> = ({
  showTimetable,
  toggleTimetable,
}) => {
  return (
    <div className="header__info-section">
      <div className="container">
        <div className="info-section__row">
          <div
            className={
              showTimetable
                ? "info-section__timetable open"
                : "info-section__timetable"
            }
          >
            <div
              className="timetable__placeholder"
              onClick={() => toggleTimetable!()}
            >
              <span className="days"> Mon-Thu:</span>
              <span className="hours">9:00 AM - 5:30 PM</span>
              <span className="expand-arrow"></span>
            </div>
            <div className="timetable__expanded">
              <div className="timetable__days">
                <div className="triagle"></div>
                <p>
                  <span className="title">We are open:</span> <br />
                  <span className="days">Mon - Thu:</span>
                  <span className="hours">9:00 AM - 5:30 PM</span>
                </p>
                <p>
                  <span className="days">Fr:</span>
                  <span className="hours">9:00 AM - 6:00 PM</span>
                </p>
                <p>
                  <span className="days">Sat:</span>
                  <span className="hours">11:00 AM - 5:00 PM</span>
                </p>
              </div>
              <div className="timetable__address">
                <p>
                  Address: 1234 Street Adress, <br />
                  City Address, 1234
                </p>
              </div>
              <div className="timetable__contacts">
                <p>
                  Phones: <span className="contact">(00) 1234 5678</span>
                </p>
                <p>
                  E-mail: <span className="contact">shop@email.com</span>
                </p>
              </div>
            </div>
          </div>
          <div className="info-section__title">
            <span className="text">
              Visit our showroom in 1234 Street Adress City Address, 1234
            </span>
            <span className="underlined">Contact Us</span>
          </div>
          <div className="info-section__contacts">
            <div className="contacts__phone">Call Us: (00) 1234 5678</div>
            <div className="contacts__socials">
              <div className="socials__facebook-icon">
                <img src={fbIcon} alt=" " />
              </div>
              <div className="socials__instagram-icon">
                <img src={instIcon} alt=" " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderInfoSection;

