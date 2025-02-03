gsap.registerPlugin(ScrollTrigger)

// Pin world to left-center of webpage
let tl = gsap.timeline({
  defaults: { ease: "none" },
  scrollTrigger: {
    trigger: ".world-container",
    pin: true,
    start: "top",
    end: "bottom",
    scrub: 1,
    invalidatOnRefresh: true
  }
});

// Rotate world 
tl.to(".world", {
  rotation: -360,
  ease: "none",
  scrollTrigger: {
    start: 0,
    end: "+=5000",
    pin: ".container",
    scrub: 1
  }
})

// Animate arrow movement
gsap.to(".arrow", {y: -10, yoyo: true, repeat: -1})