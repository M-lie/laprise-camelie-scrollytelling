gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(MotionPathPlugin);

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

gsap.to("#section-parallax", {
  backgroundPosition: "50% 100%",
  ease: "none",
  scrollTrigger: {
      trigger: "#section-parallax",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      markers: true
  }
});


gsap.set("#vent",{drawSVG:"0% 0%"});

function anim() {
  gsap.to(
    "#vent",
    {
      drawSVG:"0% 100%", 
      duration:1, 
      ease:"power1.inOut"
    }
  );
}

window.addEventListener('scroll', anim);

const chaptersArr = document.querySelectorAll(".chapter");

chaptersArr.forEach(function (chapter) {
  gsap
    .timeline({
      scrollTrigger: {
        toggleActions: "restart complete reverse reset",
        trigger: chapter
      }
    })

    /* ---- Animation chapitre 1 ---- */
    .from("#chapter1 h2", {opacity: 0, duration: 4})
    .from(".character.chapter1.no1", {y: "-200%", duration: 2, ease: "power2.inOut"})

    /* ---- Animation chapitre 2 ---- */
    .from("#chapter2 h2", {opacity: 0, duration: 2})
    .to(".visual.chapter2.no3", {scale: 5, duration: 2})

    /* ---- Animation chapitre 3 ---- */
    .from("#chapter3 h2", {opacity: 0, duration: 2})
    .from(".visual.chapter3.no1", {x: "100%", duration: 3, ease: "expo.Out"})
    .to(".visual.chapter3.no4", {scale: 2, duration: 2})

    /* ---- Animation chapitre 4 ---- */
    .from("#chapter4 h2", {opacity: 0, duration: 2})

    /* ---- Animation chapitre 5 ---- */
    .from("#chapter5 h2", {opacity: 0, duration: 2})
    .from(".visual.chapter5.no1", {x: "100%", duration: 2, ease: "power3.inOut"})

    /* ---- Animation chapitre 6 ---- */
    .from("#chapter6 h2", {opacity: 0, duration: 2})
    .from(".character.chapter6.no1", {y: "500%", duration: 5, repeat: -1, ease: "sine.in"});

});

gsap.timeline({
    scrollTrigger: {
      trigger: "#chapter1"
    }
  })

  /* ---- Animation chapitre 1 ---- */
  .from("#chapter1 h2", {opacity: 0, duration: 4})
  .from(".character.chapter1.no1", {y: "-200%", duration: 2, ease: "power2.inOut"});

gsap.timeline({
  scrollTrigger: {
    trigger: "#chapter2"
  }
})
    
  /* ---- Animation chapitre 2 ---- */
  .from("#chapter2 h2", {opacity: 0, duration: 4})
  .to(".visual.chapter2.no3", {scale: 5, duration: 2});

gsap.timeline({
  scrollTrigger: {
    trigger: "#chapter3"
  }
})

  /* ---- Animation chapitre 3 ---- */
  .from("#chapter3 h2", {opacity: 0, duration: 4})
  .from(".visual.chapter3.no1", {x: "100%", duration: 3, ease: "expo.Out"})
  .to(".visual.chapter3.no4", {scale: 2, duration: 2});

gsap.timeline({
  scrollTrigger: {
    trigger: "#chapter4"
  }
})

  /* ---- Animation chapitre 4 ---- */
  .from("#chapter4 h2", {opacity: 0, duration: 4});

gsap.timeline({
  scrollTrigger: {
    trigger: "#chapter5"
  }
})

  /* ---- Animation chapitre 5 ---- */
  .from("#chapter5 h2", {opacity: 0, duration: 4})
  .from(".visual.chapter5.no1", {x: "100%", duration: 2, ease: "power3.inOut"});


gsap.timeline({
  scrollTrigger: {
    trigger: "#chapter6"
  }
})

  /* ---- Animation chapitre 6 ---- */
  .from("#chapter6 h2", {opacity: 0, duration: 4})
  .from(".character.chapter6.no1", {y: "500%", duration: 5, repeat: -1, ease: "sine.in"});

