import React from 'react'
import intel from '../../assets/img/features_images/Group 17intel.png'
import rtx from '../../assets/img/features_images/Group 16rtx.png'
import ssd from '../../assets/img/features_images/Group 15ssd-gen.png'
import ddr from '../../assets/img/features_images/Group 14ddr4.png'

const Features: React.FC = () => {
  const features: Array<{ id: number; img: string; description: string }> = [
    {
      id: 1,
      img: intel,
      description:
        'Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.',
    },
    {
      id: 2,
      img: rtx,
      description:
        'The new GeForce® RTX SUPER™ Series has more cores and higher clocks for superfast performance compared to previous-gen GPUs.',
    },
    {
      id: 3,
      img: ssd,
      description:
        'Unleash the full potential with the latest SSD technology, the NVM Express. 6 times faster than traditional SATA SSD.',
    },
    {
      id: 4,
      img: ddr,
      description:
        'Featuring the latest 10th Gen Intel® Core™ processors, memory can support up to DDR4 2933MHz to delivers an unprecedented gaming experience.',
    },
  ]

  const getFeatureItem = (
    key: string,
    img: string,
    description: string
  ): JSX.Element => (
    <div className="list__feature-item" key={String(key)}>
      <div className="feature-item__logo">
        <img src={img} alt=" " />
      </div>
      <div className="feature-item__description">{description}</div>
    </div>
  )

  return (
    <div className="product__content__features">
      <div className="product__content__features__container">
        <div className="product__content__features__text">
          <div className="text__title">Features</div>
          <div className="text__body">
            The MPG series brings out the best in gamers by allowing full
            expression in color with advanced RGB lighting control and
            synchronization.
          </div>
        </div>
        <div className="product__content__features__list">
          {features.map((item) =>
            getFeatureItem(String(item.id), item.img, item.description)
          )}
        </div>
      </div>
    </div>
  )
}

export default Features
