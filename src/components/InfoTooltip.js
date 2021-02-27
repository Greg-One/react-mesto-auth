import confirm from '../images/confirm_icon.png';
import deny from '../images/deny_icon.png';

function InfoTooltip(props) {
  return (
    <section
      className={`popup popup_register ${props.isOpen && 'popup_opened'}`}
    >
      <div className="popup__container">
        <img
          className="popup__image"
          alt="Иконка события"
          src={props.registered ? confirm : deny}
        />
        <button
          type="button"
          aria-label="Закрыть"
          className="popup__close-button"
          onClick={props.onClose}
        ></button>
        <h2 className="popup__title popup__title_register">
          {props.registered
            ? 'Вы успешно зарегистрировались'
            : 'Что-то пошло не так! Попробуйте ещё раз.'}
        </h2>
      </div>
    </section>
  );
}

export default InfoTooltip;
