import React from "react";
import { NewsCardProps } from "../../interfaces/INewsCard";
import "../../scss/components/news-card.scss";

const NewsCard: React.FC<NewsCardProps> = (props) => {
  return (
    <div className="news-card">
      <div className="card__image">
        <img src={props.imageUrl} alt="" />
      </div>
      <div className="card__body">
        <div className="card__text">{props.content}</div>
        <div className="card__date">{props.date}</div>
      </div>
    </div>
  );
};

export default NewsCard;
