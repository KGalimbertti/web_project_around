//Pegar o botão de editar e armazenar no valor editButton
const editButton = document.querySelector(".profile__edit-button");

//Pegar o botão de fechar e armazenar no valor closeButton
const closeButtonEdit = document.querySelector(".popup__close-button");

//pegar o botão de add e armazenar no valor addButton
const addButton = document.querySelector(".profile__add-button");

//Pegar o botão de fechar e armazenar no valor closeButtonAdd
const closeButtonAdd = document.querySelector(".popup-new-local__close-button");

//pegando cardo do popup para adicionar a função
//de abertura do popup mudando a visibilidade do popup
const popupProfile = document.querySelector(".popup-profile");

//pegando cardo do popup para adicionar a função
//de abertura do popup mudando a visibilidade do popup para new local
const popupNewLocal = document.querySelector(".popup-new-local");

const popupNewLocalForm = document.querySelector(".popup-new-local__form");

//cardo pai dos cardos card
const cardsWrapper = document.querySelector(".cards");

//Esse código está pegando um template HTML e extraindo o conteúdo dele para usar como um “card”
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

//variável que armazenara a imagem do card
const cardImageInput = document.querySelector(".popup-new-local__input-image");

//variável que armazenara o nome do card
const cardNameInput = document.querySelector(".popup-new-local__input-name");

//pega o cardo pelo id
const nameInput = document.querySelector("#name");
const aboutInput = document.querySelector("#about");

//Deixar o nome e descrição fixos quando abrir o popup
const profileName = document.querySelector(".profile__text-name");
const profileDescription = document.querySelector(".profile__text-description");

//chamar o formulário
const formcard = document.querySelector(".popup__form");

//chamar formulário do add local
const formcardAddCard = document.querySelector(".popup-new-local__form");

//variavel criada para popup do container da imagem
const modalImage = document.querySelector(".popup__image-container");

//variavel criada para puxar o popup da foto
const imagePopup = document.querySelector(".popup__image");

//variavel criada para puxar o popupo da  descrição
const imagePopupDescription = document.querySelector(
  ".popup__image-description"
);

//variavel criada para fechar o popup da imagem
const closeButtonImage = document.querySelector(".popup__image-close-button");

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

//Variavel criada com arrow function para remover os cards
const deleteCard = (evt) => {
  evt.target.closest(".card").remove();
};

//Variavel criada com arrow function para preencher o botao de like
const handleLikeButton = (evt) => {
  evt.target.classList.toggle("card__like-button-active");
};

//função para abrir o popup
function openPopup(modal) {
  //Passa o que está na tela para o popup
  nameInput.value = profileName.textContent;
  aboutInput.value = profileDescription.textContent;

  //adiciona a classe popup__opened
  modal.classList.add("popup__opened");
}

//função para fechar o popup
function closePopup(modal) {
  modal.classList.remove("popup__opened");
}

// função para fechar o popup clicando fora dele
const overlays = document.querySelectorAll(".popup__overlay");
overlays.forEach((overlay) => {
  overlay.addEventListener("click", (evt) => {
    closePopup(overlay.firstElementChild);
  });
});

// função para fechar o popup pressionando botão esc
document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    closePopup(popupProfile);
    closePopup(popupNewLocal);
    closePopup(modalImage);
  }
});

//Adicionando o evento de click para abrir o popup
editButton.addEventListener("click", () => {
  openPopup(popupProfile);
});

//Adicionando o evento de click para fechar o popup
closeButtonEdit.addEventListener("click", () => {
  closePopup(popupProfile);
});

//Adicionando o evento de click para abrir o popup new local
addButton.addEventListener("click", () => {
  openPopup(popupNewLocal);
});

//Adicionando o evento de click para fechar o popup new local
closeButtonAdd.addEventListener("click", () => {
  closePopup(popupNewLocal);
});

//Adicionando o evento de click para fechar o popup da imagem
closeButtonImage.addEventListener("click", () => {
  closePopup(modalImage);
});

//função para abrir o popup da imagem
function openImageModal(data) {
  imagePopup.src = data.link;
  imagePopupDescription.textContent = data.name;

  openPopup(modalImage);
}

function handleProfileFormSubmit(evt) {
  //evita o comportamento de resetar e enviar os formulários
  evt.preventDefault();

  //passar o que está no popup para a tela
  profileName.textContent = nameInput.value;
  profileDescription.textContent = aboutInput.value;

  //chamar a função de fechar assim que enviar o formulário
  closePopup(popupProfile);
}

//quando o formulário for enviado vamos chamar a função handle que evita o comportamento padrão
formcard.addEventListener("submit", handleProfileFormSubmit);

const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

function addCard(data) {
  //cria um clone da variável cardTemplate
  const card = cardTemplate.cloneNode(true);

  //adiciona a imagem colocada pelo usuário
  const cardImage = card.querySelector(".card__image");

  //adiciona o nome colocado pelo usuário
  const cardTitle = card.querySelector(".card__paragraph");

  // adicionar variavel para deletar o card
  const deleteButton = card.querySelector(".card__delete-teste");

  //criando variável para preencher o botão de like
  const likeButton = card.querySelector(".card__like-button");

  //chamar evento de click para deletar o card usando a variavel deleteButton
  deleteButton.addEventListener("click", deleteCard);

  //adicionando evento de click para preencher o botão de like
  likeButton.addEventListener("click", handleLikeButton);

  cardImage.addEventListener("click", () => {
    openImageModal(data);
  });

  cardImage.src = data.link;
  cardImage.alt = data.name;

  cardTitle.textContent = data.name;

  //retorna o card
  return card;
}

function renderCard(data, wrap) {
  //empurra os cartões para a direita ao adicionar um novo cartão
  wrap.prepend(addCard(data));
}

initialCards.forEach((card) => {
  //adiciona todos os cartões salvos em initial cards
  renderCard(card, cardsWrapper);
});

function renderCardSubmit(evt) {
  //evita o comportamento de resetar e enviar os formulários
  evt.preventDefault();

  renderCard(
    {
      //salva as informações passadas pelo usuário e renderiza um novo card
      name: cardNameInput.value,
      link: cardImageInput.value,
    },
    cardsWrapper
  );

  //chamar a função de fechar assim que enviar o formulário
  closePopup(popupNewLocal);
}

//evento de click para chamar o formulario do novo local com a função rendercardsubmit
popupNewLocalForm.addEventListener("submit", renderCardSubmit);
