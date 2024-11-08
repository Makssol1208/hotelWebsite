// Carousel

const slideOne = $('.slide-one');
const slideTwo = $('.slide-two');

slideOne.owlCarousel({
    center: true,
    loop: false,
    dots: false,
    items: 1,
    autoplay: false,
    autoplaySpeed: 1000,

    dots: true,
});

slideTwo.owlCarousel({
    center: true,
    loop: true,
    dots: false,
    items: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    navContainer: '.slider .slide-two-nav',
    dots: false,
});

$('.carousel-btn--next').click(function () {
    slideTwo.trigger('next.owl.carousel');
});

$('.carousel-btn--prev').click(function () {
    slideTwo.trigger('prev.owl.carousel');
});

// ScrollReveal

ScrollReveal({
    reset: false,
    distance: "100px",
    duration: 2000,
    delay: 100,
    mobile: false
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
        if (target === modal || target.closest('.modal__close') || target.closest('.modal__send')) {
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