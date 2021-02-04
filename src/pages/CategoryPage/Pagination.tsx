import React from "react";
import { PaginationProps } from "../../interfaces/IPagintaion";

const Pagination: React.FC<PaginationProps> = ({ pagesAmount }) => {
  console.log(pagesAmount);
  return (
    <div className="pagination">
      <div className="pagination__item">
        <span className="arrow">‹</span>
      </div>
      {Array.from({ length: pagesAmount }, (_, i) => (
        <div className="pagination__item" key={String(i)}>
          {++i}
        </div>
      ))}
      <div className="pagination__item">
        <span className="arrow">›</span>
      </div>
    </div>
  );
};

export default Pagination;
