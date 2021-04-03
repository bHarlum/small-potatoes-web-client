import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Router>
        <Switch>
          <Route render={() => <div/>} path="/"/>
          <Route render={() => <div/>} path="/room"/>
          <Route render={() => <div/>} path="/new-room"/>
          <Route render={() => <div/>} path="/:id"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
