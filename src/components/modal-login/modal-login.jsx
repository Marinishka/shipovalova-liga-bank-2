import React, {useEffect, useRef, useState} from 'react';
import {KeyCodes} from '../../const';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {enterLogin, enterPassword} from '../../store/action';

const ModalLogin = ({isModalOpened, setIsModalOpened}) => {

  const login = useSelector((state) => state.LOCAL.login);
  const password = useSelector((state) => state.LOCAL.password);

  const [loginInput, setLoginInput] = useState(login);
  const [passwordInput, setPasswordInput] = useState(password);

  const passwordEl = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    document.addEventListener(`keydown`, onEscClick);
    document.firstElementChild.classList.add(`no-scroll`);
    return () => {
      document.removeEventListener(`keydown`, onEscClick);
      window.onscroll = true;
      document.firstElementChild.classList.remove(`no-scroll`);
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
      setIsModalOpened(!isModalOpened);
    }
  };

  const onBtnCloseClick = () => {
    setIsModalOpened(!isModalOpened);
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
    if (password.length > 0 && login.length > 0) {
      dispatch(enterLogin(login));
      dispatch(enterPassword(password));
    }
  };

  const onOverlayClick = (evt) => {
    if (evt.target.classList.contains(`modal-login`)) {
      setIsModalOpened(!isModalOpened);
    }
  };

  return <div className="modal-login" onClick={onOverlayClick}>
    <form className="modal-login__wrapper" onSubmit={onSubmit}>
      <img className="modal-login__logo" width="151" height="31" src="./img/logo-modal.png" aria-label="Логотип Лига Банк"></img>
      <button className="modal-login__btn-close" type="button" aria-label="Закрыть окно авторизации" onClick={onBtnCloseClick}></button>
      <label className="modal-login__label" htmlFor="name">Логин</label>
      <input className="modal-login__input modal-login__input--name"
        type="text"
        id="name"
        autoFocus
        value={loginInput}
        onInput={changeLogin}
        required></input>
      <label className="modal-login__label" htmlFor="password">Пароль</label>
      <div className="modal-login__group">
        <input className="modal-login__input modal-login__input--password"
          ref={passwordEl}
          type="password"
          id="password"
          value={passwordInput}
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
  isModalOpened: PropTypes.bool.isRequired,
  setIsModalOpened: PropTypes.func.isRequired
};

export default ModalLogin;
