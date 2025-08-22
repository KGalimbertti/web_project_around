//Pegar o botão de editar e armazenar no valor editButton
const editButton = document.querySelector(".profile__edit-button");

//Pegar o botão de fechar e armazenar no valor closeButton
const closeButtonEdit = document.querySelector(".popup__close-button");

//pegar o botão de add e armazenar no valor addButton
const addButton = document.querySelector(".profile__add-button");

const closeButtonAdd = document.querySelector(".popup-new-local__close-button");

//pegando elemento do popup para adicionar a função
//de abertura do popup mudando a visibilidade do popup
const popupProfile = document.querySelector(".popup-profile");

//pegando elemento do popup para adicionar a função
//de abertura do popup mudando a visibilidade do popup para new local
const popupNewLocal = document.querySelector(".popup-new-local");

//elemento pai dos elementos card
const cardsWrapper = document.querySelector(".elements");

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".element");

//variável que armazenara a imagem do card
const cardImageInput = document.querySelector(".popup-new-local__input-image");

//variável que armazenara o nome do card
const cardNameInput = document.querySelector(".popup-new-local__input-name");

//pega o elemento pelo id
const nameInput = document.querySelector("#name");
const aboutInput = document.querySelector("#about");

//Deixar o nome e descrição fixos quando abrir o popup
const profileName = document.querySelector(".profile__text-name");
const profileDescription = document.querySelector(".profile__text-description");

//chamar o formulário
const formElement = document.querySelector(".popup__form");

//chamar formulário do add local
const formElementAddCard = document.querySelector(".popup-new-local__form");

//função para abrir o popup
function openPopup(modal) {
  console.log("open popup", modal);
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
formElement.addEventListener("submit", handleProfileFormSubmit);

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
    //ajustar imagnes no css
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
  const cardElement = cardTemplate.cloneNode(true);

  //adiciona a imagem colocada pelo usuário
  const cardImage = cardElement.querySelector(".element__image");

  //adiciona o nome colocado pelo usuário
  const cardTitle = cardElement.querySelector(".element__paragraph");

  cardImage.src = data.link;
  cardImage.alt = data.name;

  cardTitle.textContent = data.name;

  //retorna o cardElement
  return cardElement;
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
      image: cardImageInput.value,
    },
    cardsWrapper
  );

  //chamar a função de fechar assim que enviar o formulário
  closePopup(popupNewLocal);
}

//função para limpar o input
