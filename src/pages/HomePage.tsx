import React from 'react'
import CategoriesList from '../components/CategoriesList'
import BenefitsList from '../components/BenefitsList'
import Footer from '../components/Footer'
import Header from '../components/Header'
import CompaniesLogos from '../components/CompaniesLogos'
import NewsCardsList from '../components/NewsCardsList'
import adBanner from '../img/image 26ad.png'
import '../scss/home-page.scss'

const MainPage: React.FC = () => {
  // useEffect(async () => {
  //   const data = await fetch('https://teststrapitest.herokuapp.com/categories', {method: 'Get', headers: {
  //     type: 'application/json'
  //   }})
  //   console.log(data)
  // }, [])

  return (
    <>
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__row">
            <div className="content__ad-banner">
              <img src={adBanner} alt="" />
            </div>
            <CategoriesList />
            <CompaniesLogos />
            <div className="content__news">
              <div className="news__title">
                Follow us on Instagram for News, Offers & More
              </div>
              <NewsCardsList />
            </div>
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
              <BenefitsList />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default MainPage
