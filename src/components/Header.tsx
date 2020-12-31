import React, { useState, useEffect } from "react";
import axios from "axios";
import { MenuCategory } from "../interfaces/IMenu";
import HoveredMenu from "./HoveredMenu";
// import Loader from "../components/Loader";
import fbIcon from "../img/icons/fb-icon.svg";
import instIcon from "../img/icons/inst_icon.svg";
import headerLogo from "../img/icons/Vector 24header-logo.svg";
import searchIcon from "../img/icons/Vectorsearch-icon.svg";
import cartIcon from "../img/icons/Vectorshop-cart.svg";
import accPhoto from "../img/acc-photo.png";
import closeIcon from "../img/icons/gg_searchclose-icon.svg";
import "../scss/header.scss";

const Header: React.FC = () => {
  const [showTimetable, setShowTimetable] = useState<boolean>(false)
  const [showMenu, setShowMenu]: [
    boolean,
    (showMenu: boolean) => void
  ] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [categories, setCategories]: [
    MenuCategory[],
    (categories: MenuCategory[]) => void
  ] = useState<MenuCategory[]>([]);
  const [currentCategory, setCurrentCategory]: [
    MenuCategory | null,
    (currentCategory: MenuCategory) => void
  ] = useState<MenuCategory | null>(null);
  const [loading, setLoading]: [
    boolean,
    (loading: boolean) => void
  ] = useState<boolean>(true);

  const onSelectorHover: (id: number) => void = (id) => {
    const categoryToReplace = categories.find((category) => category.id === id);
    setShowTimetable(false)
    setCurrentCategory(categoryToReplace!);
    setShowMenu(true);
  };

  const toggleTimetableHandler = () => {
    setShowSearch(false)
    setShowMenu(false)
    setShowTimetable(prev => !prev)
  }

  const toggleSearchHandler = () => {
    setShowTimetable(false)
    setShowMenu(false)
    setShowSearch(prev => !prev)
  }

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
      <div className="header__info-section">
        <div className="container">
          <div className="info-section__row">
            <div className={showTimetable ? 'info-section__timetable open' : 'info-section__timetable'}>
              <div className="timetable__placeholder" onClick={() => toggleTimetableHandler()}>
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
      <div className="header__menu">
        <div className="container">
          <div className="menu__row">
            <div className="menu__logo">
              <img src={headerLogo} alt=" " />
            </div>
            <div
              className={
                showSearch ? "menu__search-input active" : "menu__search-input"
              }
            >
              <input placeholder="Search entiere store here..." type="text" />
            </div>
            <div
              className={showSearch ? "menu__items hidden" : "menu__items"}
            >
              {categories.map((category, i) => (
                <div
                  key={String(i)}
                  className="item"
                  onMouseEnter={() => onSelectorHover(category.id)}
                >
                  {category.name}
                </div>
              ))}
              <div className="item__deals-ref">Our Deals</div>
            </div>
            <div className="menu__options">
              <div className="options__search-icon">
                <img
                  src={showSearch ? closeIcon : searchIcon}
                  alt=" "
                  onClick={() => toggleSearchHandler()}
                />
              </div>
              <div className="options__shop-cart-icon">
                <img src={cartIcon} alt=" " />
              </div>
              <div className="options__account">
                <div className="account__placeholder-icon">
                  <img src={accPhoto} alt=" " />
                </div>
              </div>
            </div>
            {showMenu && <HoveredMenu items={currentCategory?.subCategories} />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
