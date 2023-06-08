import React from "react";
import PopupWithForm from "../components/PopupWithForm.js";

function AddPlacePopup(props, isOpen) {
  const [title, setTitle] = React.useState("");
  const [link, setLink] = React.useState("");

  React.useEffect(() => {
    setTitle("");
    setLink("");
  }, [isOpen]);

  function handleSetTitle(evt) {
    setTitle(evt.target.value);
  }

  function handleSetLink(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onAddPlace({
      name: title,
      link: link,
    });
  }

    return (
      <PopupWithForm
        name="addCard"
        title="Новое место"
        button="Создать"
        isOpen={props.isOpen}
        onClose={props.onClose}
        onSubmit={handleSubmit}
      >
        <input name="title" className="popup__input popup__input_change_post-title" id="post-input"
          placeholder="Название" minLength="2" maxLength="30" value={title}
          onChange={handleSetTitle} required/>
        <span className="popup__error post-input-error" ></span>
        <input name="link" className="popup__input popup__input_change_image-link" id="link-input"
          placeholder="Ссылка на картинку" type="url" value={link}
          onChange={handleSetLink} required/>
        <span className="popup__error link-input-error" ></span>
      </PopupWithForm>
    );
  }
  
export default AddPlacePopup;