var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,

  autoplay: {
    delay: 2000,          // 2 sec
    disableOnInteraction: false,
  },
});

const scroll = new FeatherScroll({
  smooth: true, // Enable smooth scrolling
  duration: .7, // Scroll duration (seconds)
  easing: (t) => 1 - Math.pow(1 - t, 3), // Easing function
  direction: 'vertical', // 'vertical' | 'horizontal'
  gestureDirection: 'both', // Mouse/touch gesture control
  mouseSensitivity: 1, // Sensitivity for wheel scrolling
  touchSensitivity: 2, // Sensitivity for touch scrolling
  infinite: false // Infinite scrolling
});

var image1 = document.querySelector(".img1")
var image2 = document.querySelector(".img2")
var image3 = document.querySelector(".img3")

gsap.from("image1",{
    y:50,duration:.7,ease: "back",opacity:0
})
gsap.from("image3",{
    y:-35,duration:.7,ease: "back",opacity:0
})
gsap.from("image2",{
    x:50,duration:.7,ease: "back",opacity:0
})
gsap.registerPlugin(ScrollTrigger);
gsap.from(".pg2-h6",{
    y: 100,duration:.5,ease:"power1",opacity:0,
    scrollTrigger:{
        trigger: ".pg2",
        start: "top 50%",
    }
})
gsap.from(".pg2-h2",{
    y: 100,duration:.5,ease:"power1",opacity:0,
    scrollTrigger:{
        trigger: ".pg2",
        start: "top 40%",
    }
})
gsap.from("#pg2btn",{
    y: 100,duration:.5,ease:"power1",opacity:0,
    scrollTrigger:{
        trigger: ".pg2",
        start: "top 30%",
    }
})
gsap.from(".pg3-img1,.pg3-img2,.pg3-img3,.pg3-img4",{
    y: 100,ease:"power1",stagger:{
        from:"start",each:0.2
    },opacity:0,
    scrollTrigger:{
        trigger: ".pg3",
        start: "top 70%",
    }
})
gsap.from("#sec",{
    y: 100,duration:.8,ease:"power1",opacity:0,
    scrollTrigger:{
        trigger: "section",
        start: "top 60%",
    }
})
gsap.from(".pg5-img",{
    y: 100,duration:.8,ease:"power1",opacity:0,
    scrollTrigger:{
        trigger: ".pg5",
        start: "top 60%",
    }
})
gsap.from(".tfd",{
    ease:"power1",opacity:0,stagger:{
        each:".4",from:"start",
    },y:70,
    scrollTrigger:{
        trigger: "footer",
        start: "top 50%",
    }
})