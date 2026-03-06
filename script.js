const menuToggle = document.querySelector('.menu-toggle')
const nav = document.querySelector('.site-nav')

menuToggle.addEventListener('click', () => {

menuToggle.classList.toggle('active')
nav.classList.toggle('active')

});


document.querySelectorAll('.cta').forEach(button => {

  button.addEventListener('pointerdown', function(e){

    const existingRipple = button.querySelector('.cta-ripple');
    if (existingRipple) existingRipple.remove();

    const ripple = document.createElement('span');
    ripple.className = 'cta-ripple';

    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    ripple.style.width = size + 'px';
    ripple.style.height = size + 'px';

    ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
    ripple.style.top  = (e.clientY - rect.top  - size / 2) + 'px';

    button.appendChild(ripple);

    ripple.addEventListener('animationend', () => {
      ripple.remove();
    });

  });

});
