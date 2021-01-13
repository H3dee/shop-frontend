import React from "react";
import AdBanner from "../../components(shared)/AdBanner";
import Footer from "../../components(shared)/Footer/Footer";
import Header from "../../components(shared)/Header/Header";
import BenefitsList from "../../components(shared)/BenefitsCards/BenefitsList";
import SelectedCategoryList from "./SelectedCategoryList";
import bannerImg from "../../img/image 26ad2.png";
import '../../scss/components/category-page.scss'

const CategoryPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__row">
            <AdBanner imageUrl={bannerImg} />
            <div className="content__category-title">MSI PS Series (20)</div>
            <SelectedCategoryList />
            <BenefitsList />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CategoryPage;
