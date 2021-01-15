import React from "react";
import Category from "./Category";

const CategoriesList: React.FC = () => {
  return (
    <div className="content__categories">
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
    </div>
  );
};

export default CategoriesList