import React, { useEffect, useRef, useState } from 'react'
import arrowIcon from '../../assets/img/icons/Vector 13right-pointer.svg'
import paypalLogo from '../../assets/img/icons/Group 114paypal_logo.svg'
import '../../scss/components/general-details.scss'

const GeneralDetails: React.FC<{
  setTypeHandler(type: string): void
  type: string
}> = ({ setTypeHandler: setType, type }) => {
  const [currentAmount, setCurrentAmount] = useState<number>(1)
  const focusRef = useRef<HTMLDivElement>(null)

  const amountSelectorHandler = (arrowIndex: number) =>
    setCurrentAmount((prev) =>
      arrowIndex === 0 ? ++prev : currentAmount > 1 ? --prev : 1
    )

  useEffect(() => {
    focusRef.current!.scrollIntoView({
      block: 'start',
      behavior: 'auto',
      inline: 'start',
    })
  }, [])

  return (
    <div className="general-details" ref={focusRef}>
      <div className="container">
        <div className="general-details__row">
          <div className="general-details__selectors">
            <div
              className={
                type === 'about'
                  ? 'selectors__about active'
                  : 'selectors__about'
              }
              onClick={() => setType('about')}
            >
              About Product
            </div>
            <div
              className={
                type === 'details'
                  ? 'selectors__details active'
                  : 'selectors__details'
              }
              onClick={() => setType('details')}
            >
              Details
            </div>
            <div
              className={
                type === 'specs'
                  ? 'selectors__specs active'
                  : 'selectors__specs'
              }
              onClick={() => setType('specs')}
            >
              Specs
            </div>
          </div>
          <div className="general-details__actions">
            <div className="actions__info-cost">
              <span>On Sale from </span>
              <span className="cost">
                $<span className="value">{3299 * currentAmount}</span>.00
              </span>
            </div>
            <div className="actions__amount-selector">
              <div className="amount-selector__value">{currentAmount}</div>
              <div className="amount-selector__arrows">
                {Array.from({ length: 2 }, (_, i) => (
                  <div className="arrow" key={String(i)}>
                    <img
                      src={arrowIcon}
                      alt=" "
                      onClick={() => amountSelectorHandler(i)}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="actions__buttons">
              <div className="buttons__add-btn">
                <button>Add to cart</button>
              </div>
              <div className="buttons__paypal-btn">
                <button>
                  <div className="paypal-btn__logo">
                    <img src={paypalLogo} alt=" " />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GeneralDetails
