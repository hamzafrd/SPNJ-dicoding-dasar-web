window.onscroll = function () { test() };
var navbar = document.getElementById("nav-header");
var sticky = navbar.offsetTop;
function test() {

  if (window.pageYOffset > sticky) {
    navbar.style.position = "sticky";
    navbar.style.boxShadow = "0 0 20px #4ea9de";
  } else {
    navbar.style.position = "static"
    navbar.style.boxShadow = "0 0 20px #fff";
  }
}

function classToggle() {
  const navs = document.querySelectorAll('.nav-menu')

  navs.forEach(nav => nav.classList.toggle('nav-h'));
}

document.querySelector('.hamburger')
  .addEventListener('click',classToggle)

  document.querySelector('.home')
  .addEventListener('click',classToggle)
  document.querySelector('.divisi')
  .addEventListener('click',classToggle)

  document.querySelector('.saya')
  .addEventListener('click',classToggle)