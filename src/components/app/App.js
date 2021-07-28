import React from 'react';
import {BrowserRouter as Router, BrowserRouter} from "react-router-dom";
import Main from '../main/main';
import browserHistory from './../../browser-history';

function App() {
  return (
    <BrowserRouter history={browserHistory}>
      <Router>
        <Main></Main>
      </Router>
    </BrowserRouter>
  );
}

export default App;
