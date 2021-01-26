import React from "react";
import { LoaderProps } from "../interfaces/ILoader";
import "../scss/components/loader.scss";

const Loader: React.FC<LoaderProps> = ({isSmall}) => {
  return (
    <div className={isSmall ? "Preloader__overlay small" : "Preloader__overlay"}>
      <div className="Preloader__spinner"></div>
    </div>
  );
};

export default Loader;
