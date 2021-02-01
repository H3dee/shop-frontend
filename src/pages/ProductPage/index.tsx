import React from "react";
import Footer from "../../components(shared)/Footer/Footer";
import Header from "../../components(shared)/Header/Header";
import { GeneralDetails } from "./GeneralDetails";
import "../../scss/components/product-page.scss";

export const ProductPage: React.FC = () => {
  return (
    <>
      <Header />
      <GeneralDetails />
      <div className="content">
        <div className="container">
          <div className="content__row">
      
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
