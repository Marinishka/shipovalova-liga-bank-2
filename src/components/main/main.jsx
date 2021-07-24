import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import Slider from '../slider/slider';
import Tabs from '../tabs/tabs';

const Main = () => {
  return (<>
    <Header/>
    <main className="main">
      <Slider/>
      <Tabs/>
    </main>
    <Footer/>
  </>
  );
};
export default Main;
