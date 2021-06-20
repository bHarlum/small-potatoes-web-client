import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { RecoilRoot } from 'recoil';
import Header from './components/header/header';
import HomePage from './pages/home';
import NewRoom from './pages/new-room';
import RoomPage from './pages/room';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Router>
          <Header title="Small Potatoes" subTitle="Small potatoes, make small fries" />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/new-room" component={NewRoom} />
            <Route exact path="/room/:id" component={RoomPage} /> 
          </Switch>
        </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;
