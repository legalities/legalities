import React from "react";
import "./../../styles/RewardScreen.scss";
import COF from "../../Assets/graphy/confetti.webp";

import PrimaryButton, { SecondaryButton } from "../PrimaryButton/PrimaryButton.tsx";
import { Link, useParams } from "react-router-dom";

// interface Props {
//   XP: number;
//   accuracy: number;
// }
const RewardScreen = ({ XP, accuracy }) => {


  const { id } = useParams()
  let chapterId = parseInt(id) + 1;
  console.log(chapterId)

  return (
    <>
      <div className="mainContainerRS">
        <div className="rectRS">
          <div className="textRS">Lesson Completed!</div>
        </div>
        <div className="gif" >
          <img className="gifRS" alt="" src={""} />
        </div>

        <div className="xp">
          <div className="textContainer">
            XP Earned
            <div className="text">
              <img alt="" src="https://cdn-icons-png.flaticon.com/512/728/728139.png " />
              {/* {XP} */}
              {15}
            </div>
          </div>
          <div className="textContainer">
            Accuracy
            <div className="text">
              <img alt="" src="https://cdn-icons-png.flaticon.com/512/4729/4729423.png " />
              {/* {accuracy} */}
              {57}
            </div>
          </div>
        </div>

        <Link to={`/chapter/${parseInt(chapterId+1)}`}><PrimaryButton buttonText="Next Chapter" /></Link>
        <Link to={"/Landing"}><SecondaryButton buttonText="Home" /></Link>
      </div>
    </>
  );
};

export default RewardScreen;
