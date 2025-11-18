class Card {
  constructor(
    data,
    cardSelector,
    handleCardClick,
    confirmationDeleteCard,
    handleLikeButton
  ) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._confirmationDeleteCard = confirmationDeleteCard;
    this._handleLikeButton = handleLikeButton;
    this._id = data._id;
    this._isLiked = data.isLiked;
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  generateCard() {
    this._card = this._getTemplate();

    this._cardImage = this._card.querySelector(".card__image");
    this._cardTitle = this._card.querySelector(".card__paragraph");
    this._deleteButton = this._card.querySelector(".card__delete-teste");
    this._likeButton = this._card.querySelector(".card__like-button");
    this._setEventListener();
    this._cardImage.addEventListener("click", () =>
      this._handleCardClick({ imageCaption: this._name, imageLink: this._link })
    );
    this._likeButton.addEventListener("click", this._processLikeButton);
    if (this._isLiked === true) {
      this._likeButton.classList.toggle("card__like-button-active");
    }
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;

    return this._card;
  }

  getID() {
    return this._id;
  }

  _processLikeButton = () => {
    console.log("chegou no likebutton");
    this._isLiked = !this._isLiked;
    this._handleLikeButton(this._isLiked).then(() =>
      this._likeButton.classList.toggle("card__like-button-active")
    );
  };

  _handleDeleteCard = () => {
    this._card.remove();
    this._card = null;
  };

  _setEventListener() {
    this._likeButton.addEventListener("click", this._likeButton);
    this._deleteButton.addEventListener("click", () => {
      this._confirmationDeleteCard(this);
    });
  }
}

export default Card;
