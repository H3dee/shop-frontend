import React from "react";
import PromotedCategoriesList from "./PromotedCategoriesList";
import BenefitsList from "../../components(shared)/BenefitsCards/BenefitsList";
import Footer from "../../components(shared)/Footer/Footer";
import Header from "../../components(shared)/Header/Header";
import CompaniesLogos from "../../components(shared)/CompaniesLogos";
import NewsCardsList from "../../components(shared)/NewsCards/NewsCardsList";
import AdBanner from "../../components(shared)/AdBanner";
import Reviews from "./Reviews";
import adBannerImg from "../../img/image 26ad.png";
import "../../scss/components/home-page.scss";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__row">
            <AdBanner imageUrl={adBannerImg} />
            <PromotedCategoriesList />
            <CompaniesLogos />
            <div className="content__news">
              <div className="news__title">
                Follow us on Instagram for News, Offers & More
              </div>
              <NewsCardsList />
            </div>
            <Reviews />
            <BenefitsList />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
