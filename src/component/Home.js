import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Home.css';
import Classement from './Classement.js'


function Home() {

  const navigate = useNavigate();

  const play = () => navigate('play')
  return (
    <div className="Home">
      <header className="Home-header">
        <img src='./images/logo.png' className="Home-logo" alt="logo" />
        <h1>Hangman Game</h1>
        <label for="Nickname">Pseudo</label>
        <input type="text" id="name" name="name" required
         minlength="1" maxlength="10" size="30"></input>
        <br/>
        <button type="button" className="btn-home" onClick={play}
        > Play !</button>
        <div>
        <Classement />  
        </div>
      </header>
    </div>
  );
}


export default Home;
