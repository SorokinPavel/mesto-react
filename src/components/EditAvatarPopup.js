import PopupWithForm from "../components/PopupWithForm.js";

function EditAvatarPopup(props) {
    return (
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        button="Сохранить"
        isOpen={props.isOpen}
        onClose={props.onClose}
      >
        <input name="link" className="popup__input popup__input_change_image-link" id="avatar-input"
          placeholder="Ссылка на картинку" type="url" required/>
      </PopupWithForm>
    );
  }
  
export default EditAvatarPopup;