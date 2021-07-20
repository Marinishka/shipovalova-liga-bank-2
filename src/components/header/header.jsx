import React, {useRef} from 'react';
import login from './../../assets/img/icons/icon-login.svg';
import {ScreenWidth} from './../../const.js';

const Header = () => {
  const headerNav = useRef(null);
  const toggle = useRef(null);

  const onToggleClick = () => {
    headerNav.current.classList.toggle(`header-nav-list--visible`);
    toggle.current.classList.toggle(`header-toggle--open`);
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
      <div className="header__user header-user">
        <a className="header-user__link" href="/">
          <img className="header-user__icon" width="14" height="16" src={login} alt="Войти в Интернет-банк"></img>
          <span className="header-user__label">Войти в Интернет-банк</span>
        </a>
      </div>
      <nav ref={headerNav} className="header__nav header-nav">
        <ul className="header-nav__list header-nav-list">
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
      </nav>
      <button ref={toggle} className="header__toggle" onClick={onToggleClick}>
        <div></div>
      </button>
    </div>
  </header>;
};

export default Header;
