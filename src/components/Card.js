function Card (card) {

    function handleClick() {
       card.onCardClick(card);   
    } 

    return (
      <article className="element">
        <button type="button" className="opacity element__trash"></button>
        <img className="element__mask-group" alt={card.name} src={card.link} onClick={handleClick}/>
        <div className="element__title-container">
          <h2 className="element__title">{card.name}</h2>
          <div className="element__like-area">
            <button type="button" className="element__group"></button>
            <h3 className="element__count">{card.likes.length}</h3>
          </div>
        </div>
      </article>
    );
}
    
export default Card;