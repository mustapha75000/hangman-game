import React from 'react'
import '../Play.css';

export default function Play() {
    return (
        <div className="Play">
        <header className="Play-header">
        <img src='./images/logo.png' className="Play-logo" alt="logo" />
            <div className='titre'>
            <h1>Hangman Game</h1>
            </div>
            <div>
            <label for="name">Trouvez le mot sans mourir ! Vous Avez X vie encore</label>
            <br/>
            <input type="text" id="name" name="name" required
                minlength="4" maxlength="8" size="50"></input>
            </div>
        </header>
      </div>
    )
}
