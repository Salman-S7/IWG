gsap.registerPlugin(ScrollTrigger);

const tmln = gsap.timeline({
    scrollTrigger : {
        trigger: ".container",
        start: "100% 100%",
        end : "+=600%",
        // markers: true,
        scrub:1,
        pin: true,
    }
});
tmln.from(".box",{
    y: 600,
    duration: 2,
})
.to(".box",{
    x: -730,
    y: -300,
    scale: 0.45,
    delay: 1,
    duration: 2,
})
.from(".i-letter",{
    x: "-17.10vw",
    duration: 2,
})
.to(".box",{
    x: 170,
    delay: 1,
    duration :3, 
})
.from(".w-letter",{
    y: "80vh",
    duration: 3,
})
.to(".box",{
    x: 740,
    delay: 1,
    y: -85,
    scale: 0.45,
    duration: 3,
})
.from(".g-letter",{
    x: "35.10vw",
    duration: 2,
})
.to(".box",{
  y:10,
  delay: 1,
  scale: 0,
  duration : 1,
})
.to(".i-letter",{
  duration:3,
  x: "-5.5VW",
  y: -410,
  scale: 0.1,
  delay:1,
})
.to(".w-letter",{
  duration:3,
  x: "-38.5VW",
  y: -410,
  scale: 0.1,

},23)
.to(".g-letter",{
  duration:3,
  x: "-68VW",
  y: -410,
  scale: 0.1, 
},23)
.to(".i-letter, .g-letter, .w-letter",{
    scale: 0,
    duration:1
})


const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

