import React from "react";
import "./../../styles/Home.css";
interface Props {
  title: string;
  imgURL: URL;
  enabled: boolean;
  offset: number;
}

function getRandomFloat(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

// Usage
const minFloat = 0.5; // Replace with your desired minimum float
const maxFloat = 1.5; // Replace with your desired maximum float

// This will log a random float between minFloat and maxFloat

const Chapter = ({ title, imgURL, enabled, offset }) => {
  let strength: number = 1;
  !enabled ? (strength = 0.5) : (strength = strength);
  let mul = 1;
  if (offset % 2 == 0) {
    mul = mul * getRandomFloat(minFloat, maxFloat);
  } else {
    mul = mul * getRandomFloat(minFloat, maxFloat) * -1;
  }

  return (
    <div
      className="chapter"
      style={{ opacity: strength, transform: `translateX(${mul * 100}%)` }}
    >
      <div>
        <img className="chapterIMG" src={imgURL} alt={title} />
      </div>
      <div>{title}</div>
    </div>
  );
};

export default Chapter;
