// NAVIGATION BAR

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

   burger.addEventListener('click', () => {
        // Toggle Nav
         nav.classList.toggle('nav-active'); 

        //Animate Links  
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }   else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        // Burger Animation
        burger.classList.toggle('toggle');
    
   }); 
}
navSlide();

// INTRO ANIMATION

// <!-- <div class="intro">
// <div class="intro-text">
//     <h1 class="hide">
//         <span class="text">Welcome </span>
//     </h1>
//     <h1 class="hide">
//         <span class="text">to Finca</span>
//     </h1>
//     <h1 class="hide">
//         <span class="text">Rojo Rubi</span>
//     </h1>
// </div>
// </div>
// <div class="slider-intro"></div> -->
// <!--     
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/gsap.min.js" 
// integrity="sha512-1dalHDkG9EtcOmCnoCjiwQ/HEB5SDNqw8d4G2MKoNwjiwMNeBAkudsBCmSlMnXdsH8Bm0mOd3tl/6nL5y0bMaQ==" 
// crossorigin="anonymous"></script>  -->

// const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

// tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
// tl.to(".slider-intro", { y: "-100%", duration: 1.5, delay: 1});
// tl.to(".intro", { y: "-100%", duration: 1.5}, "-=1.5");
// tl.fromTo("nav", {opacity: 0}, {opacity: 1, duration: 1});
// tl.fromTo(".big-text", {opacity: 0}, {opacity: 1, duration: 1}, "-=1");

// IMAGE SLIDER NEW

const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check for next slide
    if(current.nextElementSibling) {
        // Add current to next sibling
        current.nextElementSibling.classList.add('current');
    } else {
      // Add current to start
      slides[0].classList.add('current');  
    }
    setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check for prev slide
    if(current.previousElementSibling) {
        // Add current to prev sibling
        current.previousElementSibling.classList.add('current');
    } else {
      // Add current to last
      slides[slides.length -1].classList.add('current');  
    }
    setTimeout(() => current.classList.remove('current'));
};

// Button events
next.addEventListener('click', e => {
    nextSlide();
    if(auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

prev.addEventListener('click', e => {
    prevSlide();
    if(auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

// Auto slide

if(auto) {
    //Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
}

var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);




