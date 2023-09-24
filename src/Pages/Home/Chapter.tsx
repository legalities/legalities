import React from "react";
import "./../../styles/Home.css";
interface Props {
  title: string;
  imgURL: URL;
  enabled: boolean;
  offset: number;

  size: number;
}

// function getRandomFloat(min: number, max: number): number {
//   return Math.random() * (max - min) + min;
// }
const isMobile = window.innerWidth <= 768;
// Usage
// const minFloat = 0.5; // Replace with your desired minimum float
// const maxFloat = 1.5; // Replace with your desired maximum float

// This will log a random float between minFloat and maxFloat

const Chapter = ({ title, imgURL, enabled, offset, size }) => {
  let strength: number = 1;
  let bgHex: string = "#f7f7f7";
  !enabled ? (strength = 0.5) : (strength = strength);
  !enabled ? (bgHex = "rgba(255,255,255,.7)") : (bgHex = bgHex);
  let mul = 1;
  let multiplier = 0.8;

  isMobile ? (multiplier = 0.2) : (multiplier = multiplier);

  // if (offset % 2 == 0) {
  //   mul = mul * getRandomFloat(minFloat, maxFloat);
  // } else {
  //   mul = mul * getRandomFloat(minFloat, maxFloat) * -1;
  // }
  // offset += 1;
  if (offset < size / 2) {
    mul = offset * 0.8 * 1;
  } else {
    mul = (size - offset) * 0.8 * 1;
  }
  return (
    <div
      className="chapter"
      style={{
        opacity: strength,
        transform: `translateX(${mul * 100}%)`,
        backgroundColor: bgHex,
      }}
    >
      <div>
        <img className="chapterIMG" src={imgURL} alt={title} />
      </div>
      <div>{title}</div>
    </div>
  );
};

export default Chapter;
