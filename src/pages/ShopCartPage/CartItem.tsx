import React, { useState } from 'react'
import { CartItem as CartItemProps } from '../../redux/interfaces/ICartItem'
import { useTypedDispatch } from '../../redux/modules'
import { removeProduct, updateProduct } from '../../redux/cart/actionCreators'
import reserveImg from '../../assets/img/image 51cart-image.png'
import removeIcon from '../../assets/img/icons/Group 108remove-icon.svg'
import editIcon from '../../assets/img/icons/Group 115edit-icon.svg'
import arrowIcon from '../../assets/img/icons/Vector 13right-pointer.svg'
import '../../scss/components/cart-item.scss'

const CartItem: React.FC<CartItemProps> = ({
  id,
  imageUrl,
  productName,
  price,
}) => {
  const dispatch = useTypedDispatch()
  const [currentAmount, setCurrentAmount] = useState<number>(1)

  const amountSelectorHandler = (arrowIndex: number) => {
    setCurrentAmount((prev) =>
      arrowIndex === 0 ? ++prev : currentAmount > 1 ? --prev : 1
    )
    dispatch(
      updateProduct({
        id,
        price,
        imageUrl,
        productName,
        amount: currentAmount,
      })
    )
  }

  return (
    <div className="cart-item">
      <div className="cart-item__description">
        <div className="description__image">
          <img src={imageUrl || reserveImg} alt=" " />
        </div>
        <div className="description__text">{productName}</div>
      </div>
      <div className="cart-item__options-info">
        <div className="options-info__price">${price}.00</div>
        <div className="options-info__amount-selector">
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
        <div className="options-info__subtotal">
          ${price * currentAmount}.00
        </div>
      </div>
      <div className="cart-item__actions">
        {Array.from({ length: 2 }, (_, i) => (
          <div className="actions__item" key={String(i)}>
            <img
              src={i === 0 ? removeIcon : editIcon}
              alt=" "
              onClick={() =>
                i === 0 &&
                dispatch(
                  removeProduct({
                    id,
                    amount: 1,
                    productName,
                    price,
                    imageUrl,
                  })
                )
              }
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CartItem
