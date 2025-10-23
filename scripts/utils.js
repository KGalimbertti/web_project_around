//variavel criada para puxar o popup da foto
const imagePopup = document.querySelector(".popup__image");

//variavel criada para puxar o popupo da  descrição
const imagePopupDescription = document.querySelector(
  ".popup__image-description"
);
//chamar formulário do add local
const formcardAddCard = document.querySelector(".popup-new-local__form");
//pega o card pelo id
const nameInput = document.querySelector("#name");
const aboutInput = document.querySelector("#about");

//Deixar o nome e descrição fixos quando abrir o popup
const profileName = document.querySelector(".profile__text-name");
const profileDescription = document.querySelector(".profile__text-description");
//variavel criada para popup do container da imagem
const modalImage = document.querySelector(".popup__image-container");
//pegando card do popup para adicionar a função
//de abertura do popup mudando a visibilidade do popup
const popupProfile = document.querySelector(".popup-profile");
//pegando card do popup para adicionar a função
//de abertura do popup mudando a visibilidade do popup para new local
const popupNewLocal = document.querySelector(".popup-new-local");

// função para fechar o popup pressionando botão esc
const handleKeydown = (evt) => {
  if (evt.key === "Escape") {
    closePopup(popupProfile);
    closePopup(popupNewLocal);
    closePopup(modalImage);

    // const openedPopup = document.querySelector(".popup_opened");

    // if (openedPopup) {
    //   closePopup(openedPopup);
    // }
  }
};

//função para abrir o popup
function openPopup(modal) {
  //Passa o que está na tela para o popup
  nameInput.value = profileName.textContent;
  aboutInput.value = profileDescription.textContent;

  //adiciona a classe popup__opened
  modal.classList.add("popup__opened");
  document.addEventListener("keydown", handleKeydown);
}

//função para fechar o popup
function closePopup(modal) {
  modal.classList.remove("popup__opened");
  document.removeEventListener("keydown", handleKeydown);
  const form = document.querySelectorAll(".popup__input");
  form.forEach((element) => {
    element.value = "";
  });
}

//função para abrir o popup da imagem
function openImageModal(data) {
  imagePopup.src = data.link;
  imagePopup.alt = data.name;
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

//Variavel criada com arrow function para preencher o botao de like
const handleLikeButton = (evt) => {
  evt.target.classList.toggle("card__like-button-active");
};

//Variavel criada com arrow function para remover os cards
const deleteCard = (evt) => {
  evt.target.closest(".card").remove();
};

const popupConfig = { cardFormPopupSelector: ".popup-new-local" };

export {
  handleKeydown,
  handleProfileFormSubmit,
  openPopup,
  closePopup,
  openImageModal,
  handleLikeButton,
  deleteCard,
  popupConfig,
};
