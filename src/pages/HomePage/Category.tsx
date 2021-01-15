import React from "react";
import ProductCard from "../../components(shared)/ProductCard";
import testImg from "../../img/image 29.png";
import "../../scss/components/category.scss";

const Category: React.FC = () => {
  return (
    <div className="category">
      <div className="category__selectors">
        <div className="selector__name active">MSI GS Series</div>
        <div className="selector__name">MSI GS Series</div>
        <div className="selector__name">MSI GS Series</div>
        <div className="selector__name">MSI GS Series</div>
      </div>
      <div className="category__body">
        <div className="category__preview">
          <img
            src="https://res.cloudinary.com/hgtfkfbcu/image/upload/v1608545275/thumbnail_image_30_2_1e3cc0c096.png"
            alt=""
          />
          <div className="preview-title">
            <a href="/home">Custome Builds</a>
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
