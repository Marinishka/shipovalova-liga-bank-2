import React, {useState} from 'react';
import Calculator from '../calculator/calculator';
import Footer from '../footer/footer';
import Header from '../header/header';
import MapElement from '../map/map';
import ModalLogin from '../modal-login/modal-login';
import Slider from '../slider/slider';
import Tabs from '../tabs/tabs';

const Main = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (<>
    <Header isModalOpened={isModalOpened} setIsModalOpened={setIsModalOpened}/>
    <main className="main">
      <Slider/>
      <Tabs/>
      <Calculator/>
      <MapElement/>
    </main>
    <Footer/>
    {isModalOpened ? <ModalLogin isModalOpened={isModalOpened} setIsModalOpened={setIsModalOpened}/> : ``}
  </>
  );
};
export default Main;
