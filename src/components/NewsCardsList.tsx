import React from "react";
import NewsCard from "./NewsCard";
import firstCardImg from "../img/news_images/image 29.png";
import secondCardImg from "../img/news_images/image 29 (1).png";
import thirdCardImg from "../img/news_images/image 29 (2).png";
import fourthCardImg from "../img/news_images/image 29 (3).png";
import fifthCardImg from "../img/news_images/image 29 (4).png";
import sixthCardImg from "../img/news_images/image 29 (5).png";
import seventhCardImg from "../img/news_images/image 29 (6).png";
import eighthCardImg from "../img/news_images/image 29 (7).png";
import ninthCardImg from "../img/news_images/image 29 (8).png";

const NewsCardsList: React.FC = () => {
  const images = [
    firstCardImg,
    secondCardImg,
    thirdCardImg,
    fourthCardImg,
    fifthCardImg,
    sixthCardImg,
    seventhCardImg,
    eighthCardImg,
    ninthCardImg,
  ];
  const texts: string[] = [
    "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...",
    "As a gamer, superior sound counts for a lot. You need to hear enemies tiptoeing up behind you for a sneak attack or a slight change in the atmospheric music signaling a new challenge or task...",
  ];

  return (
    <div className="news__cards-list">
      {Array.from({ length: 9 }, (_, index) => (
        <NewsCard
          key={String(index)}
          imageUrl={images[index]}
          content={index + 1 === 2 ? texts[1] : texts[0]}
          date={"01.09.2020"}
        />
      ))}
    </div>
  );
};

export default NewsCardsList;
