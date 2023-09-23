import React from 'react'
import { useState} from 'react';
import "./LoginPage.css";

import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';

export default function LoginPage() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        console.log("succesful");
      })
      .catch(error => alert(error.message))
  }

  const register = e =>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email,password) //literally creates a user with email and password
    .then((auth) => { //then comes back with auth object
      // if sucessfully created a new user
      console.log(auth);
      if(auth) 
      {
        console.log("succesful");

      }

    })
    .catch(error => alert(error.message))
  }


  return (
    <div className='login'>
    <img className= "login__logo" src="Mascot.png"></img>

  <div className='login__container'>
    <h1>Sign in</h1>
    <form action="">

      <h5>E-mail</h5>

      <input type="text" value={email} onChange=
      {e => setEmail(e.target.value)}/> {/* what user typed in*/}

      <h5>Password</h5>

      <input type="password" value={password}
      onChange={e => setPassword(e.target.value)}/>

      <button type="submit" onClick={signIn}
       className='login__signInButton'>Sign in</button>

    </form>
    <button onClick={register}
    className='login__registerButton'>Create your account</button>
  </div>
  </div>
  );
  
}
