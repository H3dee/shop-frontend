import React from "react";
import "../scss/components/loader.scss";

const Loader: React.FC = () => {
  return (
    <div className="Preloader__overlay">
      <div className="Preloader__spinner"></div>
    </div>
  );
};

export default Loader;
