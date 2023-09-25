import React from 'react'
import { useState } from 'react';
import "../styles/LoginPage.css";
import "../Assets/welcome.png";
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import welcomeimg from "../Assets/welcome.png"

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        navigate('/Landing');
      })
      .catch(error => alert(error.message))
  }

  const register = e => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password) //literally creates a user with email and password
      .then((auth) => { //then comes back with auth object
        // if sucessfully created a new user
        console.log(auth);
        if (auth) {
          navigate('/Landing');
        }

      })
      .catch(error => alert(error.message))
  }


  return (
    <div className='login'>
      <div className='login__container'>
        <h1>Sign in or create account</h1>
        <form action="">

          <h4>Email</h4>

          <input type="text" value={email} onChange={e => setEmail(e.target.value)}
            placeholder='Email Please'
          /> {/* what user typed in*/}

          <h4>Password</h4>

          <input type="password" value={password}
            placeholder='its hidden !'
            onChange={e => setPassword(e.target.value)} />

          <button type="submit" onClick={signIn}
            className='login__signInButton'>Sign in</button>

        </form>
        <button onClick={register}
          className='login__registerButton'>Create your account</button>

        <img alt="" className="welcome__image" src={welcomeimg} />

      </div>
    </div>
  );

}
