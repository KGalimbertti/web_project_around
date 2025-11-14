import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleConfirmation) {
    super(popupSelector);
    this._handleConfirmation = handleConfirmation;
    this._confirmButton = this._popupElement.querySelector(
      ".popup__confirm-button"
    );
  }

  setEventListeners() {
    super.setEventListeners();
    this._confirmButton.addEventListener("click", () => {
      this._handleConfirmation();
      this.close();
    });
  }
}
