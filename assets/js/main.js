$('#slider').owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    autoplay:true,
    // animateOut: 'fadeIn',
    // animateIn: 'fadeOut',
    stagePadding: 350,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    initialSlide:2,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 40,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : false,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });