import React from "react";
import roccatLogo from "../../img/image 33roccat.png";
import msiLogo from "../../img/image 33msi.png";
import thermaltakeLogo from "../../img/image 33thermaltake.png";
import adataLogo from "../../img/image 33adata.png";
import hpLogo from "../../img/image 33hp.png";
import gigabyteLogo from "../../img/image 33gigabyte.png";

const BrandsBlock: React.FC = () => {
  return (
    <div className="list__filters-section__brands">
      <div className="brands__top">
        <div className="top__title">Brands</div>
        <div className="top__all-btn">
          <button>All Brands</button>
        </div>
      </div>
      <div className="brands__logos">
        <table>
          <tbody>
            <tr>
              <td>
                <div className="logo">
                  <img src={roccatLogo} alt=" " />
                </div>
              </td>
              <td>
                <div className="logo">
                  <img src={msiLogo} alt=" " />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="logo">
                  <img src={thermaltakeLogo} alt=" " />
                </div>
              </td>
              <td>
                <div className="logo">
                  <img src={adataLogo} alt=" " />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="logo">
                  <img src={hpLogo} alt=" " />
                </div>
              </td>
              <td>
                <div className="logo">
                  <img src={gigabyteLogo} alt=" " />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrandsBlock;
