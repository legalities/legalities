import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

function ProgressXpCard() {
    return (
      <div className="userXPCard">
        <h6>basic rights</h6>
        <div className="pdiv">
          <p> xp 32/100</p>
        </div>
        <div>
          <ProgressBar variant="warning" now={60} />
        </div>
      </div>
    );
}

export default ProgressXpCard;
