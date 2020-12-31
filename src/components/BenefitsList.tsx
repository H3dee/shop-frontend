import React from 'react'
import BenefitCard from '../components/BenefitCard'
import supportLogo from '../img/icons/SupportsupportLogo.svg'
import accLogo from '../img/icons/Accountacc-logo.svg'
import savingLogo from '../img/icons/Savingsaving-logo.svg'
import '../scss/benefit-cards.scss'

const BenefitsList: React.FC = () => {
  const logotips: string[] = [supportLogo, accLogo, savingLogo]
  const titles: string[] = ['Product Support', 'Personal Account', 'Amazing Savings']
  const descriptions: string[] = [
    'Up to 3 years on-site warranty available for your peace of mind.',
    'With big discounts, free delivery and a dedicated support specialist.',
    'Up to 70% off new Products, you can be sure of the best price.',
  ]

  return (
    <div className="benefits-list">
      <div className="benefits-list__container">
        <div className="benefits-list__row">
          {Array.from({ length: 3 }, (_, index) => (
            <BenefitCard
              key={String(index)}
              logoUrl={logotips[index]}
              title={titles[index]}
              description={descriptions[index]}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default BenefitsList
