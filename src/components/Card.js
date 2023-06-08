import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

function Card (card) {

    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = card.ownerId === currentUser._id;
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName = ( 
      `element__group ${isLiked && 'element__group_active'}` 
    );

    function handleClick() {
       card.onCardClick(card);   
    } 

    function handleLikeClick() {
      card.onCardLike(card.cardId, card.likes);
    }

    function handleDeleteClick() {
      card.onDeleteCardClick(card);
    }

    return (
      <article className="element">
        {isOwn && (
          <button 
            type="button" 
            className="opacity element__trash"
            onClick={handleDeleteClick}
          >
          </button>)}
        <img className="element__mask-group" alt={card.name} src={card.link} onClick={handleClick}/>
        <div className="element__title-container">
          <h2 className="element__title">{card.name}</h2>
          <div className="element__like-area">
            <button 
              type="button" 
              className={cardLikeButtonClassName} 
              onClick={handleLikeClick}>
            </button>
            <h3 className="element__count">{card.likes.length}</h3>
          </div>
        </div>
      </article>
    );
}
    
export default Card;