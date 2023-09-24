import React from "react";
import HomeIcon from "../../Assets/HomeIcon.png";
import QuestionIcon from "../../Assets/QuestionIcon.png";
import TextIcon from "../../Assets/TextIcon.png";

function ProgressFooter() {
  return (
    <div className="ProgressFooter">
      <a href="">
        <img src={HomeIcon} alt="chapter-img" />
      </a>
      <a href="">
        <img src={QuestionIcon} alt="chapter-img" />
      </a>
      <a href="">
        <img src={TextIcon} alt="chapter-img" />
      </a>
    </div>
  );
}

export default ProgressFooter;
