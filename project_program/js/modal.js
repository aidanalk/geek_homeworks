

const modal = document.querySelector('.modal')
const modalTriggerButton = document.querySelector('#btn-get')
const modalCloseButton = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

const closeModel = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
    localStorage.setItem('modalShown', 'true');
}

// if (localStorage.getItem('modalShown') !== 'true') {
//     setTimeout(openModal, 10000);
// }

modalTriggerButton.onclick = () => openModal()
modalCloseButton.onclick = () => closeModel()
modal.onclick = (event) => {
    if (event.target === modal) {
        closeModel()
    }
}

const scrollHandler = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        openModal()
        removeEventListener('scroll', scrollHandler)
    }
}

window.addEventListener('scroll', scrollHandler)