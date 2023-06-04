import PopupWithForm from "../components/PopupWithForm.js";

function AddPlacePopup(props) {
    return (
      <PopupWithForm
        name="addCard"
        title="Новое место"
        button="Создать"
        isOpen={props.isOpen}
        onClose={props.onClose}
      >
        <input name="title" className="popup__input popup__input_change_post-title" id="post-input"
          placeholder="Название" minLength="2" maxLength="30" required/>
        <span className="popup__error post-input-error" ></span>
        <input name="link" className="popup__input popup__input_change_image-link" id="link-input"
          placeholder="Ссылка на картинку" type="url" required/>
        <span className="popup__error link-input-error" ></span>
      </PopupWithForm>
    );
  }
  
export default AddPlacePopup;