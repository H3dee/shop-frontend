import React from "react";
import { PromotedCategoryProps } from "../../interfaces/IPromotedCategory";
import ProductCard from "../../components(shared)/ProductCard";
import testImg from "../../img/image 29.png";
import "../../scss/components/category.scss";

const Category: React.FC<PromotedCategoryProps> = (props) => {
  return (
    <div className="category">
      <div className="category__selectors">
       {props.subcategoriesNames && props.subcategoriesNames.map(item => 
         <div key={item.id} className="selector__name">{item.name}</div>
       )}
      </div>
      <div className="category__body">
        <div className="category__preview">
          <img
            src={props.parent.imgUrl}
            alt=""
          />
          <div className="preview-title">
            <a href="/home">{props.parent.name}</a>
          </div>
          <div className="preview__see-all">
            <a href="/home">see all new products</a>
          </div>
        </div>
        <div className="category__products">
          <ProductCard
            imageUrl={testImg}
            price="255"
            productName="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
          />
          <ProductCard
            imageUrl={testImg}
            price="255"
            productName="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
          />
          <ProductCard
            imageUrl={testImg}
            price="255"
            productName="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
          />
          <ProductCard
            imageUrl={testImg}
            price="255"
            productName="EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
