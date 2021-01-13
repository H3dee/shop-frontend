import React from 'react'

const Reviews: React.FC = () => {
      return (
            <div className="content__latest-reviews">
            <div className="container">
              <div className="latest-reviews__row">
                <div className="latest-reviews__text">
                  <span className="symbol">‘’</span>
                  My first order arrived today in perfect condition. From the
                  time I sent a question about the item to making the
                  purchase, to the shipping and now the delivery, your
                  company, Tecs, has stayed in touch. Such great service. I
                  look forward to shopping on your site in the future and
                  would highly recommend it.
                </div>
                <div className="latest-reviews__author">- Tama Brown</div>
                <div className="latest-reviews__footer">
                  <div className="latest-reviews__btn">
                    <a href="/home">Leave Us A Review</a>
                  </div>
                  <div className="latest-reviews__selectors">
                    <div className="selectors__item current"></div>
                    <div className="selectors__item"></div>
                    <div className="selectors__item"></div>
                    <div className="selectors__item"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      )
}

export default Reviews