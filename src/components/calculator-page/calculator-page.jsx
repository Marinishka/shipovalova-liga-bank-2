import React from 'react';
import PropTypes from 'prop-types';
import Calculator from '../calculator/calculator';
import MapElement from '../map/map';
import Slider from '../slider/slider';
import Tabs from '../tabs/tabs';

const CalculatorPage = ({setIsPopupOpen}) => {
  return (<>
    <h1 className="visually-hidden">Интернет банк - Лига Банк: Калькулятор</h1>
    <Slider/>
    <Tabs/>
    <Calculator setIsPopupOpen={setIsPopupOpen}/>
    <MapElement/>
  </>
  );
};

CalculatorPage.propTypes = {
  setIsPopupOpen: PropTypes.func.isRequired
};

export default CalculatorPage;
