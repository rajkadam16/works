const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function page2() {
  let elemc = document.querySelector("#elem-container");
  let fix = document.querySelector("#fix-img");

  elemc.addEventListener("mouseenter", function () {
    fix.style.display = "block";
  });
  elemc.addEventListener("mouseleave", function () {
    fix.style.display = "none";
  });
  let elems = document.querySelectorAll(".elem");
  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      let image = e.getAttribute("data-img");
      fix.style.backgroundImage = `url(${image})`;
    });
  });

}
function swiperanimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 50,
  });
}
function menuanimation(){
  var menu = document.querySelector("nav h3")
var full = document.querySelector("#full-ser")
var navimg = document.querySelector("nav img")
var flag = 0
menu.addEventListener("click", function () {
    if (flag == 0) {
        full.style.top = 0
        navimg.style.opacity = 0
        flag = 1
    } else {
        full.style.top = "-100%"
        navimg.style.opacity = 1
        flag = 0
    }
})

}
function loader(){
  let loader=document.querySelector("#loader")
setTimeout(function() {
  loader.style.top = "-100%"
}, 4000);

}

  let colo= document.querySelector("#color")
function changeImage(filename){
 let chimg= document.querySelector("#ch-img")
 chimg.setAttribute('src',filename);
}


loader()
menuanimation()
page2()
swiperanimation()





