import React from 'react'

const AdvantagesSection: React.FC = () => {
  return (
    <div className="product__content__advantages">
      <div className="product__content__advantages__container">
        <div className="product__content__advantages__body">
          <div className="body__text">
            <div className="body__title">Outplay the Competittion</div>
            <div className="body__description">
              Experience a 40% boost in computing from last generation. MSI
              Desktop equips the 10th Gen. Intel® Core™ i7 processor with the
              upmost computing power to bring you an unparalleled gaming
              experience. <br /> <br />
              *Performance compared to i7-9700. Specs varies by model.
            </div>
          </div>
          <div className="body__selectors">
            {Array.from({ length: 3 }, (_, i) => (
              <div
                className={
                  i === 0 ? 'selectors__item selected' : 'selectors__item'
                }
                key={String(i)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdvantagesSection
