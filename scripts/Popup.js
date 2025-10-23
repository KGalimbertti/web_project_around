export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    // bind associa o valor do constructor com a tecla esc
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    //adiciona a classe popup__opened
    this._popupElement.classList.add("popup__opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  //função para fechar o popup
  close() {
    this._popupElement.classList.remove("popup__opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };
}
