import React from "react";
import "./../../styles/RewardScreen.scss";
import COF from "../../Assets/graphy/confetti.webp";

import PrimaryButton from "../PrimaryButton/PrimaryButton.tsx";

interface Props {
  XP: number;
  accuracy: number;
}
const RewardScreen = ({ XP, accuracy }) => {
  return (
    <>
      <div className="mainContainerRS">
        <div className="rectRS">
          <div className="textRS">Lesson Completed!</div>
        </div>
        <div className="gif">

          <img className="gifRS" src={COF} />
        </div>

        <div className="xp">
          <div className="textContainer">
            XP Earned
            <div className="text">
              <img src="https://cdn-icons-png.flaticon.com/512/728/728139.png " />
              {XP}
            </div>
          </div>
          <div className="textContainer">
            Accuracy
            <div className="text">
              <img src="https://cdn-icons-png.flaticon.com/512/4729/4729423.png " />
              {accuracy}
            </div>
          </div>
        </div>

        <PrimaryButton buttonText="Continue" />
      </div>
    </>
  );
};

export default RewardScreen;
