import {
  handleKeydown,
  handleProfileFormSubmit,
  openPopup,
  closePopup,
  openImageModal,
  handleLikeButton,
  deleteCard,
} from "./utils.js";

import FormValidator from "./FormValidator.js";
import Card from "./Card.js";

//Pegar o botão de editar e armazenar no valor editButton
const editButton = document.querySelector(".profile__edit-button");

//Pegar o botão de fechar e armazenar no valor closeButton
const closeButtonEdit = document.querySelector(".popup__close-button");

//pegar o botão de add e armazenar no valor addButton
const addButton = document.querySelector(".profile__add-button");

//Pegar o botão de fechar e armazenar no valor closeButtonAdd
const closeButtonAdd = document.querySelector(".popup-new-local__close-button");

//pegando card do popup para adicionar a função
//de abertura do popup mudando a visibilidade do popup
const popupProfile = document.querySelector(".popup-profile");

//pegando card do popup para adicionar a função
//de abertura do popup mudando a visibilidade do popup para new local
const popupNewLocal = document.querySelector(".popup-new-local");

const popupNewLocalForm = document.querySelector(".popup-new-local__form");
const popupProfileForm = document.querySelector(".popup-profile__form");

//card pai dos cards
const cardsWrapper = document.querySelector(".cards");

//Esse código está pegando um template HTML e extraindo o conteúdo dele para usar como um “card”
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

//variável que armazenara a imagem do card
const cardImageInput = document.querySelector(".popup-new-local__input-image");

//variável que armazenara o nome do card
const cardNameInput = document.querySelector(".popup-new-local__input-name");

//chamar o formulário
const formcard = document.querySelector(".popup__form");

//variavel criada para popup do container da imagem
const modalImage = document.querySelector(".popup__image-container");

//variavel criada para fechar o popup da imagem
const closeButtonImage = document.querySelector(".popup__image-close-button");

// função para fechar o popup clicando fora dele
const overlays = document.querySelectorAll(".popup__overlay");
overlays.forEach((overlay) => {
  overlay.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup__overlay")) {
      closePopup(overlay);
    }
  });
});

document.addEventListener("keydown", handleKeydown);

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

const addCard = (data) => {
  return new Card(data, "#card-template").addCard();
};

function prependCard(data, wrap) {
  //empurra os cartões para a direita ao adicionar um novo cartão
  wrap.prepend(addCard(data));
}

initialCards.forEach((card) => {
  //adiciona todos os cartões salvos em initial cards
  prependCard(card, cardsWrapper);
});

function prependCardSubmit(evt) {
  //evita o comportamento de resetar e enviar os formulários
  evt.preventDefault();

  prependCard(
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

//evento de click para chamar o formulario do novo local com a função prependCardsubmit
popupNewLocalForm.addEventListener("submit", prependCardSubmit);

const profileValidator = new FormValidator(popupProfileForm, ".popup__input");
profileValidator.enableValidation();

const localValidator = new FormValidator(popupNewLocalForm, ".popup__input");
localValidator.enableValidation();
