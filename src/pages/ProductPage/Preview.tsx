import React from 'react'
import mailIcon from '../../assets/img/icons/Group 107mail.svg'
import favoriteIcon from '../../assets/img/icons/Group 106favorite.svg'
import statisticIcon from '../../assets/img/icons/Group 107statistic.svg'
import zipLogo from '../../assets/img/icons/Asset 1zip-logo.svg'

const Preview: React.FC<{ image: string | undefined}> = ({ image: imgUrl }) => {
  const options: Array<{ name: string; icon: string }> = [
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

  const optionsItems = Array.from({ length: 3 }, (_, i) => (
    <div className={`options-${options[i].name}`} key={String(i)}>
      <img src={options[i].icon} alt=" " />
    </div>
  ))

  return (
    <div className="product-info__preview">
      <div className="container">
        <div className="product-info__preview__row">
          <div className="product-info__preview__image">
            <div className="image__options">{optionsItems}</div>
            <div className="image__photo">
              <img src={imgUrl} alt=" " />
            </div>
            <div className="image__sub-advertise">
              <div className="sub-advertise__logo">
                <img src={zipLogo} alt=" " />
              </div>
              <div className="sub-advertise__text">
                own it now, up to 6 months interest free
                <a href="/home">learn more</a>
              </div>
            </div>
          </div>
          <div className="product-info__preview__slider-selectors">
            {Array.from({ length: 3 }, (_, i) => (
              <div
                className={
                  i === 0
                    ? 'slider-selectors__item selected'
                    : 'slider-selectors__item'
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

export default Preview
