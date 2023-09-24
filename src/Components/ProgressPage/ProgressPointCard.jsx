import React from "react";
import Mascot from "../../Assets/image 9.png";

function ProgressPointCard() {
    return (<div className="userCard userPointCard">
        <img className="ProgressImg" src={Mascot} alt="avatar img" />
        <h4>mayra</h4>
        <h6>1000 Points</h6>
    </div>)
}

export default ProgressPointCard;