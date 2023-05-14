const hamburgerButtonElement = document.querySelector('#hamburgerButton');
const navListElement = document.querySelector('.nav-list');
const mainElement = document.querySelector("main");


hamburgerButtonElement.addEventListener('click', function (event){
      navListElement.classList.toggle('active');
      event.stopPropagation();
});

mainElement.addEventListener('click', function (event){
      navListElement.classList.remove('active');
});
