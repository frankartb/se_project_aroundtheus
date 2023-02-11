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

const profileModal = document.querySelector(".modal");
const profileFormElement = profileModal.querySelector(".modal__form");
const profileEditButton = document.querySelector(".profile__edit-button");
const modalCloseButton = profileModal.querySelector(".modal__close-button");
const modalSaveButton = profileModal.querySelector(".form__save-button");
const addCardButton = document.querySelector(".profile__add-button");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const formNameField = profileModal.querySelector(".form__input-name");
const formDescriptionField = profileModal.querySelector(
  ".form__input-description"
);
const cardGallery = document.querySelector(".gallery__cards");
const cardTemplate = document.querySelector("#card__template").content;

// FUNCTIONS

function openModal() {
  formNameField.value = profileName.textContent;
  formDescriptionField.value = profileDescription.textContent;
  profileModal.classList.add("modal_opened");
}

function closeModal() {
  profileModal.classList.remove("modal_opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = formNameField.value;
  profileDescription.textContent = formDescriptionField.value;
  closeModal();
}

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  cardTitle.textContent = data.name;
  cardImage.src = data.link;
  cardImage.alt = data.name;
  return cardElement;
}

// EVENT LISTENERS

profileModal.addEventListener("submit", handleProfileFormSubmit);

profileEditButton.addEventListener("click", openModal);

modalCloseButton.addEventListener("click", closeModal);

initialCards.forEach((data) => {
  const cardElement = getCardElement(data);
  cardGallery.append(cardElement);
});
