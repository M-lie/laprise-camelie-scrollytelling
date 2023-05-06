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

/* ---- Animation chapitre 1 ---- */

gsap.timeline({
    scrollTrigger: {
      pin: true,
      scrub: true,
      toggleActions: "restart complete reverse reset",
      trigger: "#chapter1"
    },
  })
  
  .from(".character.chapter1.no1", {y: "-400%", duration: 2, ease: "power2.inOut"})
  .to("#chapter1 h2", {opacity: 0, duration: 2}, "-=1")
  .from(".p-chapter1", {y: "300%", duration: 3, ease: "power2.inOut"}, "<")
  .from(".character.chapter1.no2",{y: "300%", duration: 4, ease: "power2.inOut"}, "-=4");

/* ---- Animation chapitre 2 ---- */

gsap.timeline({
  scrollTrigger: {
    pin: true,
    markers: true,
    end: "bottom 0",
    toggleActions: "restart complete reverse reset",
    trigger: "#chapter2",
  }
})
    
  .to("#chapter2 h2", {opacity: 0, duration: 2})
  .from(".p-chapter2-1.no1", {x: "-100%", duration: 3, ease: "power2.inOut"}, "+=0.25")
  .from(".p-chapter2-1.no2", {x: "100%", duration: 3, ease: "power2.inOut"}, "<")
  .from(".ixy-foret", {x: "-100%", duration: 8}, "-=2")
  .from(".vent", {ease: "none", drawSVG: "0% 0%"}, "+=1")
  .to(".p-chapter2-1.no1", {opacity: 0}, "<")
  .to(".p-chapter2-1.no2", {opacity: 0}, "<")
  .to(".visual.chapter2.no2", {motionPath: {align: ".vent", path: ".vent", start: 0, end: 1}}, "<")

  .to(".ixy-foret", {opacity: 0}, "+=0.1")
  .to(".vent", {opacity: 0}, "<")
  .from(".p-chapter2-2", {y: "500%", duration: 3, ease: "power2.inOut"}, "+=0.25")
  .to(".visual.chapter2.no2", {opacity: 0}, "<")
  .to(".bgt.chapter2.no1", {opacity: 1}, "<")
  
  /* ---- Animation chapitre 3 ---- */

gsap.timeline({
  scrollTrigger: {
    pin: true,
    scrub: true,
    toggleActions: "restart complete reverse reset",
    trigger: "#chapter3"
  }
})

  .to("#chapter3 h2", {opacity: 0, duration: 2})
  .to("#parallax-bg-1", {y: "-300px", ease: "none"}, "-=0.5")
  .to("#parallax-bg-2", {y: "600px", ease: "none"}, "<")
  .from(".bg.chapter3.no1", {y: "100%", duration: 2, ease: "power2.inOut"}, "+=1")
  .from(".p-chapter3-1", {y: "500%", duration: 2, ease: "power2.inOut"}, "<")

  .from(".bg.chapter3.no2", {x: "-100%", duration: 2, ease: "power2.inOut"}, "+=3")
  .from(".p-chapter3-2", {x: "-125%", duration: 2, ease: "power2.inOut"}, "<")
  .to(".bg.chapter3.no1", {x: "100%", duration: 2, ease: "power2.inOut"}, "<")
  .to(".p-chapter3-1", {x: "100%", duration: 2, ease: "power2.inOut"}, "<");

/* ---- Animation chapitre 4 ---- */

gsap.timeline({
  scrollTrigger: {
    pin: true,
    scrub: true,
    toggleActions: "restart complete reverse reset",
    trigger: "#chapter4"
  }
})

  .to("#chapter4 h2", {opacity: 0, duration: 2})
  .from(".p-chapter4", {x: "-60%", duration: 3, ease: "power2.inOut"}, "-=0.5");

  /* ---- Animation chapitre 5 ---- */

gsap.timeline({
  scrollTrigger: {
    pin: true,
    scrub: true,
    toggleActions: "restart complete reverse reset",
    trigger: "#chapter5"
  }
})

  .to("#chapter5 h2", {opacity: 0, duration: 2})
  .from(".p-chapter5-1", {y: "525%", duration: 1, ease: "power2.inOut"}, "-=0.5")
  .from(".visual.chapter5.no1", {x: "100%", duration: 2, ease: "power2.inOut"}, "+=1")

  .to(".character.chapter5.no1", {x: "-100%", duration: 2, ease: "power2.inOut"}, "<")
  .to(".p-chapter5-1", {x: "-300%", duration: 2, ease: "power2.inOut"}, "<")
  .from(".p-chapter5-2", {x: "-100%", duration: 2, ease: "power2.inOut"}, "<")

  .from(".bgt.chapter5.no1", {x: "-100%", duration: 2, ease: "power2.inOut"}, "+=1")
  .to(".visual.chapter5.no1", {x: "200%", duration: 2, ease: "power2.inOut"}, "<")
  .to(".p-chapter5-2", {x: "200%", duration: 2, ease: "power2.inOut"}, "<")
  .from(".p-chapter5-3", {x: "-400%", duration: 2, ease: "power2.inOut"}, "<");


  /* ---- Animation chapitre 6 ---- */

gsap.timeline({
  scrollTrigger: {
    pin: true,
    toggleActions: "restart complete reverse reset",
    trigger: "#chapter6"
  }
})

  .to("#chapter6 h2", {opacity: 0, duration: 2})
  .from(".p-chapter6-1", {x: "400%", duration: 2, ease: "power2.inOut"})

  .from(".bg.chapter6.no1", {y: "100%", duration: 2, ease: "power2.inOut"}, "+=3")
  .to(".p-chapter6-1", {opacity: 0}, "<")
  .to(".ixy-ciel", {opacity: 0}, "<")
  .from(".p-chapter6-2", {x: "100%", duration: 2, ease: "power2.inOut"}, "<")
  .from(".character.chapter6.no1", {y: "500%", duration: 5, repeat: -1, ease: "sine.in"}, "<");
  
