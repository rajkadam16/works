function loading() {
    var t1 = gsap.timeline()

    t1.to("#yellow1", {
        top: "-100%",
        delay: 0.5,
        duration: 1.75,
        ease: "expo.out"
    })
    t1.from("#yellow2", {
        top: "100%",
        delay: 0.6,
        duration: 0.8,
        ease: "expo.out"
    }, "amim")
    t1.to("#loader h1", {
        delay: 0.7,
        duration: 0.8,
        color: "black",
    }, "amin")
    t1.to("#loader", {
        opacity: 0,
    })
    t1.to("#loader", {
        display: "none",
    })
}
loading()

function loco(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
    
    document.querySelector("#footer h2").addEventListener("click",function(){
        scroll.scrollTo(0)
    })
    
    var elem = document.querySelectorAll(".elem");
    var page2 = document.querySelector("#page2")
    elem.forEach(function (elm) {
        elm.addEventListener("mouseenter", function () {
            var bgimg = elm.getAttribute("data-img")
            page2.style.backgroundImage = `url(${bgimg})`
        })
    })
    
}
loco();