const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup__close-button");
const popup = document.querySelector(".popup");
const nameInput = document.querySelector("#name");
const aboutInput = document.querySelector("#about");
const profileName = document.querySelector(".profile__text-name");
const profileDescription = document.querySelector(".profile__text-description");
let formElement = document.querySelector(".popup__form");

function openPopup() {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileDescription.textContent;
  popup.classList.add("popup__opened");
}

function closePopup() {
  popup.classList.remove("popup__opened");
}

editButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileDescription.textContent = aboutInput.value;

  closePopup();
}

formElement.addEventListener("submit", handleProfileFormSubmit);
