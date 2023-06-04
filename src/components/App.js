import React from "react";
import Header from "../components/Header.js";
import Main from "../components/Main.js";
import Footer from "../components/Footer.js";
import PopupWithForm from "../components/PopupWithForm.js";
import ImagePopup from "../components/ImagePopup.js";
import EditProfilePopup from "../components/EditProfilePopup.js";
import AddPlacePopup from "../components/AddPlacePopup.js";
import EditAvatarPopup from "../components/EditAvatarPopup.js";
import api from "../utils/Api.js";


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState({});

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((initialCards) => {
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }
  return (
    <div className="webpage">    
      <Header />
      <Main 
        cards={cards}
        onCardClick= {handleCardClick}
        onEditProfile = {setIsEditProfilePopupOpen}
        onAddPlace = {setIsAddPlacePopupOpen}
        onEditAvatar = {setIsEditAvatarPopupOpen}
      />
      <Footer />
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />
      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      />
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />
      <ImagePopup 
        card={selectedCard}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        name="attention"
        title="Вы уверены?"
        button="Да"
      ></PopupWithForm>
    </div>
  );
}

export default App;
