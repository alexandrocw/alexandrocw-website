import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path="/" render={() => {window.location.href="/pages/Homepage/index.html"}} />
    </div>
  );
}

export default App;
