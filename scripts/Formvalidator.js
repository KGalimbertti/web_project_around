class FormValidator {
  constructor(formElement, inputElement) {
    this._formElement = formElement;
    this._inputElement = inputElement;
  }

  _hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _toggleButtonState = (inputList, buttonElement) => {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.disabled = true;
      buttonElement.classList.add("popup__submit-button-disabled");
    } else {
      buttonElement.disabled = false;
      buttonElement.classList.remove("popup__submit-button-disabled");
    }
  };

  _showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add("form__input_type_error");
    errorElement.textContent = errorMessage;
    errorElement.classList.add("form__input-error_active");
  };

  _hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove("form__input_type_error");
    errorElement.classList.remove("form__input-error_active");
    errorElement.textContent = "";
  };

  _setEventListeners() {
    const inputList = Array.from(
      this._formElement.querySelectorAll(this._inputElement)
    );
    const buttonElement = this._formElement.querySelector(".popup__button");
    const errorMessages = this._formElement.querySelectorAll(".popup__span");
    const inputElements = this._formElement.querySelectorAll(".popup__input");

    this._toggleButtonState(inputList, buttonElement);
    inputList.forEach((input) => {
      const isValid = input.validity.valid;
      input.addEventListener("input", (evt) => {
        if (!isValid) {
          console.log(this);
          this._showInputError(
            this._formElement,
            input,
            input.validationMessage
          );
        } else {
          this._hideInputError(this._formElement, this._inputElement);
        }
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  }

  enableValidation() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefatult();
    });
    this._setEventListeners();
  }
}
export default FormValidator;
