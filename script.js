const menuToggle = document.querySelector('.menu-toggle')
const nav = document.querySelector('.site-nav')

menuToggle.addEventListener('click', () => {

menuToggle.classList.toggle('active')
nav.classList.toggle('active')

})
