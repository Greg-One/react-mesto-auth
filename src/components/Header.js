import mestoLogo from '../images/logo.svg';

function Header() {
  return (
    <header className="header">
      <img
        src={mestoLogo}
        alt="Логотип проекта 'Место'"
        className="header__logo"
      />
    </header>
  );
}

export default Header;
