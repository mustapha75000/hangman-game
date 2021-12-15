import React from 'react'
import '../Play.css';
import CallApi from './CallApi.js'
import Keyboard from './keyboard/Keybord';


export default function Play() {
    return (
        <div className="Play">
        <header className="Play-header">
        <img src='./images/logo.png' className="Play-logo" alt="logo" />
            <div className='titre'>
            <h1>Hangman Game</h1>
            </div>
            <div>
            <label for="name">Trouvez le nom de l'animal sans perdre de coeurs ! Vous encore X coeurs</label>
            <br/>
            <div>
            <CallApi />
            <Keyboard />
            </div>
            </div>
        </header>
      </div>
    )
}
