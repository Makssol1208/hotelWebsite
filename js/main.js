const owl = $('.owl-carousel');

owl.owlCarousel({
    center: true,
    loop: true,
    items: 1,
    autoplay: true,
    autoplaySpeed: 1000
});

$('.carousel-btn--next').click(function () {
    owl.trigger('next.owl.carousel');
});

$('.carousel-btn--prev').click(function () {
    owl.trigger('prev.owl.carousel');
});

ScrollReveal({
    reset: true,
    distance: "100px",
    duration: 2000,
    delay: 100
});

ScrollReveal().reveal('.hero__title',{delay: 400, origin: "left"});
ScrollReveal().reveal('.hero__main',{delay: 500, origin: "left"});
ScrollReveal().reveal('.hero__bottom, .hero__text',{delay: 600, origin: "left"});