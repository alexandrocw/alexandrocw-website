import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Home from "../public/pages/Homepage/home.js"

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
    </div>
  );
}

export default App;
