import React from 'react'
import GeneralDetails from './GeneralDetails'
import Preview from './Preview'

const ProductInfo: React.FC = () => {
  return (
    <>
      <GeneralDetails />
      <div className="product__content__product-info">
        <div className="product__content__container">
          <div className="product-info__row">
            <div className="product-info__description">
              <div className="product-info__description__container">
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
                      {Array.from({ length: 3 }, (_, i) => (
                        <div
                          className="color-selectors__item"
                          key={String(i)}
                        ></div>
                      ))}
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
            <Preview />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductInfo
