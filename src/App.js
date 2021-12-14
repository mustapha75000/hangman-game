import logo from './logo.png';
import './App.css';
import './Button.css';
import Button from './Button.js';
import Play from './Play.js';

function App() {

  const handleClick = () => {
    console.log(handleClick);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hangman Game</h1>
        <Button value={"Jouer"} onClick={handleClick} />
        <section>
        <p>SCORE DES JOUEURS :</p>
        </section>
      </header>
      
    </div>
  );
}

function click() {
  console.log("test");
}

export default App;
