const formInputEl = document.querySelector('#name-input')
const userNameOutputEl = document.querySelector('#name-output')

formInputEl.addEventListener('input', (event) => {

    if (!event.target.value) {
        return userNameOutputEl.textContent = 'Anonymous'
    }
    userNameOutputEl.textContent = event.target.value
})