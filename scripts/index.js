// ELEMENTS

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg ",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg ",
  },
];

const profileFormElement = document.querySelector(".modal__container");
const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".modal__close-button");
const saveButton = document.querySelector(".form__save-button");
const addButton = document.querySelector(".profile__add-button");
const modal = document.querySelector(".modal");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const formNameField = document.querySelector(".form__input-name");
const formDescriptionField = document.querySelector(".form__input-description");
const cardGallery = document.querySelector(".gallery__cards");
const cardTemplate = document.querySelector("#card__template").content;

formNameField.value = profileName.textContent;
formDescriptionField.value = profileDescription.textContent;

// FUNCTIONS

function openModal() {
  modal.classList.add("modal__opened");
}

function closeModal() {
  modal.classList.remove("modal__opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = formNameField.value;
  profileDescription.textContent = formDescriptionField.value;
  modal.classList.remove("modal__opened");
}

function getCardElement(data) {
  let cardElement = cardTemplate.cloneNode(true);
  let cardImage = cardElement.querySelector(".card__image");
  let cardTitle = cardElement.querySelector(".card__title");
  cardTitle.textContent = data.name;
  cardImage.src = data.link;
  cardImagealt = data.name;
  return cardElement;
}

// EVENT LISTENERS

profileFormElement.addEventListener("submit", handleProfileFormSubmit);

editButton.addEventListener("click", openModal);

closeButton.addEventListener("click", closeModal);

initialCards.forEach((data) => {
  const cardElement = getCardElement(data);
  cardGallery.append(cardElement);
});
