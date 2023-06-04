import profilePhoto from '../images/profile-image.jpg';
import Card from "../components/Card.js";
import api from "../utils/Api.js";
import React from "react";

function Main (props) {

  const [userData, setUserData] = React.useState({ name: "", description:"" , avatar:""});

  React.useEffect(() => {
    api
      .getUserInformation()
      .then((userData) => {
        setUserData({ name: userData.name, description: userData.about, avatar: userData.avatar });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

    return (
      <main>
        <section className="profile">
          <img className="profile__avatar"
            src={userData.avatar}
            alt="Фото профиля"
          />
          <button type="button" className="profile__avatar-edit" onClick={props.onEditAvatar} ></button>
          <div className="profile__info-container">
            <div className="profile__info">
              <h1 className="profile__username">{userData.name}</h1>
              <button type="button" className="opacity profile__edit-button" onClick={props.onEditProfile}></button>
              <p className="profile__description">{userData.description}</p>
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
            onCardClick={props.onCardClick}
            onCardDelete={props.onCardDelete}
          />
        ))}
        </section>
      </main>
    );
  }
  
  export default Main;