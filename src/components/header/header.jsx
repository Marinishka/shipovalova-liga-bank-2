import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {Link, useLocation} from 'react-router-dom';
import login from './../../assets/img/icons/icon-login.svg';
import {IconLogin, ImgLogo, NavigationItems, Routes, ScreenWidth} from './../../const.js';

const Header = ({isModalOpen, setIsModalOpen, setIsNavOpen}) => {
  const headerNavList = useRef(null);
  const headerNav = useRef(null);
  const close = useRef(null);
  const headerContainer = useRef(null);
  const location = useLocation().pathname;

  const getLogo = () => {
    return location === Routes.MAIN
      ? <picture className="header__link-logo">
        <source media={`(min-width: ${ScreenWidth.TABLET})`} srcSet="./img/logo-tablet.png"></source>
        <source media={`(min-width: ${ScreenWidth.DESKTOP})`} srcSet="./img/logo-desktop.png"></source>
        <img className="header__logo" width={ImgLogo.WIDTH} height={ImgLogo.HEIGHT} src="./img/logo-mobile.png" alt={ImgLogo.ALT}></img>
      </picture>
      : <Link className="header__link-logo" to={Routes.MAIN}>
        <picture>
          <source media={`(min-width: ${ScreenWidth.TABLET})`} srcSet="./img/logo-tablet.png"></source>
          <source media={`(min-width: ${ScreenWidth.DESKTOP})`} srcSet="./img/logo-desktop.png"></source>
          <img className="header__logo" width={ImgLogo.WIDTH} height={ImgLogo.HEIGHT} src="./img/logo-mobile.png" alt={ImgLogo.ALT}></img>
        </picture>
      </Link>;
  };

  const getNavItems = () => {
    return Object.keys(NavigationItems.HEADER).map((item) => {
      return <li className="header-nav-list__item" key={item}>
        <Link className={`header-nav-list__link ${NavigationItems.HEADER[item] === location ? `header-nav-list__link--active` : ``}`} to={NavigationItems.HEADER[item]}>{item}</Link>
      </li>;
    });
  };

  const onOpenClick = () => {
    setIsNavOpen(true);
    headerContainer.current.classList.add(`header__container--open`);
    headerNavList.current.classList.add(`header-nav-list--visible`);
    headerNav.current.classList.add(`header-nav--open`);
    close.current.classList.add(`header__close--visible`);
  };

  const closeNav = () => {
    setIsNavOpen(false);
    headerContainer.current.classList.remove(`header__container--open`);
    headerNavList.current.classList.remove(`header-nav-list--visible`);
    headerNav.current.classList.remove(`header-nav--open`);
    close.current.classList.remove(`header__close--visible`);
  };

  const onCloseClick = () => {
    closeNav();
  };

  const onLoginClick = (evt) => {
    evt.preventDefault();
    setIsModalOpen(!isModalOpen);
    closeNav();
  };

  return <header className={`header ${isModalOpen ? `display--none` : ``}`}>
    <div className="header__container container" ref={headerContainer}>
      <div className="header__logo-container">
        {getLogo()}
      </div>
      <nav className="header__nav header-nav" ref={headerNav}>
        <ul className="header-nav__list header-nav-list" ref={headerNavList}>
          {getNavItems()}
        </ul>
        <div className="header__user header-user" onClick={onLoginClick}>
          <a className="header-user__link" href="/">
            <img className="header-user__icon" width={IconLogin.WIDTH} height={IconLogin.HEIGHT} src={login} alt={IconLogin.ALT}></img>
            <span className="header-user__label">Войти в Интернет-банк</span>
          </a>
        </div>
      </nav>
      <button className="header__open" onClick={onOpenClick} type="button" aria-label="Открыть меню"></button>
      <button className="header__close" ref={close} onClick={onCloseClick} type="button" aria-label="Закрыть меню"></button>
    </div>
  </header>;
};

Header.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
  setIsNavOpen: PropTypes.func.isRequired
};

export default Header;
