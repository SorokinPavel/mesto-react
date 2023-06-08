import React from "react";
import PopupWithForm from "../components/PopupWithForm.js";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]); 

  function handleSetName(evt) {
    setName(evt.target.value);
  }

  function handleSetDescription(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  
    props.onUpdateUser({
      name,
      about: description,
    });
  } 

    return (
      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        button="Сохранить"
        isOpen={props.isOpen}
        onClose={props.onClose}
        onSubmit={handleSubmit}
      >
        <input 
          name="login" 
          placeholder="Имя" 
          className="popup__input popup__input_change_username" 
          id="title-input"
          minLength="2" 
          maxLength="40" 
          required
          value={name}
          onChange={handleSetName}
        />
        <span className="popup__error title-input-error"></span>
        <input 
          name="description" 
          placeholder="О себе" 
          className="popup__input popup__input_change_description" 
          id="description-input"
          minLength="2" 
          maxLength="200" 
          required
          value={description}
          onChange={handleSetDescription}
        />
        <span className="popup__error description-input-error" ></span>
      </PopupWithForm>
    );
  }
  
export default EditProfilePopup;