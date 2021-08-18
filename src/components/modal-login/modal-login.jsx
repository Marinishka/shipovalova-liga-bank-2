import React, {useEffect, useRef, useState} from 'react';
import {KeyCodes, ImgLogoModal} from '../../const';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {enterLogin, enterPassword} from '../../store/action';

const ModalLogin = ({isModalOpen, setIsModalOpen}) => {

  const login = useSelector((state) => state.LOCAL.login);
  const password = useSelector((state) => state.LOCAL.password);

  const [loginInput, setLoginInput] = useState(login);
  const [passwordInput, setPasswordInput] = useState(password);

  const passwordEl = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    document.addEventListener(`keydown`, onEscClick);
    return () => {
      document.removeEventListener(`keydown`, onEscClick);
    };
  }, []);

  const changeLogin = (evt) => {
    setLoginInput(evt.target.value);
  };

  const changePassword = (evt) => {
    setPasswordInput(evt.target.value);

  };

  const onEscClick = (evt) => {
    if (evt.keyCode === KeyCodes.ESC) {
      setIsModalOpen(!isModalOpen);
    }
  };

  const onBtnCloseClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onHidePasswordClick = () => {
    if (passwordEl.current.type === `password`) {
      passwordEl.current.type = `text`;
    } else {
      passwordEl.current.type = `password`;
    }
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    if (loginInput.length > 0 && passwordInput.length > 0) {
      dispatch(enterLogin(loginInput));
      dispatch(enterPassword(passwordInput));
      setIsModalOpen(!isModalOpen);
    }
  };

  const onOverlayClick = (evt) => {
    if (evt.target.classList.contains(`modal-login`)) {
      setIsModalOpen(!isModalOpen);
    }
  };

  return <div className="modal-login" onClick={onOverlayClick}>
    <form className="modal-login__wrapper" onSubmit={onSubmit}>
      <img className="modal-login__logo" width={ImgLogoModal.WIDTH} height={ImgLogoModal.HEIGHT} src="./img/logo-modal.png" alt={ImgLogoModal.ALT}></img>
      <button className="modal-login__btn-close" type="button" aria-label="Закрыть окно авторизации" onClick={onBtnCloseClick}></button>
      <label className="modal-login__label" htmlFor="name">Логин</label>
      <input className="modal-login__input modal-login__input--name"
        type="text"
        id="name"
        autoFocus
        onInput={changeLogin}
        required></input>
      <label className="modal-login__label" htmlFor="password">Пароль</label>
      <div className="modal-login__group">
        <input className="modal-login__input modal-login__input--password"
          ref={passwordEl}
          type="password"
          id="password"
          onInput={changePassword}
          required></input>
        <button className="modal-login__hide-password" type="button" aria-label="Скрыть пароль?" onClick={onHidePasswordClick}></button>
      </div>
      <button className="modal-login__sumbit" type="submit">Войти</button>
      <a className="modal-login__forgot-password" href="#">Забыли пароль?</a>
    </form>
  </div>;
};

ModalLogin.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired
};

export default ModalLogin;
