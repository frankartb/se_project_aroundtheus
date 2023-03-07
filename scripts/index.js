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
const saveProfileButton = editProfileModal.querySelector(".modal__save-button");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const formNameField = editProfileModal.querySelector(".modal__input-name");
const formDescriptionField = editProfileModal.querySelector(
  ".modal__input-description"
);
const cardGallery = document.querySelector(".gallery__cards");
const cardTemplate = document.querySelector("#card__template").content;
const addCardModal = document.querySelector(".modal_type_add");
const addCardForm = document.querySelector(".modal__form_type_add");
const addModalCloseButton = addCardModal.querySelector(".modal__close-button");
const addCardButton = document.querySelector(".profile__add-button");
const addCardSaveButton = addCardModal.querySelector(".modal__save-button");
const formTitleField = addCardModal.querySelector(".modal__input_type_title");
const formLinkField = addCardModal.querySelector(".modal__input_type_link");
const cardFormElement = addCardModal.querySelector(".modal__form");
const imageModal = document.querySelector(".modal_type_image");
const modalImageElement = imageModal.querySelector(".modal__image");
const imageCaption = document.querySelector(".modal__image-caption");
const closeImageButton = imageModal.querySelector(".modal__close-button");

// FUNCTIONS

function openModal(modal) {
  modal.classList.add("modal_opened");
}

function handleProfileFormOpen() {
  formNameField.value = profileName.textContent;
  formDescriptionField.value = profileDescription.textContent;
  openModal(editProfileModal);
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

function clearForm(form) {
  form.reset();
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = formNameField.value;
  profileDescription.textContent = formDescriptionField.value;
  closeModal(editProfileModal);
}

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const link = formLinkField.value;
  const name = formTitleField.value;
  const cardElement = getCardElement({
    name,
    link,
  });
  cardGallery.prepend(cardElement);
  closeModal(addCardModal);
  clearForm(addCardForm);
}

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__button-delete");

  cardTitle.textContent = data.name;
  cardImage.src = data.link;
  cardImage.alt = data.name;

  cardImage.addEventListener("click", () => {
    imageCaption.textContent = data.name;
    modalImageElement.src = data.link;
    openModal(imageModal);
  });

  deleteButton.addEventListener("click", () => {
    const card = deleteButton.closest(".card");
    card.remove();
  });

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

  return cardElement;
}

// EVENT LISTENERS

editProfileModal.addEventListener("submit", handleProfileFormSubmit);

profileEditButton.addEventListener("click", () => {
  handleProfileFormOpen();
});

editModalCloseButton.addEventListener("click", () => {
  closeModal(editProfileModal);
});

addModalCloseButton.addEventListener("click", () => {
  closeModal(addCardModal);
  clearForm(addCardForm);
});

addCardButton.addEventListener("click", () => {
  openModal(addCardModal);
});

addCardModal.addEventListener("submit", handleAddFormSubmit);

closeImageButton.addEventListener("click", () => {
  closeModal(imageModal);
});

initialCards.forEach((data) => {
  const cardElement = getCardElement(data);
  cardGallery.append(cardElement);
});
