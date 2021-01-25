import React from "react";
import fbIcon from "../../assets/img/icons/fb-icon.svg";
import instIcon from "../../assets/img/icons/inst_icon.svg";
import paypalLogo from "../../assets/img/icons/paypalpaypal-logo.svg";
import maestroLogo from "../../assets/img/icons/maestromaestro-logo.svg";
import expressLogo from "../../assets/img/icons/american-expressexpress-logo.svg";
import discoverLogo from "../../assets/img/icons/discoverdiscover-logo.svg";
import visaLogo from "../../assets/img/icons/visavisa-logo.svg";
import "../../scss/components/footer.scss";

const Footer: React.FC = React.memo(() => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__row">
          <div className="footer__top">
            <div className="footer__text">
              <div className="text__title">Sign Up To Our Newsletter.</div>
              <div className="text__subtitle">
                Be the first to hear about the latest offers.
              </div>
            </div>
            <div className="footer__form">
              <div className="form__input">
                <input placeholder="Your email" type="text" />
              </div>
              <div className="form__btn">
                <button>Subscribe</button>
              </div>
            </div>
          </div>
          <div className="footer__columns">
            <div className="columns__item">
              <div className="item__title">Information</div>
              <p>About Us</p> <p>About Zip</p>
              <p>Privacy Policy</p>
              <p>Search</p>
              <p>Terms</p>
              <p>Orders and Returns</p>
              <p>Contact Us</p>
              <p>Advanced Search</p>
              <p>Newsletter Subscription</p>
            </div>
            <div className="columns__item">
              <div className="item__title">PC Parts</div>
              <p>CPUS</p>
              <p>Add On Cards</p> <p> Hard Drives (Internal)</p>
              <p>Graphic Cards</p>
              <p>Keyboards / Mice</p> <p>Cases / Power Supplies / Cooling</p>
              <p>RAM (Memory)</p>
              <p>Software</p>
              <p>Speakers / Headsets</p>
              <p>Motherboards</p>
            </div>
            <div className="columns__item">
              <div className="item__title">Desktop PCs</div>
              <p>Custom PCs</p>
              <p>Servers</p>
              <p>MSI All-In-One PCs</p>
              <p>HP/Compaq PCs</p>
              <p>ASUS PCs</p>
              <p>Tecs PCs</p>
            </div>
            <div className="columns__item">
              <div className="item__title">Laptops</div>
              <p>Evryday Use Notebooks</p>
              <p>MSI Workstation Series</p>
              <p>MSI Prestige Series</p>
              <p>Tablets and Pads</p>
              <p>Netbooks</p>
              <p>Infinity Gaming Notebooks</p>
            </div>
            <div className="columns__item">
              <div className="item__title">Address</div>
              <p>Address: 1234 Street Adress City Address, 1234</p>
              <p>
                Phones: <span className="contacts">(00) 1234 5678</span>
              </p>
              <p>We are open: Monday-Thursday: 9:00 AM - 5:30 PM</p>
              <p>Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 11:00 AM - 5:00 PM</p>
              <p>
                E-mail: <span className="contacts">shop@email.com</span>
              </p>
            </div>
          </div>
          <div className="footer__refs">
            <div className="refs__media">
              <div className="media__facebook-icon">
                <img src={fbIcon} alt=" " />
              </div>
              <div className="media__instagram-icon">
                <img src={instIcon} alt=" " />
              </div>
            </div>
            <div className="refs__payment-methods">
              <div className="payment-methods__paypal">
                <img src={paypalLogo} alt=" " />
              </div>
              <div className="payment-methods__visa">
                <img src={visaLogo} alt=" " />
              </div>
              <div className="payment-methods__maestro">
                <img src={maestroLogo} alt=" " />
              </div>
              <div className="payment-methods__discover">
                <img src={discoverLogo} alt=" " />
              </div>
              <div className="payment-methods__express">
                <img src={expressLogo} alt=" " />
              </div>
            </div>
            <div className="refs__copyrights">
              Copyright © 2020 Shop Pty. Ltd.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
