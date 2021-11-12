const InputName = document.querySelector("#JS-inp-name");
const InputPassword = document.querySelector("#JS-inp-password");
const InputSubmit = document.querySelector("#JS-btn-confirm");

const burgerBtn = document.querySelector('.burger');
const mobileNav = document.querySelector('.nav-mobile-list');

burgerBtn.addEventListener("click",()=>{
  mobileNav.classList.toggle("nav-hidden");
  burgerBtn.classList.toggle('pushed-btn');
});