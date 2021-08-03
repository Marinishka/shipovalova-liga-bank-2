import React from 'react';
import {Router as BrowserRouter} from "react-router-dom";
import Main from '../main/main';
import browserHistory from './../../browser-history';

function App() {
  return (
    <BrowserRouter history={browserHistory}>
      <Main></Main>
    </BrowserRouter>
  );
}

export default App;
