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

const editProfileModal = document.querySelector(".modal_type_edit");
const profileFormElement = editProfileModal.querySelector(".modal__form");
const profileEditButton = document.querySelector(".profile__edit-button");
const editModalCloseButton = editProfileModal.querySelector(
  ".modal__close-button"
);
const modalSaveButton = editProfileModal.querySelector(".form__save-button");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const formNameField = editProfileModal.querySelector(".form__input-name");
const formDescriptionField = editProfileModal.querySelector(
  ".form__input-description"
);
const cardGallery = document.querySelector(".gallery__cards");
const cardTemplate = document.querySelector("#card__template").content;
const addCardModal = document.querySelector(".modal_type_add");
const addModalCloseButton = addCardModal.querySelector(".modal__close-button");
const addCardButton = document.querySelector(".profile__add-button");
const addCardSaveButton = addCardModal.querySelector(".form__save-button");
const formTitleField = addCardModal.querySelector(".form__input_type_title");
const formLinkField = addCardModal.querySelector(".form__input_type_link");
const cardFormElement = addCardModal.querySelector(".modal__form");

// FUNCTIONS

function openModal(modal) {
  formNameField.value = profileName.textContent;
  formDescriptionField.value = profileDescription.textContent;
  modal.classList.add("modal_opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = formNameField.value;
  profileDescription.textContent = formDescriptionField.value;
  closeModal(editProfileModal);
}

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  cardTitle.textContent = formTitleField.value;
  cardImage.src = formLinkField.value;
  cardImage.alt = formTitleField.value;
  cardGallery.prepend(cardElement);
  closeModal(addCardModal);
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

editProfileModal.addEventListener("submit", handleProfileFormSubmit);

profileEditButton.addEventListener("click", () => {
  openModal(editProfileModal);
});

editModalCloseButton.addEventListener("click", () => {
  closeModal(editProfileModal);
});

addModalCloseButton.addEventListener("click", () => {
  closeModal(addCardModal);
});

addCardButton.addEventListener("click", () => {
  openModal(addCardModal);
});

addCardModal.addEventListener("submit", handleAddFormSubmit);

initialCards.forEach((data) => {
  const cardElement = getCardElement(data);
  cardGallery.append(cardElement);
});
