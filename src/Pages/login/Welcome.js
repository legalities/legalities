import React from 'react'
import "../../styles/Welcome.css";
// import "../Assets/welcome.png";
import { useNavigate } from 'react-router-dom';
import mascot from "../../Assets/welcome.png"
// import welcomePg from "../../Assets/images/welcomePg.png"


function Welcome() {

  const navigate = useNavigate();

  const handleClick = () => {
    // Use the 'navigate' function to programmatically navigate to a different route
    navigate('/Login');
  };

  return (
    <div className='welcome'>
      <div className="welcome__container">
        <h2>Starting the quest</h2>
        <div>
          <p>The fun and engaging way to learn about your rights.</p>
        </div>

        <button onClick={handleClick}> Get started </button>
      </div>
      <img className="welcome__image" alt='' src={mascot} />
    </div>
  )

}

export default Welcome
