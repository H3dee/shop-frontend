import React, { useState } from 'react'
import rightArrow from '../../img/icons/Vector 13right-pointer.svg'
import { FilterProps } from '../../interfaces/IFilter'

const Filter: React.FC<FilterProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false)

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
      <div className="filter__expanded">
        {Array.from({ length: 8 }, (_, i) => {
          return (
            <div className="filter__item" key={String(i)}>
              <span className="name">
                {items[i] || items[items.length - 1]}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Filter
