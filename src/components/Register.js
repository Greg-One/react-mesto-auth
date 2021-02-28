import { Link } from 'react-router-dom';
import Header from './Header.js';

function Register(props) {
  return (
    <>
      <Header />
      <section className="authorisation">
        <h2 className="authorisation__title">Регистрация</h2>
        <form className="authorisation__container" name="login">
          <fieldset name="authorisation" className="authorisation__info">
            <input
              type="email"
              placeholder="Email"
              name="email"
              required=""
              minLength="2"
              maxLength="40"
              className="authorisation__input authorisation__input_type_email"
              id="email-input"
            />
            <span
              className="authorisation__input-error"
              id="email-input-error"
            ></span>
            <input
              type="text"
              placeholder="Пароль"
              name="password"
              required=""
              minLength="2"
              maxLength="30"
              className="authorisation__input authorisation__input_type_password"
              id="password-input"
            />
            <span
              className="authorisation__input-error"
              id="password-input-error"
            ></span>
          </fieldset>
          <button className="authorisation__submit-button">
            Зарегистрироваться
          </button>
          <p className="authorisation__caption">
            Уже зарегистрированы?{' '}
            {
              <Link to="signin" className="authorisation__caption-link">
                Войти
              </Link>
            }
          </p>
        </form>
      </section>
    </>
  );
}

export default Register;
