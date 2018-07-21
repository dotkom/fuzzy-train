import 'assets/scss/App.scss';
import * as React from 'react';

import { createBrowserHistory, createHashHistory, History } from 'history';

import { Router } from 'react-router-dom';
import { Incorporations, Students } from './views/info';
import Intro from './views/Intro';

let history: History;

switch (process.env.RUN_ENV) {
  case 'BROWSER':
    history = createHashHistory();
    break;
  default:
    history = createBrowserHistory();
}

class App extends React.Component {
  public render() {
    return (
      <Router history={history}>
        <div>
          <Intro />
          <Incorporations />
          <Students />
        </div>
      </Router>
    );
  }
}

export default App;
