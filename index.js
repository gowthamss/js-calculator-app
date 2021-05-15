console.log('hello')
const themeRadioBtns = document.querySelectorAll('.theme-radio')
const getStylesheet = document.querySelector('link[href="./css/theme1.css"]')

const changeTheme = (event) => {
    const target = event.target
    if (target.value === '1') {
        getStylesheet.setAttribute('href', './css/theme1.css')
    } else if (target.value === '2') {
        getStylesheet.setAttribute('href', './css/theme2.css')
    } else {
        getStylesheet.setAttribute('href', './css/theme3.css')
    }
}

for (const themeRadio of themeRadioBtns) {
    themeRadio.addEventListener('change', changeTheme)
}