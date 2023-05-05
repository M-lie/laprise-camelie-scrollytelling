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

/* ---- Animation qui suit une trajectoire ---- */

gsap.to(".visual.chapter2.no2", {
  motionPath: {
    align: ".vent",
    path: ".vent",
    start: 0,
    end: 1
  },
  scrollTrigger: {
    trigger: "#chapter2",
    start: 'top 25%',
    end: 'bottom 75%',
    scrub: 0.5
  }
})

/* ---- Animation qui se dessine ---- */

gsap.from(".vent", {
  scrollTrigger: {
    trigger: "#chapter2",
    start: 'top 25%',
    end: 'bottom 75%',
    scrub: 0.5
  },
  ease: "none",
  drawSVG: "0% 0%"
});

/* ---- Effet parallaxe ---- */

gsap.to("#parallax-bg-1", {
  scrollTrigger: {
    scrub: true,
   // markers: true,
  },
  y: "-300px",
  ease: "none"
});

gsap.to("#parallax-bg-2", {
  scrollTrigger: {
    scrub: true,
   // markers: true,
  },
  y: "600px",
  ease: "none"
});

/* ---- Animation "restart complete reverse reset" ---- */

gsap.to(".character.chapter1.no1", {
  scrollTrigger: {
   // markers: true,
    start: "top 75%",
    end: "bottom 25%",
    toggleActions: "restart complete reverse reset",
    trigger: "#chapter1",
  },
  y: "125%",
  duration: 2,
  ease: "power2.inOut",
});

/* ---- Animation qui joue en boucle ---- */

gsap.to(".character.chapter6.no1", {
  scrollTrigger: {
   // markers: true,
    start: "top 75%",
    end: "bottom 25%",
    trigger: "#chapter6",
  },
  y: "-500%",
  duration: 5,
  repeat: -1,
  ease: "sine.in",
});

/* ---- Animation chapitre 1 ---- */

gsap.timeline({
    scrollTrigger: {
      trigger: "#chapter1"
    }
  })
  
  .from("#chapter1 h2", {opacity: 0, duration: 4})

  /* ---- Animation chapitre 2 ---- */

gsap.timeline({
  scrollTrigger: {
    trigger: "#chapter2",
    markers: true
  }
})
    
  .from("#chapter2 h2", {opacity: 0, duration: 4})
  .to(".visual.chapter2.no3", {scale: 5, duration: 2});

   /* ---- Animation chapitre 3 ---- */

gsap.timeline({
  scrollTrigger: {
    trigger: "#chapter3"
  }
})

  .from("#chapter3 h2", {opacity: 0, duration: 4})
  .from(".visual.chapter3.no1", {x: "100%", duration: 3, ease: "expo.Out"})
  .to(".visual.chapter3.no4", {scale: 2, duration: 2});

  /* ---- Animation chapitre 4 ---- */

gsap.timeline({
  scrollTrigger: {
    trigger: "#chapter4"
  }
})

  .from("#chapter4 h2", {opacity: 0, duration: 4});

  /* ---- Animation chapitre 5 ---- */

gsap.timeline({
  scrollTrigger: {
    trigger: "#chapter5"
  }
})

  .from("#chapter5 h2", {opacity: 0, duration: 4})
  .from(".visual.chapter5.no1", {x: "100%", duration: 2, ease: "power3.inOut"});

  /* ---- Animation chapitre 6 ---- */

gsap.timeline({
  scrollTrigger: {
    trigger: "#chapter6"
  }
})

  .from("#chapter6 h2", {opacity: 0, duration: 4})
  .from(".character.chapter6.no1", {y: "500%", duration: 5, repeat: -1, ease: "sine.in"});

