import React from 'react'
import BenefitsList from '../../components(shared)/BenefitsCards/BenefitsList'
import Footer from '../../components(shared)/Footer/Footer'
import Header from '../../components(shared)/Header/Header'
import AddedProductsList from './AddedProductsList'
import '../../scss/components/cart-page.scss'

const ShopCartPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__row">
            <div className="content__title">Shopping Cart</div>
            <AddedProductsList />
          </div>
        </div>
      </div>
      <BenefitsList />
      <Footer />
    </>
  )
}

export default ShopCartPage
