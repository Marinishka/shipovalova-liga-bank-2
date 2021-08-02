import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {KeyCodes} from '../../const';

const PopupThanks = ({isPopupOpen, setIsPopupOpen}) => {

  useEffect(() => {
    document.firstElementChild.classList.add(`no-scroll`);
    document.addEventListener(`keydown`, onEscClick);
    return () => {
      document.firstElementChild.classList.remove(`no-scroll`);
      document.removeEventListener(`keydown`, onEscClick);
    };
  }, []);

  const onEscClick = (evt) => {
    if (evt.keyCode === KeyCodes.ESC) {
      setIsPopupOpen(!isPopupOpen);
    }
  };

  const onBtnCloseClick = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const onOverlayClick = (evt) => {
    if (evt.target.classList.contains(`popup-thanks`)) {
      setIsPopupOpen(!isPopupOpen);
    }
  };

  return <div className="popup-thanks" onClick={onOverlayClick}>
    <section className="popup-thanks__wrapper">
      <button className="popup-thanks__btn" type="button" aria-label="Закрыть окно" onClick={onBtnCloseClick}></button>
      <h3 className="popup-thanks__title">Спасибо за обращение в наш банк.</h3>
      <p className="popup-thanks__text">Наш менеджер скоро свяжется с вами по указанному номеру телефона</p>
    </section>
  </div>;
};

PopupThanks.propTypes = {
  isPopupOpen: PropTypes.bool.isRequired,
  setIsPopupOpen: PropTypes.func.isRequired
};

export default PopupThanks;
