import React from 'react'
import { PaginationProps } from '../../redux/interfaces/IPagintaion'

const Pagination: React.FC<PaginationProps> = ({
  pagesAmount,
  switchPage,
  currentPage,
}) => {
  return (
    <div className="pagination">
      <div
        className={
          currentPage && currentPage === 1
            ? 'pagination__item disabled'
            : 'pagination__item'
        }
        onClick={() =>
          currentPage && currentPage !== 1 && switchPage(currentPage - 1)
        }
      >
        <span className="arrow">‹</span>
      </div>
      {Array.from({ length: pagesAmount }, (_, i) => (
        <div
          className={
            currentPage === i + 1
              ? 'pagination__item selected'
              : 'pagination__item'
          }
          onClick={() => switchPage(i + 1)}
          key={String(i)}
        >
          {i + 1}
        </div>
      ))}
      <div
        className={
          currentPage && currentPage === pagesAmount
            ? 'pagination__item disabled'
            : 'pagination__item'
        }
        onClick={() =>
          currentPage &&
          currentPage !== pagesAmount &&
          switchPage(currentPage + 1)
        }
      >
        <span className="arrow">›</span>
      </div>
    </div>
  )
}

export default Pagination
