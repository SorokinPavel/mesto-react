import React, {useRef} from "react";
import PopupWithForm from "../components/PopupWithForm.js";

function EditAvatarPopup(props) {
    const ref = useRef();

    function handleSubmit(evt) {
      evt.preventDefault();
  
      props.onUpdateAvatar({
        avatar: ref.current.value,
      });
    }

    return (
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        button="Сохранить"
        isOpen={props.isOpen}
        onClose={props.onClose}
        onSubmit={handleSubmit}
      >
        <input ref={ref} name="link" className="popup__input popup__input_change_image-link" id="avatar-input"
          placeholder="Ссылка на картинку" type="url" required/>
      </PopupWithForm>
    );
  }
  
export default EditAvatarPopup;