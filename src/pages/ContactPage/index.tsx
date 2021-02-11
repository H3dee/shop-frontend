import React from "react";
import BenefitsList from "../../components(shared)/BenefitsCards/BenefitsList";
import Footer from "../../components(shared)/Footer/Footer";
import Header from "../../components(shared)/Header/Header";
import FormsSection from "./FormsSections";
import InfoSection from "./InfoSection";
import "../../scss/components/contact-page.scss";

const ContactPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="Contact__content">
        <div className="Contact__container">
          <div className="Contact__title">Contact Us</div>
          <div className="Contact__sections">
            <FormsSection />
            <InfoSection />
          </div>
          <BenefitsList />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
