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
            <Link to="#" className="header__link">
              {props.email}
            </Link>
            <button
              type="button"
              className="header__button"
              onClick={props.onSignOut}
            >
              Выйти
            </button>
          </>
        )}

        {location.pathname === '/signup' && (
          <Link to="signin" className="header__link">
            Войти
          </Link>
        )}

        {location.pathname === '/signin' && (
          <Link to="signup" className="header__link">
            Регистрация
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
