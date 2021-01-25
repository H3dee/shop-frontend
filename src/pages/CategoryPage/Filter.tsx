import React, { useState } from 'react'
import rightArrow from '../../img/icons/Vector 13right-pointer.svg'
import { FilterProps } from '../../interfaces/IFilter'

const Filter: React.FC<FilterProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div
      className={`selectors__filter ${isOpen ? 'open' : null} 
      ${title.toLowerCase() === 'category' ? 'category-filter' : null}`}
      onClick={() => setIsOpen(prev => !prev)}
    >
      <div className="filter__placeholder">
        <span className="title">{title}</span>
        <span className="arrow">
          <img src={rightArrow} alt=" " />
        </span>
      </div>
      <div className="filter__expanded" onClick={e => e.stopPropagation()}>
        {
          items.map((price, i) => 
          <div className="filter__item" key={String(i)}>
            <span className="name">
              {price}
            </span>
          </div>)
        }
      </div>
    </div>
  )
}

export default Filter
