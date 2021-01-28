import React from 'react'

const SummarySection: React.FC = () => {
  return (
    <div className="summary-section">
      <div className="container">
            <div className="summary-section__row">
                  <div className="summary-section__title">Summary</div>
                  <div className="summary-section__destination">
                    <div className="destination__placeholder">
                      Estimate Shipping and Tax
                    </div>
                    <div className="destination__expanded">
                      <div className="expanded__text">
                        Enter your destination to get a shipping estimate.
                      </div>
                    </div>
                  </div>
                  <div className="summary-section__total">
                        
                  </div>
            </div>
      </div>
    </div>
  )
}

export default SummarySection
