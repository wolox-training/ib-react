import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Game from './screens/Game';
import LogIn from './screens/LogIn';
import Matches from './screens/Game/components/Matches';

import '../scss/application.scss';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={LogIn}/>
      <Route exact path="/game" component={Game}/>
      <Route exact path="/matches" component={Matches}/>
    </div>
  </Router>
);

export default App;
