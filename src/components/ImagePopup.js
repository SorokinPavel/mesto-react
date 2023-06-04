function ImagePopup(props) {
    return (
      <div className={`popup image-popup ${props.card.name ? "popup_opened" : ""}`}>
        <figure className="image-popup__container">
          <button type="button" className="opacity popup__closebtn" onClick={props.onClose}></button>
          <img className="image-popup__image" src={props.card.link} alt={props.card.name}/>
          <figcaption className="image-popup__caption">{props.card.name}</figcaption>
        </figure>
      </div>
    );
  }
  
  export default ImagePopup;


