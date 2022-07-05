let darkMode = localStorage.getItem('darkMode')
const darkModeToggle = document.querySelector('#dark-mode-toggle')

const light_button = document.querySelector('.light')
const dark_button = document.querySelector('.dark')

// check if darkMode is enabled
// if it's enabled turn if off
// if it's disabled turn it on

const enableDarkMode = () => {
    // 1. add the class darkMode to the body
    document.body.classList.add(('darkMode'))
    // 2. update darkMode in the local storage
    localStorage.setItem('darkMode', 'enabled')

    light_button.style.display = 'none'
    dark_button.style.display = 'block'
}

const disableDarkMode = () => {
    // 1. add the class darkMode to the body
    document.body.classList.remove(('darkMode'))
    // 2. update darkMode in the local storage
    localStorage.setItem('darkMode', null)

    light_button.style.display = 'block'
    dark_button.style.display = 'none'
}

if (darkMode === 'enabled') {
    enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode')
    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
})