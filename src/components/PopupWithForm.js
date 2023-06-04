function PopupWithForm (props) {
  return (
    <div className={`popup ${props.name}-popup ${props.isOpen ? "popup_opened" : ""}`}>
      <div className={`popup__container popup__${props.name}-container`}>
      <button type="button" className="opacity popup__closebtn" onClick={props.onClose}></button>
      <h2 className="popup__title">{props.title}</h2>
      <form name={`popup-${props.name}`} method="post" action="." className="popup__form" noValidate>
        <fieldset className="popup__set">
          {props.children}
        </fieldset>
        <button type="submit" className="popup__button">{props.button}</button>
      </form>
      </div>
    </div>
  );
}

export default PopupWithForm;