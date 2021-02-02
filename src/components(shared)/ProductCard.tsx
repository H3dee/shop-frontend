import React from 'react'
import { ProductCardProps } from '../interfaces/IProductCard'
import { useTypedDispatch } from '../redux/modules'
import { addProduct } from '../redux/cart/actionCreators'
import stockIcon from '../assets/img/icons/Group 132stock-icon.svg'
import cartIcon from '../assets/img/icons/Group 65cart-icon.svg'
import mailIcon from '../assets/img/icons/Group 107mail.svg'
import favoriteIcon from '../assets/img/icons/Group 106favorite.svg'
import statisticIcon from '../assets/img/icons/Group 107statistic.svg'
import star from '../assets/img/icons/Star 1star.svg'
import '../scss/components/product-card.scss'

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  imageUrl,
  productName,
  price,
  isExpanded,
}) => {
  const dispatch = useTypedDispatch()

  const options = [
    {
      name: 'mail',
      icon: mailIcon,
    },
    {
      name: 'statistic',
      icon: statisticIcon,
    },
    {
      name: 'favorite',
      icon: favoriteIcon,
    },
  ]
  const names = ['CPU', 'Featured', 'I/O Ports']
  const reviewStars = Array.from({ length: 5 }, (_, i) => (
    <div key={String(i)} className="stars__item">
      <img src={star} alt="" />
    </div>
  ))

  const featuresItems = Array.from({ length: 3 }, (_, i) => (
    <div className="features__item" key={String(i)}>
      <div className="item__name">{names[i]}</div>
      <div className="item__value">N/A</div>
    </div>
  ))

  const optionsItems = Array.from({ length: 3 }, (_, i) => (
    <div className={`options-${options[i].name}`} key={String(i)}>
      <img
        src={options[i].icon}
        alt=" "
        onClick={() =>
          i === 2 &&
          dispatch(
            addProduct({
              id,
              amount: 1,
              price,
              productName,
              imageUrl,
            })
          )
        }
      />
    </div>
  ))

  return (
    <div className={isExpanded ? 'product-card expanded' : 'product-card'}>
      <div className="product__status">
        <div className="status__icon">
          <img src={stockIcon} alt=" " />
        </div>
        <span className="status__text" style={{ color: '#78A962' }}>
          in stock
        </span>
      </div>
      <div className="product__content">
        <div className="content__top">
          <div className="top__image">
            <img src={imageUrl} alt=" " />
          </div>
          <div className="top__feedback">
            <div className="feedback__stars">{reviewStars}</div>
            <div className="feedback__count">
              reviews
              <span className="count"> (0)</span>
            </div>
          </div>
        </div>
        <div className="content__info">
          <div className="info__title">SKU D5515AI</div>
          <div className="info__name">{productName}</div>
          <div className="info__price">
            <div className="price__old">$499.00</div>
            <div className="price__new">
              $<span className="value">{price}</span>.00
            </div>
          </div>
          <div className="info__add-btn">
            <button>
              <div className="add-btn__icon">
                <img src={cartIcon} alt=" " />
              </div>
              <div
                className="add-btn__text"
                onClick={() =>
                  dispatch(
                    addProduct({
                      id: id,
                      amount: 1,
                      price,
                      productName,
                      imageUrl,
                    })
                  )
                }
              >
                Add to Cart
              </div>
            </button>
          </div>
        </div>
        <div className="content__features">{featuresItems}</div>
        <div className="content__options">{optionsItems}</div>
      </div>
    </div>
  )
}

export default ProductCard
