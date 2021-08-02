import React, {useRef} from 'react';
import login from './../../assets/img/icons/icon-login.svg';
import {ScreenWidth} from './../../const.js';
import PropTypes from 'prop-types';

const Header = ({isModalOpened, setIsModalOpened}) => {
  const headerNavList = useRef(null);
  const headerNav = useRef(null);
  const close = useRef(null);

  const onOpenClick = () => {
    headerNavList.current.classList.add(`header-nav-list--visible`);
    headerNav.current.classList.add(`header-nav--open`);
    close.current.classList.add(`header__close--visible`);
  };

  const onCloseClick = () => {
    headerNavList.current.classList.remove(`header-nav-list--visible`);
    headerNav.current.classList.remove(`header-nav--open`);
    close.current.classList.remove(`header__close--visible`);
  };

  const onLoginClick = (evt) => {
    evt.preventDefault();
    setIsModalOpened(!isModalOpened);
  };

  return <header className="header">
    <div className="header__container container">
      <div className="header__logo-container">
        <a className="header__link-logo" href="/">
          <picture>
            <source media={`(min-width: ${ScreenWidth.TABLET})`} srcSet="./img/logo-tablet.png"></source>
            <source media={`(min-width: ${ScreenWidth.DESKTOP})`} srcSet="./img/logo-desktop.png"></source>
            <img className="header__logo" width="115" height="17" src="./img/logo-mobile.png" alt="Логотип Лига Банк"></img>
          </picture>
        </a>
      </div>
      <nav className="header__nav header-nav" ref={headerNav}>
        <ul className="header-nav__list header-nav-list" ref={headerNavList}>
          <li className="header-nav-list__item">
            <a className="header-nav-list__link" href="/">Услуги</a>
          </li>
          <li className="header-nav-list__item">
            <a className="header-nav-list__link" href="/">Рассчитать кредит</a>
          </li>
          <li className="header-nav-list__item">
            <a className="header-nav-list__link" href="/">Конвертер валют</a>
          </li>
          <li className="header-nav-list__item">
            <a className="header-nav-list__link" href="/">Контакты</a>
          </li>
        </ul>
        <div className="header__user header-user" onClick={onLoginClick}>
          <a className="header-user__link" href="/">
            <img className="header-user__icon" width="14" height="16" src={login} alt="Войти в Интернет-банк"></img>
            <span className="header-user__label">Войти в Интернет-банк</span>
          </a>
        </div>
      </nav>
      <button className="header__open" onClick={onOpenClick}>
        <div></div>
      </button>
      <button className="header__close" ref={close} onClick={onCloseClick}></button>
    </div>
  </header>;
};

Header.propTypes = {
  isModalOpened: PropTypes.bool.isRequired,
  setIsModalOpened: PropTypes.func.isRequired
};

export default Header;
