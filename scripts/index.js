const container = document.querySelector('.content');
const cardsContainer = container.querySelector('.places__list');

function createCard(linkValue, titleValue, deleteCard) {

  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  const cardImage = cardElement.querySelector('.card__image');
  cardImage.src = linkValue;

  const cardTitle = cardElement.querySelector('.card__title');
  cardTitle.textContent = titleValue;

  const deleteButton = cardElement.querySelector('.card__delete-button');

  deleteButton.addEventListener('click', deleteCard);

  return cardElement;
};

function deleteCard(evt) {
  evt.target.closest('.card').remove()
}

initialCards.forEach(function (element) {

  const cardElement = createCard(element.link, element.name, deleteCard);

  cardsContainer.append(cardElement);
});
