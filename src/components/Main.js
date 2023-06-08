import Card from "../components/Card.js";
import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

function Main (props) {

  const currentUser = React.useContext(CurrentUserContext);
    return (
      <main>
        <section className="profile">
          <img className="profile__avatar"
            src={currentUser.avatar}
            alt="Фото профиля"
          />
          <button type="button" className="profile__avatar-edit" onClick={props.onEditAvatar} ></button>
          <div className="profile__info-container">
            <div className="profile__info">
              <h1 className="profile__username">{currentUser.name}</h1>
              <button type="button" className="opacity profile__edit-button" onClick={props.onEditProfile}></button>
              <p className="profile__description">{currentUser.about}</p>
            </div>
            <button type="button" className="opacity profile__add-button" onClick={props.onAddPlace}></button>
          </div>
        </section>
        <section className ="elements">
        {props.cards.map((card) => (
          <Card
            name={card.name}
            link={card.link}
            likes={card.likes}
            key={card._id}
            cardId={card._id}
            ownerId={card.owner._id}
            onCardClick={props.onCardClick}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}
            onDeleteCardClick={props.onDeleteCardClick}
          />
        ))}
        </section>
      </main>
    );
  }
  
  export default Main;