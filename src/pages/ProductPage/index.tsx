import React from 'react'
import { useParams } from 'react-router-dom'
import Features from './Features'
import FastReferences from './FastReferences'
import Footer from '../../components(shared)/Footer/Footer'
import Header from '../../components(shared)/Header/Header'
import ProductInfo from './ProductInfo'
import BenefitsList from '../../components(shared)/BenefitsCards/BenefitsList'
import AdvantagesSection from './AdvantagesSections'
import '../../scss/components/product-page.scss'

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <>
      <Header />
      <div className="product__content">
        <div className="product__container">
          <div className="product__content__row">
            <ProductInfo productId={id} />
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
