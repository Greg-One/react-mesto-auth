import mestoLogo from '../images/logo.svg';
import { Link, useLocation } from 'react-router-dom';

function Header(props) {
  const location = useLocation();

  return (
    <header className="header">
      <img
        src={mestoLogo}
        alt="Логотип проекта 'Место'"
        className="header__logo"
      />
      <nav className="header__buttons-container">
        {location.pathname === '/' && (
          <>
            <span>{props.email}</span>
            <button className="header__button" onClick={props.onSignOut}>
              Выйти
            </button>
          </>
        )}

        {location.pathname === '/signup' && (
          <Link to="signin">
            <button className="header__button">Войти</button>
          </Link>
        )}

        {location.pathname === '/signin' && (
          <Link to="signup">
            <button className="header__button">Регистрация</button>
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
