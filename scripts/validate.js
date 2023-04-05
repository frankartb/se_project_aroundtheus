const isValid = (inputElement) => inputElement.validity.valid;

const showInputError = (inputElement, errorElement, settings) => {
  inputElement.classList.add(settings.inputErrorClass);
  errorElement.innerText = inputElement.validationMessage;
  errorElement.classList.add(settings.errorClass);
};

const hideInputError = (inputElement, errorElement, settings) => {
  inputElement.classList.remove(settings.inputErrorClass);
  errorElement.textContent = " ";
  errorElement.classList.remove(settings.errorClass);
};

const checkFormInvalidity = (inputList) => {
  return inputList.every((inputElement) => isValid(inputElement));
};

const checkInputValidity = (formElement, inputElement, settings) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  if (!isValid(inputElement)) {
    showInputError(inputElement, errorElement, settings);
  } else {
    hideInputError(inputElement, errorElement, settings);
  }
};

toggleButtonState = (inputList, buttonElement, settings) => {
  if (checkFormInvalidity(inputList)) {
    buttonElement.classList.remove(settings.inactiveButtonClass);
    buttonElement.disabled = false;
  } else {
    buttonElement.classList.add(settings.inactiveButtonClass);
    buttonElement.disabled = true;
  }
};

const setupEventListeners = (formElement, settings) => {
  const inputList = Array.from(
    formElement.querySelectorAll(settings.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    settings.submitButtonSelector
  );
  toggleButtonState(inputList, buttonElement, settings);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", (evt) => {
      checkInputValidity(formElement, inputElement, settings);
      toggleButtonState(inputList, buttonElement, settings);
    });
  });
};

enableValidation({
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save-button",
  inactiveButtonClass: "modal__save-button_disabled",
  inputErrorClass: "modal__input-invalid",
  errorClass: "modal__input-error",
});

function enableValidation(settings) {
  const formsList = Array.from(
    document.querySelectorAll(settings.formSelector)
  );
  formsList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setupEventListeners(formElement, settings);
  });
}
