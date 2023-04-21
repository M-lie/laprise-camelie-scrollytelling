let body = document.querySelector('body');
let timerScroll;

const animation = gsap.to('.bi-chevron-compact-down', { 
    y: '50%',
    duration: 0.75,
    repeat: -1,
    yoyo: true, 
    ease: 'power1.inOut'
  });

body.classList.remove("is-scrolling");

window.addEventListener('scroll', function(timerScroll) {
  cleartimeout(timerScroll);
  body.classList.add("is-scrolling");

  timerScroll = setTimeout(function() {
    body.classList.remove("is-scrolling");
  }, 1000);
});


