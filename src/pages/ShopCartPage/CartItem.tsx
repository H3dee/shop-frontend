import React from 'react'
import reserveImg from '../../assets/img/image 51cart-image.png'
import removeIcon from '../../assets/img/icons/Group 108remove-icon.svg'
import editIcon from '../../assets/img/icons/Group 115edit-icon.svg'
import arrowIcon from '../../assets/img/icons/Vector 13right-pointer.svg'
import '../../scss/components/cart-item.scss'

const CartItem: React.FC = () => {
  return (
    <div className="cart-item">
      <div className="cart-item__description">
        <div className="description__image">
          <img src={reserveImg} alt=" " />
        </div>
        <div className="description__text">
          MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM,
          1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty
        </div>
      </div>
      <div className="cart-item__options-info">
        <div className="options-info__price">$4,349.00</div>
        <div className="options-info__amount-selector">
          <div className="amount-selector__value">1</div>
          <div className="amount-selector__arrows">
            {Array.from({ length: 2 }, (_, i) => (
              <div className="arrow" key={String(i)}>
                <img src={arrowIcon} alt=" " />
              </div>
            ))}
          </div>
        </div>
        <div className="options-info__subtotal">$13,047.00</div>
      </div>
      <div className="cart-item__actions">
        {Array.from({ length: 2 }, (_, i) => (
          <div className="actions__item" key={String(i)}>
            <img src={i === 0 ? removeIcon : editIcon} alt=" " />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CartItem
