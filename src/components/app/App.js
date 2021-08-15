import React, {useState} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Routes} from '../../const';
import CalculatorPage from '../calculator-page/calculator-page';
import Footer from '../footer/footer';
import Header from '../header/header';
import ModalLogin from '../modal-login/modal-login';
import PopupThanks from '../popup-thanks/popup-thanks';
import NotFound from '../not-found/not-found';
import Converter from '../converter/converter';
import browserHistory from './../../browser-history';
import Slider from '../slider/slider';
import MapElement from '../map/map';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <BrowserRouter history={browserHistory}>
      <Header isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen}/>
      <main className={`main ${isModalOpen || isNavOpen ? `display--none` : ``}`}>
        <Switch>
          <Route path={Routes.MAIN} exact render={() => {
            return <>
              <Slider/>
              <MapElement/>
            </>;
          }}/>
          <Route path={Routes.CALCULATOR} exact render={() => {
            return <CalculatorPage setIsPopupOpen={setIsPopupOpen}/>;
          }}/>
          <Route path={Routes.CONVERTER} exact render={() => {
            return <Converter/>;
          }}/>
          <Route path={Routes.NOT_FOUND} exact render={() => {
            return <NotFound/>;
          }}/>
          <Route render={() => {
            return <NotFound/>;
          }}/>
        </Switch>
      </main>
      <Footer isModalOpen={isModalOpen} isNavOpen={isNavOpen}/>
      {isModalOpen ? <ModalLogin isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/> : ``}
      {isPopupOpen ? <PopupThanks isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen}/> : ``}
    </BrowserRouter>
  );
}

export default App;
