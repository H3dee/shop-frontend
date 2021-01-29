import React from 'react'
import { useHistory } from 'react-router-dom'
import { clearCart } from '../../redux/cart/actionCreators'
import { useTypedDispatch, useTypedSelector } from '../../redux/modules'
import CartItem from './CartItem'

const ProductsSection: React.FC = () => {
  const { products: cartItems } = useTypedSelector((state) => state.cart)
  const dispatch = useTypedDispatch()
  const history = useHistory()

  return (
    <div className="products-section">
      <div className="container">
        <div className="products-section__row">
          <div className="products-section__head-info">
            <div className="head-info__description">
              <div className="description__item-name">Item</div>
            </div>
            <div className="head-info__options">
              <div className="options__item-name">Price</div>
              <div className="options__item-name">Qty</div>
              <div className="options__item-name">Subtotal</div>
            </div>
          </div>
          <div className="products-section__list">
            {cartItems.length ? (
              cartItems.map((item, i) => (
                <CartItem
                  key={String(i)}
                  amount={item.amount}
                  id={item.id}
                  price={item.price}
                  productName={item.productName}
                  imageUrl={item.imageUrl}
                />
              ))
            ) : (
              <div className="list__empty-placeholder">
                There are no items yet...
              </div>
            )}
          </div>
          <div className="products-section__buttons">
            <div className="buttons__continue">
              <button onClick={() => history.push('/home')}>
                Continue Shopping
              </button>
            </div>
            <div className="buttons__clear">
              <button onClick={() => cartItems.length && dispatch(clearCart())}>
                Clear Shopping Cart
              </button>
            </div>
            <div className="buttons__update">
              <button>Update Shopping Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsSection
