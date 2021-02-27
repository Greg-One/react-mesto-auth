function Login(props) {
  return (
    <section className="authorisation">
      <h2 className="authorisation__title">Вход</h2>
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
        <button className="authorisation__submit-button">Войти</button>
      </form>
    </section>
  );
}

export default Login;
