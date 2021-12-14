function createModal(options) {
  const modal = document.createElement('div')
  const placeForm = document.querySelector('.modalSpawn')
  modal.classList.add('myModal')
  modal.insertAdjacentHTML(
    'afterbegin',
    `
    <div class="myModal-overlay fixed top-0 left-0 right-0 bottom-0 transition duration-300 ease-in-out bg"data-close="true">
        <div class="myModal-window w-2/5 mx-auto bg-white rounded-lg -translate-y-24 transition duration-500 ease-in-out translate">
            <div class="myModal-header flex just justify-between mx-4 border-b-2 border-black">
                <span class="myModalTitle font-black">Some title</span>
                <div class="myModal-close" data-close="true">&times;</div>
            </div>
            <div class="myModal-body mx-4">
                <ul>
                    <li>Some text</li>
                    <li>Some text</li>
                    <li>Some text</li>
                </ul>
            </div>
            <div class="myModalFooter mx-4 flex justify-end border-t-2 border-black">
                <button class="BtnOkey mx-4">Okey</button>
                <button class="BtnCancel cursor-pointer mx-4" data-close="true">Cancel</button>
            </div>
        </div>
    </div>
    `
  )
  // document.body.appendChild(modal)
  // placeForm.appendAfter(modal)
  placeForm.appendChild(modal)
  return modal
}

$.modal = function (options) {
  const $modal = createModal(options)

  const modal = {
    open() {
      $modal.classList.add('open')
    },
    close() {
      $modal.classList.remove('open')
    },
  }

  $modal.addEventListener('click', (event) => {
    if (event.target.dataset.close) {
      modal.close()
    }
  })

  return modal
}
