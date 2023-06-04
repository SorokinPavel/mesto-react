import PopupWithForm from "../components/PopupWithForm.js";

function EditProfilePopup(props) {
    return (
      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        button="Сохранить"
        isOpen={props.isOpen}
        onClose={props.onClose}
      >
        <input name="login" placeholder="Имя" className="popup__input popup__input_change_username" id="title-input"
          minLength="2" maxLength="40" required/>
        <span className="popup__error title-input-error"></span>
        <input name="description" placeholder="О себе" className="popup__input popup__input_change_description" id="description-input"
          minLength="2" maxLength="200" required/>
        <span className="popup__error description-input-error" ></span>
      </PopupWithForm>
    );
  }
  
export default EditProfilePopup;