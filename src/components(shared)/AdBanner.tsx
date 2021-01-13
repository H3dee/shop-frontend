import React from "react";
import { AdBannerProps } from "../interfaces/IAdBanner";

const AdBanner: React.FC<AdBannerProps> = ({ imageUrl }) => {
  return (
    <div className="content__ad-banner">
      <img src={imageUrl} alt="" />
    </div>
  );
};

export default AdBanner;
