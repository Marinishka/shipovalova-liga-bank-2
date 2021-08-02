import React, {useState} from 'react';
import Calculator from '../calculator/calculator';
import Footer from '../footer/footer';
import Header from '../header/header';
import MapElement from '../map/map';
import ModalLogin from '../modal-login/modal-login';
import PopupThanks from '../popup-thanks/popup-thanks';
import Slider from '../slider/slider';
import Tabs from '../tabs/tabs';

const Main = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (<>
    <Header isModalOpened={isModalOpened} setIsModalOpened={setIsModalOpened}/>
    <main className="main">
      <h1 className="visually-hidden">Интернет банк - Лига Банк</h1>
      <Slider/>
      <Tabs/>
      <Calculator setIsPopupOpen={setIsPopupOpen}/>
      <MapElement/>
    </main>
    <Footer/>
    {isModalOpened ? <ModalLogin isModalOpened={isModalOpened} setIsModalOpened={setIsModalOpened}/> : ``}
    {isPopupOpen ? <PopupThanks isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen}/> : ``}
  </>
  );
};
export default Main;
