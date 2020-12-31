import React from "react";
import roccatLogo from "../img/image 33roccat.png";
import msiLogo from "../img/image 33msi.png";
import razerLogo from "../img/image 33razer.png";
import thermaltakeLogo from "../img/image 33thermaltake.png";
import adataLogo from "../img/image 33adata.png";
import hpLogo from "../img/image 33hp.png";
import gigabyteLogo from "../img/image 33gigabyte.png";
import "../scss/companies-logos.scss";

const CompaniesLogos: React.FC = () => {
  return (
    <div className="logotips">
      <div className="logotips__item">
        <div className="item__image">
          <img src={roccatLogo} alt=" " />
        </div>
      </div>
      <div className="logotips__item">
        <div className="item__image">
          <img src={msiLogo} alt=" " />
        </div>
      </div>
      <div className="logotips__item">
        <div className="item__image">
          <img src={razerLogo} alt=" " />
        </div>
      </div>
      <div className="logotips__item">
        <div className="item__image">
          <img src={thermaltakeLogo} alt=" " />
        </div>
      </div>
      <div className="logotips__item">
        <div className="item__image">
          <img src={adataLogo} alt=" " />
        </div>
      </div>
      <div className="logotips__item">
        <div className="item__image">
          <img src={hpLogo} alt=" " />
        </div>
      </div>
      <div className="logotips__item">
        <div className="item__image">
          <img src={gigabyteLogo} alt=" " />
        </div>
      </div>
    </div>
  );
};

export default CompaniesLogos;
