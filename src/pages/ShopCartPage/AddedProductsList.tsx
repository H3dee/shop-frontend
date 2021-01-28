import React from 'react'
import ProductsSection from './ProductsSection'
import SummarySection from './SummarySection'

const AddedProductsList: React.FC = () => {
  return (
    <div className="content__body">
      <div className="container">
        <div className="body__row">
              <ProductsSection />
              <SummarySection />
        </div>
      </div>
    </div>
  )
}

export default AddedProductsList
