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

let anim =  gsap
  .timeline()
  