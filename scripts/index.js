//Pegar o botão de editar e armazenar no valor editButton
const editButton = document.querySelector(".profile__edit-button");

//Pegar o botão de fechar e armazenar no valor closeButton
const closeButton = document.querySelector(".popup__close-button");

//pegando elemento do popup para adicionar a função
//de abertura do popup mudando a visibilidade do popup
const popup = document.querySelector(".popup");

//pega o elemento pelo id
const nameInput = document.querySelector("#name");
const aboutInput = document.querySelector("#about");

//Deixar o nome e descrição fixos quando abrir o popup
const profileName = document.querySelector(".profile__text-name");
const profileDescription = document.querySelector(".profile__text-description");

//chamar o formulário
const formElement = document.querySelector(".popup__form");

//função para abrir o popup
function openPopup() {
  //Passa o que está na tela para o popup
  nameInput.value = profileName.textContent;
  aboutInput.value = profileDescription.textContent;

  //adiciona a classe popup__opened
  popup.classList.add("popup__opened");
}

//função para fechar o popup
function closePopup() {
  popup.classList.remove("popup__opened");
}

//Adicionando o evento de click para abrir o popup
editButton.addEventListener("click", openPopup);

//Adicionando o evento de click para fechar o popup
closeButton.addEventListener("click", closePopup);

function handleProfileFormSubmit(evt) {
  //evita o comportamento de resetar e enviar os formulários
  evt.preventDefault();

  //passar o que está no popup para a tela
  profileName.textContent = nameInput.value;
  profileDescription.textContent = aboutInput.value;

  //chamar a função de fechar assim que enviar o formulário
  closePopup();
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
