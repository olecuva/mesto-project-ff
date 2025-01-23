import { initialCards } from './cards.js'
import { createCard, deleteCard, toggleLike } from '../components/card.js'
import {
	openModal,
	closeModal,
	closeByOverlay,
	closeByButton,
} from '../components/modal.js'
import '../pages/index.css'

const container = document.querySelector('.content')
const cardsContainer = container.querySelector('.places__list')

// изначальная загрузка карточек
initialCards.forEach(element => {
	const cardElement = createCard(
		element,
		openImagePopup,
		deleteCard,
		toggleLike
	)
	cardsContainer.append(cardElement)
})

const popups = document.querySelectorAll('.popup')

// обработчик закрытия попапа при клике на оверлей и кнопку закрытия
popups.forEach(popup => {
	popup.addEventListener('click', closeByOverlay)

	const closeButton = popup.querySelector('.popup__close')
	closeButton.addEventListener('click', closeByButton)
})

// элементы редактирования профиля
const editButton = document.querySelector('.profile__edit-button')
const editPopup = document.querySelector('.popup_type_edit')
const editForm = editPopup.querySelector('.popup__form')
const nameInput = editForm.querySelector('.popup__input_type_name')
const jobInput = editForm.querySelector('.popup__input_type_description')
const profileName = document.querySelector('.profile__title')
const profileJob = document.querySelector('.profile__description')

// функция открытия формы редактирования профиля
function openEditPopup() {
	nameInput.value = profileName.textContent
	jobInput.value = profileJob.textContent

	openModal(editPopup)
}
// обработчик открытия формы редактирования профиля
editButton.addEventListener('click', openEditPopup)

// функция отправки формы редактирования профиля
function submitEditForm(evt) {
	evt.preventDefault()

	profileName.textContent = nameInput.value
	profileJob.textContent = jobInput.value

	closeModal(editPopup)
}
// обработчик отправки формы редактирования профиля
editForm.addEventListener('submit', submitEditForm)

// элементы добавления карточек
const addButton = document.querySelector('.profile__add-button')
const newCardPopup = document.querySelector('.popup_type_new-card')
const newCardForm = newCardPopup.querySelector('.popup__form')
const placeNameInput = newCardForm.querySelector('.popup__input_type_card-name')
const linkInput = newCardForm.querySelector('.popup__input_type_url')

//функция открытия попапа добавления карточки
function openNewCardPopup() {
	openModal(newCardPopup)
}
// обработчик открытия попапа добавления карточки
addButton.addEventListener('click', openNewCardPopup)

// функция добавления новой карточки
function addNewCard(evt) {
	evt.preventDefault()

	const cardElement = {
		name: placeNameInput.value,
		link: linkInput.value,
	}

	const newCard = createCard(
		cardElement,
		openImagePopup,
		deleteCard,
		toggleLike
	)

	cardsContainer.prepend(newCard)

	closeModal(newCardPopup)
	newCardForm.reset()
}
// обработчик добавления новой карточки
newCardForm.addEventListener('submit', addNewCard)

// элементы попапа карточки
const imagePopup = document.querySelector('.popup_type_image')
const popupImage = imagePopup.querySelector('.popup__image')
const popupCaption = imagePopup.querySelector('.popup__caption')

// ф-ция открытия попапа карточки
function openImagePopup(element) {
	popupImage.src = element.link
	popupImage.alt = element.name
	popupCaption.textContent = element.name

	openModal(imagePopup)
}
