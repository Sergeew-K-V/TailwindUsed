const btn = document.querySelector('.myBtnForm')
const modal = $.modal()

btn.addEventListener('click', (event) => {
  event.preventDefault()
  modal.open()
})
