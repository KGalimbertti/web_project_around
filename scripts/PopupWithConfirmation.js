import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleConfirmation = () => {}) {
    super(popupSelector);
    this._handleConfirmation = handleConfirmation;
    this._popupConfirmForm = this._popupElement.querySelector(
      ".popup-confirmation__form"
    );
  }

  setSubmitAction(action) {
    this._handleConfirmation = action;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupConfirmForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleConfirmation();
      this.close();
    });
  }
}
