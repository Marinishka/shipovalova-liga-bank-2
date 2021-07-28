import React from 'react';
import Calculator from '../calculator/calculator';
import Footer from '../footer/footer';
import Header from '../header/header';
import MapElement from '../map/map';
import Slider from '../slider/slider';
import Tabs from '../tabs/tabs';

const Main = () => {
  return (<>
    <Header/>
    <main className="main">
      <Slider/>
      <Tabs/>
      <Calculator/>
      <MapElement/>
    </main>
    <Footer/>
  </>
  );
};
export default Main;
