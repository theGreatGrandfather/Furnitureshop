// $(document).ready(function () {
//   $(".header__burger").click(function (event) {
//     $(".header__burger,.header__top").toggleClass("active");
//     // $(".header__burger,.header__social-continer").toggleClass("active");
//     $("body").toggleClass("lock");
//   });
// });

const burger = document.querySelector('.header__burger');
const headerTop = document.querySelector('.header__top');
const headerSocial = document.querySelector('.header__social-continer');
const body = document.querySelector('body');
console.log('b', body)

const toggleMobileMenu = (e)=>{
  e.preventDefault();
  console.log(e.target)
  if(e.target===burger || e.target === burger.firstElementChild){
    console.log('first')
    burger.classList.toggle('active');
    headerTop.classList.toggle('active');
    body.classList.toggle('lock');
    headerTop.addEventListener('click', onMobileItemClick);
  };
};

const onMobileItemClick = (e)=>{
  console.log(e.target.nodeName)
  if (e.target.nodeName === 'A' || e.target.nodeName === 'svg' || e.target.nodeName === 'use'){ 
    burger.classList.toggle('active');
    headerTop.classList.toggle('active');
    body.classList.toggle('lock');
    headerTop.removeEventListener('click', onMobileItemClick);
  }
};


burger.addEventListener('click', toggleMobileMenu);