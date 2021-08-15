import React from 'react';
import ConverterForm from '../converter-form/converter-form';
import ConverterHistory from '../converter-history/converter-history';
import Slider from '../slider/slider';

const Converter = () => {
  return <>
    <Slider/>
    <div className="converter container">
      <h2 className="converter__title">Конвертер валют</h2>
      <ConverterForm/>
      <ConverterHistory/>
    </div>
  </>;
};

export default Converter;
