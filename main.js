const owl = $('.owl-carousel');

owl.owlCarousel({
    center: true,
    loop: true,
    items: 1,
    autoplay: true,
    autoplaySpeed: 1000
});

$('.carousel-btn--next').click(function() {
    owl.trigger('next.owl.carousel');
})

$('.carousel-btn--prev').click(function() {
    owl.trigger('prev.owl.carousel');
})