class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  addCard() {
    this._card = this._getTemplate();

    this._cardImage = this._card.querySelector(".card__image");
    this._cardTitle = this._card.querySelector(".card__paragraph");
    this._deleteButton = this._card.querySelector(".card__delete-teste");
    this._likeButton = this._card.querySelector(".card__like-button");
    this._setEventListener();
    this._cardImage.addEventListener(
      "click",
      this._handleCardClick(this._link, this._name)
    );

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;

    return this._card;
  }

  _handleLikeButton = () => {
    this._likeButton.target.classList.toggle("card__like-button-active");
  };

  _handleDeleteCard = () => {
    this._card.remove();
    this._card = null;
  };

  _setEventListener() {
    this._likeButton.addEventListener("click", this._handleLikeButton);
    this._deleteButton.addEventListener("click", this._handleDeleteCard);
  }
}

export default Card;
