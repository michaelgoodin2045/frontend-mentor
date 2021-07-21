let navbar = document.querySelector('.navbar');
let hamburger = document.querySelector('.hamburger');

function navbarDisplayToggle() {
  if (navbar.style.display === 'block') {
    navbar.style.display = 'none';
  } else {
    navbar.style.display = 'block';
  }
  hamburger.classList.toggle('toggle');
}

hamburger.addEventListener('click', navbarDisplayToggle);
