// function locomotiveAnimation() {
//     gsap.registerPlugin(ScrollTrigger);

//     // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
//     const locoScroll = new LocomotiveScroll({
//       el: document.querySelector("#main"),
//       smooth: true
//     });
//     // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
//     locoScroll.on("scroll", ScrollTrigger.update);
    
//     // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
//     ScrollTrigger.scrollerProxy("#main", {
//       scrollTop(value) {
//         return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//       }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//       getBoundingClientRect() {
//         return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//       },
//       // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//       pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
//     });
    
    
    
    
    
//     // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
//     // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
//     ScrollTrigger.refresh();
    
//   }
//   locomotiveAnimation()


function playReel() {

    document.addEventListener('DOMContentLoaded', function() {
        const mainPage = document.getElementById('page1');
        const videoPage = document.getElementById('company-reel');
        const videoPlayer = document.getElementById('videoPlayer');
        const closeVideoBtn = document.getElementById('closeVideoBtn');
        document.addEventListener('DOMContentLoaded', () => {
            locomotiveAnimation();
        });
    
        // Function to show the video page and play the video
        function showVideoPage() {
            // Show the video page
            gsap.to(videoPage, {
                x: 0,
                duration: 0.3,
                ease: 'power2.inOut'
            });
    
            // Play the video
            videoPlayer.play();
        }
    
        // Function to hide the video page and pause the video
        function hideVideoPage() {
            // Hide the video page
            gsap.to(videoPage, {
                x: '-100%',
                duration: 0.3,
                ease: 'power2.inOut',
                onComplete: () => {
                    // Reset the video page position after animation
                    videoPage.style.transform = 'translateX(-100%)';
                }
            });
    
            // Pause the video
            videoPlayer.pause();
        }
    
        // Event listener on the main page (page1) to show video page when clicked
        mainPage.addEventListener('click', function(event) {
            // Check if the click occurred outside the video page and not on the video player
            if (!videoPage.contains(event.target) && event.target !== videoPlayer) {
                showVideoPage();
            }
        });
    
        // Event listener for close button click
        closeVideoBtn.addEventListener('click', hideVideoPage);
    
        // Event listener to close video page when the video ends
        videoPlayer.addEventListener('ended', hideVideoPage);
    });
    
    
}

playReel()


function page1Cursor() {
    var page1Content = document.querySelector('#page1-content')
    var cursor = document.querySelector("#cursor")
    
     page1Content.addEventListener("mousemove", function(dets){
      gsap.to("#cursor",{
       x:dets.x,
       y:dets.y
      })
     })
   
     page1Content.addEventListener("mouseenter", function(){
       gsap.to("#cursor",{
           scale:1,
           opacity:1
       })
   
   
     })
       
   
      page1Content.addEventListener("mouseleave", function(){
       gsap.to("#cursor",{
           scale:0,
           opacity:0
       })
     })
}

page1Cursor()



function textAnimation(){
    const content = document.querySelector('.content');

function checkScroll() {
    const scrollPosition = window.scrollY;
    const contentPosition = content.offsetTop;

    if (scrollPosition > contentPosition - window.innerHeight + 100) {
        content.classList.add('show');
    } else {
        content.classList.remove('show');
    }
    
}

window.addEventListener('scroll', checkScroll);
checkScroll(); // Check on initial load

// Repeat animation
// content.addEventListener('transitionend', () => {
//     content.classList.remove('show');
//     setTimeout(() => {
//         content.classList.add('show');
//     }, 100);
// });
}

textAnimation()


function textAnimation1(){
    const content = document.querySelector('.content1');

function checkScroll() {
    const scrollPosition = window.scrollY;
    const contentPosition = content.offsetTop;

    if (scrollPosition > contentPosition - window.innerHeight + 100) {
        content.classList.add('show');
    } else {
        content.classList.remove('show');
    }
    
}

window.addEventListener('scroll', checkScroll);
checkScroll(); // Check on initial load

// Repeat animation
// content.addEventListener('transitionend', () => {
//     content.classList.remove('show');
//     setTimeout(() => {
//         content.classList.add('show');
//     }, 100);
// });
}

textAnimation1()


function textAnimation2(){
    const content = document.querySelector('.content2');

function checkScroll() {
    const scrollPosition = window.scrollY;
    const contentPosition = content.offsetTop;

    if (scrollPosition > contentPosition - window.innerHeight + 100) {
        content.classList.add('show');
    } else {
        content.classList.remove('show');
    }
    
}

window.addEventListener('scroll', checkScroll);
checkScroll(); // Check on initial load

// Repeat animation
// content.addEventListener('transitionend', () => {
//     content.classList.remove('show');
//     setTimeout(() => {
//         content.classList.add('show');
//     }, 100);
// });
}

textAnimation2()

function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    
}



function loaderAnimation(){
    var tl = gsap.timeline()
tl.from("#loader h3",{
    x:100,
    opacity:0,
    duration:1,
    stagger:0.1
})
tl.to("#loader h3",{
    opacity:0,
    x:-40,
    duration:1,
    stagger:0.1
})
tl.to("#loader ",{
    opacity:0,
})
tl.from("#page1-content h1 span",{
    y:100,
    opacity:0,
    stagger:0.06,
    duration:0.5,
    delay:-0.5
})
tl.to("#loader ",{
   display:"none"
})

}

loaderAnimation ()



function sliderAnimation(){
    document.addEventListener('DOMContentLoaded', function () {
        const slider = document.getElementById('slider');
        const slides = document.querySelector('.slides');
        let isDragging = false;
        let startPos = 0;
        let currentTranslate = 0;
        let prevTranslate = 0;
        let animationId;
    
        function setPositionByIndex() {
            slides.style.transform = `translateX(${currentTranslate}px)`;
        }
    
        function onDragStart(event) {
            isDragging = true;
            startPos = event.type === 'touchstart' ? event.touches[0].clientX : event.clientX;
            cancelAnimationFrame(animationId);
            slides.style.animationPlayState = 'paused';
        }
    
        function onDrag(event) {
            if (isDragging) {
                const currentPosition = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX;
                currentTranslate = prevTranslate + currentPosition - startPos;
                setPositionByIndex();
            }
        }
    
        function onDragEnd() {
            isDragging = false;
            prevTranslate = currentTranslate;
            startAnimation();
        }
    
        function startAnimation() {
            slides.style.animationPlayState = 'running';
            function step() {
                if (!isDragging) {
                    currentTranslate -= 0.4; // Adjust speed as necessary
                    if (currentTranslate <= -slider.clientWidth) {
                        currentTranslate = 0;
                        prevTranslate = 0;
                    }
                    setPositionByIndex();
                    animationId = requestAnimationFrame(step);
                }
            }
            animationId = requestAnimationFrame(step);
        }
    
        slider.addEventListener('mousedown', onDragStart);
        slider.addEventListener('mousemove', onDrag);
        slider.addEventListener('mouseup', onDragEnd);
        slider.addEventListener('mouseleave', onDragEnd);
        slider.addEventListener('touchstart', onDragStart);
        slider.addEventListener('touchmove', onDrag);
        slider.addEventListener('touchend', onDragEnd);
    
        startAnimation();
    });
}
sliderAnimation()


// Select the HTML5 video
const video = document.querySelector("#videoPlayer")
// set the pause button to display:none by default
document.querySelector(".fa-pause").style.display = "none"
// update the progress bar
video.addEventListener("timeupdate", () => {
    let curr = (video.currentTime / video.duration) * 100
    if(video.ended){
        document.querySelector(".fa-play").style.display = "block"
        document.querySelector(".fa-pause").style.display = "none"
    }
    document.querySelector('.inner').style.width = `${curr}%`
})
// pause or play the video
const play = (e) => {
    // Condition when to play a video
    if(video.paused){
        document.querySelector(".fa-play").style.display = "none"
        document.querySelector(".fa-pause").style.display = "block"
        video.play()
    }
    else{
        document.querySelector(".fa-play").style.display = "block"
        document.querySelector(".fa-pause").style.display = "none"
        video.pause()
    }
}
// trigger fullscreen
const fullScreen = (e) => {
    e.preventDefault()
    video.requestFullscreen()
}
// download the video
const download = (e) => {
    e.preventDefault()
    let a = document.createElement('a')
    a.href = video.src 
    a.target = "_blank"
    a.download = ""
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}
// rewind the current time
const rewind = (e) => {
    video.currentTime = video.currentTime - ((video.duration/100) * 5)
}
// forward the current time
const forward = (e) => {
    video.currentTime = video.currentTime + ((video.duration/100) * 5)
}

