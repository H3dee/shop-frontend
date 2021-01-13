import React from "react";
import { HoveredMenuProps } from "../../interfaces/IMenu";
import CompaniesLogos from "../CompaniesLogos";
import tempImg from "../../img/image 29test.png";
import ProductCard from "../ProductCard";

const HoveredMenu: React.FC<HoveredMenuProps> = ({ items: categories }) => {
  if (!categories?.length)
    return (
      <div className="hovered-menu">
        <div className="menu__empty-alert">There are no categories yet...</div>
      </div>
    );

  return (
    <div className="hovered-menu">
      {categories?.length && (
        <div className="menu__body">
          <div className="menu__categories">
            {categories?.map((category) => (
              <div className="categories__item" key={String(category.id)}>
                <div className="item__name">{category.name}</div>
                {!category.sub_category && (
                  <div className="item__pointer"></div>
                )}
              </div>
            ))}
          </div>
          <div className="menu__products">
            <ProductCard imageUrl={tempImg} />
            <ProductCard imageUrl={tempImg} />
            <ProductCard imageUrl={tempImg} />
            <ProductCard imageUrl={tempImg} />
          </div>
        </div>
      )}
      <CompaniesLogos />
    </div>
  );
};

export default HoveredMenu;
