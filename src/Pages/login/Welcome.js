import React from 'react'
import "./Welcome.css";
// import "../Assets/welcome.png";
import { useNavigate } from 'react-router-dom';


function Welcome() {

  const navigate = useNavigate();

  const handleClick = () => {
    // Use the 'navigate' function to programmatically navigate to a different route
    navigate('/Login');
  };


  return (
    <div className='welcome'>
    <div className="welcome__container">
        Starting the quest
<br></br>
        <button onClick={handleClick}> Get started </button>
    </div>
    <img className="welcome__image" src="/Assets/welcome.png"/>
</div>
  )
}

export default Welcome