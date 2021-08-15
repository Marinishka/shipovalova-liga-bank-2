import React, {useEffect, useState} from 'react';
import {ImgsSlider, KeyCodes} from '../../const';
import {HashLink} from 'react-router-hash-link';

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
          <HashLink className="slider__link" to="/calculator#calculator">Рассчитать кредит</HashLink>
          <img className="slider__card slider__card--white" width={ImgsSlider.WHITE_CARD.WIDTH} height={ImgsSlider.WHITE_CARD.HEIGHT} src="./img/white_card.png" alt={ImgsSlider.WHITE_CARD.ALT}></img>
          <img className="slider__card slider__card--black" width={ImgsSlider.BLACK_CARD.WIDTH} height={ImgsSlider.BLACK_CARD.HEIGHT} src="./img/black_card.png" alt={ImgsSlider.BLACK_CARD.ALT}></img>
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
          <HashLink className="slider__link" to="/calculator#map">Найти отделение</HashLink>
        </div>
      </li>
    </ul>
    <div className="slider__dots" onClick={onDotsClick} onKeyDown={(evt) => onEnterPress(evt)}>
      <button className={`slider__dot ${activeSlide === 0 ? `slider__dot--active` : ``}`} data-dot-index="0" type="button" aria-label="Первый слайд"></button>
      <button className={`slider__dot ${activeSlide === 1 ? `slider__dot--active` : ``}`} data-dot-index="1" type="button" aria-label="Второй слайд"></button>
      <button className={`slider__dot ${activeSlide === 2 ? `slider__dot--active-dark` : ``}`} data-dot-index="2" type="button" aria-label="Третий слайд"></button>
    </div>
  </div>;
};

export default Slider;
