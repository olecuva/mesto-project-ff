// функция создания карточки
export function createCard(element, openImagePopup, deleteCard, toggleLike) {
	const cardTemplate = document.querySelector('#card-template').content
	const cardElement = cardTemplate.querySelector('.card').cloneNode(true)

	const cardImage = cardElement.querySelector('.card__image')
	cardImage.src = element.link
	cardImage.alt = element.name

	const cardTitle = cardElement.querySelector('.card__title')
	cardTitle.textContent = element.name

	// обработчик для открытия попапа при клике на изображение
	cardImage.addEventListener('click', () => openImagePopup(element))

	// обработчик удаления карточки
	const cardDeleteButton = cardElement.querySelector('.card__delete-button')
	cardDeleteButton.addEventListener('click', () => deleteCard(cardElement))

	// обработчик лайка карточки
	const cardLikeButton = cardElement.querySelector('.card__like-button')
	cardLikeButton.addEventListener('click', toggleLike)

	return cardElement
}

// функция удаления карточки
export function deleteCard(cardElement) {
	cardElement.remove()
}

// функция лайка карточки
export function toggleLike(evt) {
	evt.target.classList.toggle('card__like-button_is-active')
}
