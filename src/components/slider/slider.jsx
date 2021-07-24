import React, {useEffect, useState} from 'react';
import {KeyCodes} from '../../const';

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const getNextSlide = () => {
    setActiveSlide((current) => {
      const res = current === slideLength - 1 ? 0 : current + 1;
      return res;
    });
  };

  let intervalFunc;

  let slideLength = 3;
  useEffect(() => {
    intervalFunc = setInterval(getNextSlide, 4000);
    return () => clearInterval(intervalFunc);
  }, []);

  const onDotsClick = (evt) => {
    if (evt.target.dataset.dotIndex) {
      setActiveSlide(Number(evt.target.dataset.dotIndex));
    }
  };

  const onEnterPress = (evt) => {
    if (evt.keyCode === KeyCodes.ENTER) {
      setActiveSlide(evt.target.dataset.tab);
    }
  };

  return <div className="slider">
    <ul className="slider__list">
      <li className={`slider__item slider__item--credits ${activeSlide === 0 ? `slider__item--active` : ``}`}>
        <div className="slider__wrapper">
          <h2 className="slider__title">Лига банк</h2>
          <p className="slider__text">Кредиты на любой случай</p>
          <a className="slider__link" href="/">Рассчитать кредит</a>
          <img className="slider__card slider__card--white" width="335" height="228" src="./img/white_card.png" alt="Белая карта банка"></img>
          <img className="slider__card slider__card--black" width="335" height="228" src="./img/black_card.png" alt="Черная карта банка"></img>
        </div>
      </li>
      <li className={`slider__item slider__item--confidence ${activeSlide === 1 ? `slider__item--active` : ``}`}>
        <div className="slider__wrapper">
          <h2 className="slider__title">Лига банк</h2>
          <p className="slider__text">Ваша уверенность в завтрашнем дне</p>
        </div>
      </li>
      <li className={`slider__item slider__item--near ${activeSlide === 2 ? `slider__item--active` : ``}`}>
        <div className="slider__wrapper">
          <h2 className="slider__title">Лига банк</h2>
          <p className="slider__text">Всегда рядом</p>
          <a className="slider__link" href="/">Найти отделение</a>
        </div>
      </li>
    </ul>
    <div className="slider__dots" onClick={onDotsClick} onKeyDown={(evt) => onEnterPress(evt)}>
      <button className={`slider__dot ${activeSlide === 0 ? `slider__dot--active` : ``}`} data-dot-index="0" type="button"></button>
      <button className={`slider__dot ${activeSlide === 1 ? `slider__dot--active` : ``}`} data-dot-index="1" type="button"></button>
      <button className={`slider__dot ${activeSlide === 2 ? `slider__dot--active-dark` : ``}`} data-dot-index="2" type="button"></button>
    </div>
  </div>;
};

export default Slider;
