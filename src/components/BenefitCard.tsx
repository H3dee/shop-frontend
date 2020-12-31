import React from 'react'
import { BenefitCardProps } from '../interfaces/IBenefitCard'

const BenefitCard: React.FC<BenefitCardProps> = (props) => {
  return (
    <div className="benefit-card">
      <div className="benefit-card__logo">
        <img src={props.logoUrl} alt="" />
      </div>
      <div className="benefit-card__body">
        <div className="body__title">{props.title}</div>
        <div className="body__description">{props.description}</div>
      </div>
    </div>
  )
}

export default BenefitCard
