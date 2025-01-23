// функция открытия любого попапа
export function openModal(popup) {
	popup.classList.add('popup_is-animated')

	setTimeout(() => {
		popup.classList.add('popup_is-opened')
	}, 1)

	document.addEventListener('keydown', closeByEscape)
}

// функция закрытия любого попапа
export function closeModal(popup) {
	popup.classList.remove('popup_is-opened')

	setTimeout(() => {
		popup.classList.remove('popup_is-animated')
	}, 600)

	document.removeEventListener('keydown', closeByEscape)
}

// функция закрытия по кнопке
export function closeByButton(evt) {
	const currentPopup = evt.target.closest('.popup')

	closeModal(currentPopup)
}

// функция закрытия по Esc
function closeByEscape(evt) {
	if (evt.key === 'Escape') {
		const openedPopup = document.querySelector('.popup_is-opened')
		closeModal(openedPopup)
	}
}

// функция закрытия при клике на оверлэй
export function closeByOverlay(evt) {
	if (evt.target.classList.contains('popup')) {
		closeModal(evt.target)
	}
}
