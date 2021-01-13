<<<<<<< HEAD:src/components(shared)/Header/HeaderInfoSection.tsx
import React from "react";
import { InfoSection } from "../../interfaces/IHeader";
import fbIcon from "../../img/icons/fb-icon.svg";
import instIcon from "../../img/icons/inst_icon.svg";

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
=======
import React, { useState, useEffect } from "react";
import axios from "axios";
import { MenuCategory } from "../interfaces/IMenu";
// import Loader from "../components/Loader";
import HeaderInfoSection from "./HeaderInfoSection";
import "../scss/header.scss";
import HeaderMenu from "./HeaderMenu";

const Header: React.FC = () => {
  const [showTimetable, setShowTimetable] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [categories, setCategories] = useState<MenuCategory[]>([]);
  const [currentCategory, setCurrentCategory] = useState<MenuCategory | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const onSelectorHover: (id: number) => void = (id) => {
    const categoryToReplace = categories.find((category) => category.id === id);
    setShowTimetable(false);
    setCurrentCategory(categoryToReplace!);
    setShowMenu(true);
  };

  const toggleTimetableHandler = () => {
    setShowSearch(false);
    setShowMenu(false);
    setShowTimetable((prev) => !prev);
  };

  const toggleSearchHandler = () => {
    setShowTimetable(false);
    setShowMenu(false);
    setShowSearch((prev) => !prev);
  };

  useEffect(() => {
    axios
      .get<MenuCategory[]>("/categories?_limit=5")
      .then(({ data }) => {
        setCategories(data);
        setCurrentCategory(data[0]);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: "center", fontSize: "18px", padding: "15px 0" }}>
        Waiting...
      </div>
    );
  }

  return (
    <header className="header" onMouseLeave={() => setShowMenu(false)}>
      <HeaderInfoSection
        showTimetable={showTimetable}
        toggleTimetable={toggleTimetableHandler}
      />
      <HeaderMenu
        showMenu={showMenu}
        showSearch={showSearch}
        HoverMenuHandler={onSelectorHover}
        categories={categories}
        toggleSearch={toggleSearchHandler}
        subCategories={currentCategory?.subCategories}
      />
    </header>
  );
};

export default Header;
>>>>>>> main:src/components/Header.tsx
