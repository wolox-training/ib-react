import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Game from './screens/Game';
import LogIn from './screens/LogIn';
import Matches from './screens/Game/components/Matches';

import '../scss/application.scss';

const App = () => (
  <Router>
    <Fragment>
      <Route exact path="/" component={LogIn} />
      <Route exact path="/game" component={Game} />
      <Route exact path="/matches" component={Matches} />
    </Fragment>
  </Router>
);

export default App;
