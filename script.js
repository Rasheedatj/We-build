let nav = document.querySelector('header nav');
let search = document.querySelector('.search-form');
let login = document.querySelector('.login-form');
let info = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () => {
    nav.classList.toggle('activeMenu');
    search.classList.remove('active')
    login.classList.remove('activeLogin')
    info.classList.remove('activeInfo')
}

document.querySelector('#search-btn').onclick = () => {
    search.classList.toggle('active');
    nav.classList.remove('activeMenu')
    login.classList.remove('activeLogin')
    info.classList.remove('activeInfo')
}
document.querySelector('#login-btn').onclick = () => {
    login.classList.toggle('activeLogin');
    nav.classList.remove('activeMenu')
    search.classList.remove('active')
    info.classList.remove('activeInfo')
     
}
document.querySelector('#info-btn').onclick = () => {
    info.classList.add('activeInfo')
    nav.classList.remove('activeMenu')
    search.classList.remove('active')
    login.classList.remove('activeLogin')
    
}
document.querySelector('#close-contact-info').onclick = () => {
    info.classList.remove('activeInfo')
}

window.onscroll = () =>{
    nav.classList.remove('activeMenu')
    search.classList.remove('active')
    login.classList.remove('activeLogin')
}


var swiper = new Swiper(".home-slider", {
    loop:true,
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
var swiper = new Swiper(".reviews-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
        350: {
          slidesPerView: 1.2,
         
        },
        768: {
          slidesPerView: 2.2,
           
        },
        1200: {
            slidesPerView: 3.2,
            
          },
      },
  });
var swiper = new Swiper(".blog-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
        350: {
          slidesPerView: 1.1,
         
        },
        768: {
          slidesPerView: 2.1,
           
        },
        1200: {
            slidesPerView: 3.1,
            
          },
      },
  });
var swiper = new Swiper(".logo-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
        350: {
          slidesPerView: 2.5,
         
        },
        768: {
          slidesPerView: 4.5,
           
        },
        1200: {
            slidesPerView: 5.5,
            
          },
      },
  });