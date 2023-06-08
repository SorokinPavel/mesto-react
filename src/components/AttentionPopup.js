import React from "react";
import PopupWithForm from "../components/PopupWithForm.js";

function AttentionPopup(props) {
    function handleSubmit(evt) {
        evt.preventDefault();
        props.onCardDelete(props.card.cardId);
    }

    return (
      <PopupWithForm
        name="attention"
        title="Вы уверены?"
        button="Да"
        isOpen={props.isOpen}
        onClose={props.onClose}
        onSubmit={handleSubmit}
        isLoading={props.isLoading}
        loadingText="Удаление..."
      >
      </PopupWithForm>
    );
  }
  
export default AttentionPopup;