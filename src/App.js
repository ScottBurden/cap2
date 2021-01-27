import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import LoginForm from "./LoginForm";

import './App.css';

import NavBar from "./NavBar";
import Routes from "./Routes";


function App() {
  const [ login, setLogin ] = useState(false)

  return (
    <div className="App container">
      {login === true ?
      <BrowserRouter>
        <NavBar />
        <Routes />
      </BrowserRouter>
      : <LoginForm login={login} setLogin={setLogin} />}
    </div>
  );
}


export default App;
