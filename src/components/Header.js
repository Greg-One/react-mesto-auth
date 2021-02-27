import mestoLogo from '../images/logo.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header(props) {
  return (
    <header className="header">
      <img
        src={mestoLogo}
        alt="Логотип проекта 'Место'"
        className="header__logo"
      />
      <nav className="header__buttons-container">
        <button className="header__button">
          {
            <Link to="signin" className="header__link">
              Войти
            </Link>
          }
        </button>

        <button className="header__button">
          {
            <Link to="signup" className="header__link">
              Регистрация
            </Link>
          }
        </button>
      </nav>
    </header>
  );
}

export default Header;
