import React from "react";
import "./../../styles/Home.css";
import { useNavigate } from "react-router-dom";

// interface Props {
//   title: string;
//   imgURL: URL;
//   enabled: boolean;
//   offset: number;
//   size: number;
// }

// const isMobile = window.innerWidth <= 768;


// This will log a random float between minFloat and maxFloat
const Chapter = ({ title, imgURL, enabled, offset, size }) => {
  const navigate = useNavigate()

  let strength: number = 1;
  let bgHex: string = "#f7f7f7";
  !enabled ? (strength = 0.5) : (strength = 1);
  !enabled ? (bgHex = "rgba(255,255,255,.7)") : (bgHex = "#f7f7f7");
  let mul = 1;
  // let multiplier = 0.8;

  // isMobile ? (multiplier = 0.2) : (multiplier=0.8);

  if (offset < size / 2) {
    mul = offset * 0.8 * 1;
  } else {
    mul = (size - offset) * 0.8 * 1;
  }

  function handleClick(chapterIndex: number) {
    chapterIndex += 1
    if(chapterIndex == 1) {
      navigate(`/rights`)
      return
    }
    navigate(`/chapter/${chapterIndex}`)

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
      <div onClick={() => handleClick(offset)} >
        <img className="chapterIMG" src={imgURL} alt={title} />
      </div>
      <div>{title}</div>
    </div>
  );
};

export default Chapter;
