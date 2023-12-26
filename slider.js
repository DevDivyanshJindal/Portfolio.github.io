 const hamburger = document.getElementById("hamburger");
 const navlist = document.getElementById("navlist");

hamburger.addEventListener("click", ()=>{

  navlist.classList.toggle("navlist-active")

})


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    // autoplay:{
    //   Delay: 2500
    // }
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
