import React, {useRef} from 'react';
import login from './../../assets/img/icons/icon-login.svg';

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
          <img className="header__logo" width="149px" height="25px" src="./img/logo.png" alt="Логотип Лига Банк"></img>
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
        <div className="header-nav__user header-nav-user">
          <a className="header-nav-user__link" href="/">
            <img className="header-nav-user__icon" width="20px" height="22px" src={login} alt="Иконка войти"></img>
          Войти в Интернет-банк
          </a>
        </div>
      </nav>
      <button ref={toggle} className="header__toggle" onClick={onToggleClick}>
        <div></div>
      </button>
    </div>
  </header>;
};

export default Header;
