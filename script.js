const burgerBtn = document.querySelector('.burger');
const mobileNav = document.querySelector('.nav-mobile-list');

burgerBtn.addEventListener("click",()=>{
  mobileNav.classList.toggle("nav-hidden");
  burgerBtn.classList.toggle('pushed-btn');
});