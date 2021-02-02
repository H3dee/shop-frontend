import React from 'react'
import Footer from '../../components(shared)/Footer/Footer'
import Header from '../../components(shared)/Header/Header'
import ProductInfo from './ProductInfo'
import BenefitsList from '../../components(shared)/BenefitsCards/BenefitsList'
import AdvantagesSection from './AdvantagesSections'
import '../../scss/components/product-page.scss'
import FastReferences from './FastReferences'
import { Features } from './Features'

const ProductPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="product__content">
        <div className="product__container">
          <div className="product__content__row">
            <ProductInfo />
            <AdvantagesSection />
            <FastReferences />
            <Features />
          </div>
        </div>
      </div>
      <BenefitsList />
      <Footer />
    </>
  )
}

export default ProductPage
