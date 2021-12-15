import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import '../Home.css';
import '../Button.css';
import Button from './Button.js';
import Play from './Play.js';

function Home() {
  let useNavigate = useNavigate();

  return (
    <div className="Home">
      <header className="Home-header">
        <img src='./images/logo.png' className="Home-logo" alt="logo" />
        <h1>Hangman Game</h1>
        <button className="btn-home" onClick={() => {
          Navigate("/Play");
        }}
        > Play !</button>
        <section>
        <p>SCORE DES JOUEURS :</p>
        </section>
      </header>
    </div>
  );
}

function onClick() {

}

export default Home;
