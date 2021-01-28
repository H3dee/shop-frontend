import React from 'react'
import BenefitsList from '../../components(shared)/BenefitsCards/BenefitsList'
import Footer from '../../components(shared)/Footer/Footer'
import Header from '../../components(shared)/Header/Header'

const ShopCartPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="content"></div>
      <BenefitsList />
      <Footer />
    </>
  )
}

export default ShopCartPage
