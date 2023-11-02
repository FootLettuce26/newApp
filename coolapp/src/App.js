import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Login from './Pages/Login';


export default function App() {
  return (
    <Router>
      <div>
        <Link to="/Login"> 
          <button>Login</button>
        </Link>

        
        <Routes>
          <Route path="/Login" component={Login} />
        </Routes>
        
      </div>
    </Router>
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code> This is the correct file!</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <div>
        
      </div>
    </div>*/
  );
}

