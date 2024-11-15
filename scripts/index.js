const container = document.querySelector('.content');
const cardsContainer = container.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;

function createCard(element, deleteCard) {

  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  const cardImage = cardElement.querySelector('.card__image');
  cardImage.src = element.link;
  cardImage.alt = element.name;

  const cardTitle = cardElement.querySelector('.card__title');
  cardTitle.textContent = element.name;

  const deleteButton = cardElement.querySelector('.card__delete-button');

  deleteButton.addEventListener('click', () => deleteCard(cardElement));

  return cardElement;
};

function deleteCard(cardElement) {
  cardElement.remove();
};

initialCards.forEach(function (element) {

  const cardElement = createCard(element, deleteCard);

  cardsContainer.append(cardElement);
});
