import { BrowserRouter as Router, Routes , Route, Link } from 'react-router-dom';
import './App.css';
import './Button.css';
import './index.js';
import Home from './component/Home.js'
import Play from './component/Play.js'

const App = () => (
    <div className="App">
          <Router>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Play" element={<Play />} />
          </Router>
    </div>
  )

export default App;
