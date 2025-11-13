import Popup from "./Popup.js";

export default class PopupEditAvatar extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupElement
      .querySelector("form")
      .addEventListener("submit", (evt) => {
        evt.preventDefault();
        this._handleFormSubmit();
      });
  }
}
