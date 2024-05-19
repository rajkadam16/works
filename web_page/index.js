function homePage(){
    gsap.set(".slidesm",{scale:"5"})
    var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".home",
        start:"top top",
        end:"bottom bottom",

        scrub: 2

    },  
})
tl
.to(".vide",{
    '--clip':"0%",
    ease: Power2

},'a')
.to(".slidesm",{
    scale:1,
    ease: Power2

},'a')
.to(".lft",{
    xPercent: -10,
    stagger:0.3,
    ease: Power4

},"b")
.to(".rgt",{
    xPercent: 10,
    stagger:0.3,
    ease: Power4

},"b")
}

// gsap.to(".slide",{
//     scrollTrigger:{
//         trigger:".slide",
//         start:"top top",
//         end:"bottom bottom",
//         markers:true
//     },
//     xPercent :-200,
//     rase: Power4
// });

homePage()