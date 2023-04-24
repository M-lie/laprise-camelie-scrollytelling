let body = document.querySelector('body');
let timerScroll;

window.addEventListener('scroll', function() {
  body.classList.add("is-scrolling");

  timerScroll = setTimeout(function() {
    body.classList.remove("is-scrolling");
  }, 100);
});

const animation = gsap.to('.bi-chevron-compact-down', { 
  y: '50%',
  duration: 0.75,
  repeat: -1,
  yoyo: true, 
  ease: 'power1.inOut'
});

let animElements =  gsap
  .timeline()
  .from(".character.chapter1.no1", {y: "-200%", duration: 2, ease: "power2.inOut"})
  .to(".visual.chapter2.no3", {scale: 5, duration: 2})
  .from(".visual.chapter3.no1", {x: "100%", duration: 3, ease: "expo.Out"})
  .to(".visual.chapter3.no4", {scale: 2, duration: 2})
  .from(".visual.chapter5.no1", {x: "100%", duration: 2, ease: "power3.inOut"})
  .from(".character.chapter6.no1", {y: "500%", duration: 5, repeat: -1, ease: "sine.in"})


let animChapters =  gsap
  .timeline()
  .from("#chapter1 h2", {opacity: 0, duration: 2})
  .from("#chapter2 h2", {opacity: 0, duration: 2})
  .from("#chapter3 h2", {opacity: 0, duration: 2})
  .from("#chapter4 h2", {opacity: 0, duration: 2})
  .from("#chapter5 h2", {opacity: 0, duration: 2})
  .from("#chapter6 h2", {opacity: 0, duration: 2})