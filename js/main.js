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

ScrollReveal().reveal('.hero__title', { delay: 400, origin: "left" });
ScrollReveal().reveal('.hero__main', { delay: 500, origin: "left" });
ScrollReveal().reveal('.hero__bottom, .hero__text', { delay: 600, origin: "left" });

// Modal
const modalController = () => {
    const modal = document.querySelector('.booking-modal');
    const bookBtn = document.querySelector('.header-btn');

    modal.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity 300ms ease-in-out;
`;

    const closeModal = event => {
        const target = event.target;
        if (target === modal || target.closest('.modal__close') || target.closest('.modal__send') ) {
            modal.style.opacity = 0;

            setTimeout(() => {
                modal.style.visibility = 'hidden';
            }, 300);
        }
    }

    const modalOpen = () => {
        modal.style.visibility = 'visible';
        modal.style.opacity = 1;
    }

    bookBtn.addEventListener('click', modalOpen);
    modal.addEventListener('click', closeModal);
};

modalController();