//validação de campos do formulário
const forms = document.querySelectorAll(".popup__form");

//função para verificar se tem input invalido
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

//função para alternar estado do botão
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add("popup__submit-button-disabled");
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove("popup__submit-button-disabled");
  }
};

//itera sobre os formulários para achar os inputs com id de erro
forms.forEach((form) => {
  const formInputs = Array.from(form.querySelectorAll(".popup__input"));
  const formError = form.querySelector(`.${formInputs.id}-error`);
  const disabledButton = form.querySelector(".popup__submit-button");

  // itera sobre o input para validar se está com os requisitos obrigatórios
  formInputs.forEach((input) => {
    const isValid = input.validity.valid;
    input.addEventListener("input", function (evt) {
      if (!isValid) {
        showInputError(form, input, input.validationMessage);
      } else {
        hideInputError(form, input);
      }
      toggleButtonState(formInputs, disabledButton);
    });
  });
});

// mostra o erro no input caso não cumpra os requisitos
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add("form__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
};
// esconde o erro no input caso não cumpra os requisito
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove("form__input_type_error");
  errorElement.classList.remove("form__input-error_active");
  errorElement.textContent = "";
};
