import React from 'react';
import './App.css';
import Navbar from "./components/compounds/Navbar";
import {Switch, Route} from 'react-router-dom';
import HomePage from "./pages/Homepage";


function App() {
  return (
    <div className="App ">

        <Switch>
            <Route path={'/'} component={HomePage}/>

        </Switch>

    </div>
  );
}

export default App;
