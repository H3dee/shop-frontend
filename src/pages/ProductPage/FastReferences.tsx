import React from 'react'

const FastReferences: React.FC = () => {
  const refNames: string[] = ['Product Support', 'FAQ', 'Our Buyer Guide']

  const getRefItem = (name: string, i: string): JSX.Element => (
    <div className="body__refs-item" key={i}>
      <div className="refs-item__name">{name}</div>
      <div className="refs-item__arrow-icon">→</div>
    </div>
  )

  return (
    <div className="product__content__fast-references">
      <div className="product__content__fast-references__container">
        <div className="product__content__fast-references__body">
          {Array.from({ length: 3 }, (_, i) =>
            getRefItem(refNames[i], String(i))
          )}
        </div>
      </div>
    </div>
  )
}

export default FastReferences
