import {
  handleKeydown,
  openPopup,
  closePopup,
  openImageModal,
  popupConfig,
  initialCards,
} from "./utils.js";

import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import Section from "./Section.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import UserInfo from "./UserInfo.js";

const imagePopup = new PopupWithImage(popupConfig.cardImagePopupSelector);

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

const addCard = (data) => {
  return new Card(data, "#card-template", () =>
    imagePopup.open({ imageCaption: data.name, imageLink: data.link })
  ).generateCard();
};

function prependCard(data, wrap) {
  //empurra os cartões para a direita ao adicionar um novo cartão
  wrap.prepend(addCard(data));
}

//evento de click para chamar o formulario do novo local com a função prependCardsubmit
// popupNewLocalForm.addEventListener("submit", prependCardSubmit);

const profileValidator = new FormValidator(popupProfileForm, ".popup__input");
profileValidator.enableValidation();

const localValidator = new FormValidator(popupNewLocalForm, ".popup__input");
localValidator.enableValidation();

const newCardImage = new Card(
  {
    name: cardNameInput.value,
    link: cardImageInput.value,
  },
  "#card-template",
  () => {
    openImageModal({
      link: cardImageInput.value,
      name: cardNameInput.value,
    });
  }
);

const newCardPopup = new PopupWithForm(
  popupConfig.cardFormPopupSelector,
  (data) => {
    cardsList.addItem(addCard(data));
  }
);

const cardsList = new Section(
  {
    items: initialCards,
    renderer: (data) => {
      cardsList.addItem(addCard(data));
    },
  },
  ".cards"
);

const userInfo = new UserInfo({
  nameSelector: ".profile__text-name",
  aboutSelector: ".profile__text-description",
});

const userInfoPopup = new PopupWithForm(
  popupConfig.userInfoPopupSelector,
  (data) => {
    userInfo.setUserInfo(data);
  }
);

newCardPopup.setEventListeners();
imagePopup.setEventListeners();
userInfoPopup.setEventListeners();
cardsList.renderItems(initialCards);
