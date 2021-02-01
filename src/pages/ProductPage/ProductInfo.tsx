import React from 'react'
import reserveImg from '../../assets/img/image 51cart-image.png'
import mailIcon from '../../assets/img/icons/Group 107mail.svg'
import favoriteIcon from '../../assets/img/icons/Group 106favorite.svg'
import statisticIcon from '../../assets/img/icons/Group 107statistic.svg'
import zipLogo from '../../assets/img/icons/Asset 1zip-logo.svg'
import { GeneralDetails } from './GeneralDetails'

export const ProductInfo: React.FC = () => {
  const options = [
    {
      name: 'mail',
      icon: mailIcon,
    },
    {
      name: 'statistic',
      icon: statisticIcon,
    },
    {
      name: 'favorite',
      icon: favoriteIcon,
    },
  ]

  const optionsItems = Array.from({ length: 3 }, (_, i) => (
    <div className={`options-${options[i].name}`} key={String(i)}>
      <img src={options[i].icon} alt=" " />
    </div>
  ))

  return (
    <>
      <GeneralDetails />
      <div className="product-info">
        <div className="container">
          <div className="product-info__row">
            <div className="product-info__description">
              <div className="container">
                <div className="product-info__description__row">
                  <div className="product-info__description__body">
                    <div className="body__path">
                      <div className="path__item">Home</div>
                      <div className="path__item">Laptops</div>
                      <div className="path__item">MSI WS Series</div>
                    </div>
                    <div className="body__title">MSI MPG Trident 3</div>
                    <div className="body__subtitle">
                      Be the first to review this product
                    </div>
                    <div className="body__description">
                      MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER,
                      16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming
                      Keyboard and Mouse 3 Years Warranty Gaming Desktop
                    </div>
                    <div className="body__color-selectors">
                      <div className="color-selectors__item"></div>
                      <div className="color-selectors__item"></div>
                      <div className="color-selectors__item"></div>
                    </div>
                    <div className="body__bottom">
                      <div className="bottom__question-ref">
                        Have a Question? <a href="/home">Contact Us</a>
                      </div>
                      <div className="bottom__product-code">SKU D5515AI</div>
                    </div>
                  </div>
                  <div className="product-info__description__show-more">
                    + More information
                  </div>
                </div>
              </div>
            </div>
            <div className="product-info__preview">
              <div className="container">
                <div className="product-info__preview__row">
                  <div className="product-info__preview__image">
                    <div className="image__options">{optionsItems}</div>
                    <div className="image__photo">
                      <img src={reserveImg} alt=" " />
                    </div>
                    <div className="image__subadvertasing">
                      <div className="subadvertasing__logo">
                        <img src={zipLogo} alt=" " />
                      </div>
                      <div className="subadvertasing__text">
                        <span className="bold">own</span> it now, up to 6 months
                        interest free
                        <a href="/home">learn more</a>
                      </div>
                    </div>
                  </div>
                  <div className="product-info__preview__slider-selectors">
                    {Array.from({ length: 3 }, (_, i) => (
                      <div
                        className="slider-selectors__item"
                        key={String(i)}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
