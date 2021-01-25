import React from "react";
import { Menu } from "../../interfaces/IHeader";
import headerLogo from "../../assets/img/icons/Vector 24header-logo.svg";
import searchIcon from "../../assets/img/icons/Vectorsearch-icon.svg";
import cartIcon from "../../assets/img/icons/Vectorshop-cart.svg";
import accPhoto from "../../assets/img/acc-photo.png";
import closeIcon from "../../assets/img/icons/gg_searchclose-icon.svg";
import HoveredMenu from "./HoveredMenu";

const HeaderMenu: React.FC<Menu> = ({
  showMenu,
  categories,
  subCategories,
  showSearch,
  HoverMenuHandler,
  toggleSearch,
}) => {
  return (
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
          <div className={showSearch ? "menu__items hidden" : "menu__items"}>
            {categories.map((category, i) => (
              <div
                key={String(i)}
                className="item"
                onMouseEnter={() => HoverMenuHandler(category.id)}
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
                onClick={() => toggleSearch!()}
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
          {showMenu && <HoveredMenu items={subCategories} />}
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
