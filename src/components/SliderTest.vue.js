const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
var bg = document.querySelector('.item-bg');
var items = document.querySelectorAll('.news__item');
var item = document.querySelector('.news__item');
function cLog(content) {
    console.log(content);
}
if ($(window).width() > 800) {
    $(document).on("mouseover", ".news__item", function (_event, _element) {
        var newsItem = document.querySelectorAll('.news__item');
        newsItem.forEach(function (element, index) {
            element.addEventListener('mouseover', function () {
                var x = this.getBoundingClientRect().left;
                var y = this.getBoundingClientRect().top;
                var width = this.getBoundingClientRect().width;
                var height = this.getBoundingClientRect().height;
                $('.item-bg').addClass('active');
                $('.news__item').removeClass('active');
                // $('.news__item').removeClass('active');
                bg.style.width = width + 'px';
                bg.style.height = height + 'px';
                bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
            });
            element.addEventListener('mouseleave', function () {
                $('.item-bg').removeClass('active');
                $('.news__item').removeClass('active');
            });
        });
    });
}
var swiper = new Swiper('.news-slider', {
    effect: 'coverflow',
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    keyboard: true,
    spaceBetween: 0,
    slidesPerView: 'auto',
    speed: 300,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 3,
        slideShadows: false
    },
    breakpoints: {
        480: {
            spaceBetween: 0,
            centeredSlides: true
        }
    },
    simulateTouch: true,
    navigation: {
        nextEl: '.news-slider-next',
        prevEl: '.news-slider-prev'
    },
    pagination: {
        el: '.news-slider__pagination',
        clickable: true
    },
    on: {
        init: function () {
            var activeItem = document.querySelector('.swiper-slide-active');
            var sliderItem = activeItem.querySelector('.news__item');
            $('.swiper-slide-active .news__item').addClass('active');
            var x = sliderItem.getBoundingClientRect().left;
            var y = sliderItem.getBoundingClientRect().top;
            var width = sliderItem.getBoundingClientRect().width;
            var height = sliderItem.getBoundingClientRect().height;
            $('.item-bg').addClass('active');
            bg.style.width = width + 'px';
            bg.style.height = height + 'px';
            bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
        }
    }
});
swiper.on('touchEnd', function () {
    $('.news__item').removeClass('active');
    $('.swiper-slide-active .news__item').addClass('active');
});
swiper.on('slideChange', function () {
    $('.news__item').removeClass('active');
});
swiper.on('slideChangeTransitionEnd', function () {
    $('.news__item').removeClass('active');
    var activeItem = document.querySelector('.swiper-slide-active');
    var sliderItem = activeItem.querySelector('.news__item');
    $('.swiper-slide-active .news__item').addClass('active');
    var x = sliderItem.getBoundingClientRect().left;
    var y = sliderItem.getBoundingClientRect().top;
    var width = sliderItem.getBoundingClientRect().width;
    var height = sliderItem.getBoundingClientRect().height;
    $('.item-bg').addClass('active');
    bg.style.width = width + 'px';
    bg.style.height = height + 'px';
    bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
});
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("background") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1537132206/news-slider/background.webp"), alt: (""), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("item-bg") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("news-slider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("news-slider__wrp swiper-wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("news-slider__item swiper-slide") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), ...{ class: ("news__item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("news-date") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("news-date__title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("news-date__txt") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("news__title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("news__txt") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("news__img") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1537132205/news-slider/item-2.webp"), alt: ("news"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("news-slider__item swiper-slide") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), ...{ class: ("news__item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("news-date") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("news-date__title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("news-date__txt") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("news__title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("news__txt") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("news__img") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1537132205/news-slider/item-3.webp"), alt: ("news"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("news-slider__item swiper-slide") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), ...{ class: ("news__item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("news-date") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("news-date__title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("news-date__txt") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("news__title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("news__txt") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("news__img") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1537132205/news-slider/item-4.webp"), alt: ("news"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("news-slider__item swiper-slide") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), ...{ class: ("news__item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("news-date") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("news-date__title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("news-date__txt") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("news__title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("news__txt") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("news__img") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1537132205/news-slider/item-2.webp"), alt: ("news"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("news-slider__item swiper-slide") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), ...{ class: ("news__item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("news-date") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("news-date__title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("news-date__txt") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("news__title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("news__txt") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("news__img") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1537132205/news-slider/item-5.webp"), alt: ("news"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("news-slider__item swiper-slide") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), ...{ class: ("news__item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("news-date") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("news-date__title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("news-date__txt") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("news__title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("news__txt") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("news__img") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1537132205/news-slider/item-4.webp"), alt: ("news"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("news-slider__ctr") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("news-slider__arrows") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("news-slider__arrow news-slider-prev") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("icon-font") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ ...{ class: ("icon icon-arrow-left") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.use, __VLS_intrinsicElements.use)({ "xlink:href": ("#icon-arrow-left"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("news-slider__arrow news-slider-next") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("icon-font") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ ...{ class: ("icon icon-arrow-right") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.use, __VLS_intrinsicElements.use)({ "xlink:href": ("#icon-arrow-right"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("news-slider__pagination") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ hidden: ("hidden"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.defs, __VLS_intrinsicElements.defs)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.symbol, __VLS_intrinsicElements.symbol)({ id: ("icon-arrow-left"), viewBox: ("0 0 32 32"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.title, __VLS_intrinsicElements.title)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({ d: ("M0.704 17.696l9.856 9.856c0.896 0.896 2.432 0.896 3.328 0s0.896-2.432 0-3.328l-5.792-5.856h21.568c1.312 0 2.368-1.056 2.368-2.368s-1.056-2.368-2.368-2.368h-21.568l5.824-5.824c0.896-0.896 0.896-2.432 0-3.328-0.48-0.48-1.088-0.704-1.696-0.704s-1.216 0.224-1.696 0.704l-9.824 9.824c-0.448 0.448-0.704 1.056-0.704 1.696s0.224 1.248 0.704 1.696z"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.symbol, __VLS_intrinsicElements.symbol)({ id: ("icon-arrow-right"), viewBox: ("0 0 32 32"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.title, __VLS_intrinsicElements.title)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({ d: ("M31.296 14.336l-9.888-9.888c-0.896-0.896-2.432-0.896-3.328 0s-0.896 2.432 0 3.328l5.824 5.856h-21.536c-1.312 0-2.368 1.056-2.368 2.368s1.056 2.368 2.368 2.368h21.568l-5.856 5.824c-0.896 0.896-0.896 2.432 0 3.328 0.48 0.48 1.088 0.704 1.696 0.704s1.216-0.224 1.696-0.704l9.824-9.824c0.448-0.448 0.704-1.056 0.704-1.696s-0.224-1.248-0.704-1.664z"), });
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['wrapper'];
        __VLS_styleScopedClasses['background'];
        __VLS_styleScopedClasses['item-bg'];
        __VLS_styleScopedClasses['news-slider'];
        __VLS_styleScopedClasses['news-slider__wrp'];
        __VLS_styleScopedClasses['swiper-wrapper'];
        __VLS_styleScopedClasses['news-slider__item'];
        __VLS_styleScopedClasses['swiper-slide'];
        __VLS_styleScopedClasses['news__item'];
        __VLS_styleScopedClasses['news-date'];
        __VLS_styleScopedClasses['news-date__title'];
        __VLS_styleScopedClasses['news-date__txt'];
        __VLS_styleScopedClasses['news__title'];
        __VLS_styleScopedClasses['news__txt'];
        __VLS_styleScopedClasses['news__img'];
        __VLS_styleScopedClasses['news-slider__item'];
        __VLS_styleScopedClasses['swiper-slide'];
        __VLS_styleScopedClasses['news__item'];
        __VLS_styleScopedClasses['news-date'];
        __VLS_styleScopedClasses['news-date__title'];
        __VLS_styleScopedClasses['news-date__txt'];
        __VLS_styleScopedClasses['news__title'];
        __VLS_styleScopedClasses['news__txt'];
        __VLS_styleScopedClasses['news__img'];
        __VLS_styleScopedClasses['news-slider__item'];
        __VLS_styleScopedClasses['swiper-slide'];
        __VLS_styleScopedClasses['news__item'];
        __VLS_styleScopedClasses['news-date'];
        __VLS_styleScopedClasses['news-date__title'];
        __VLS_styleScopedClasses['news-date__txt'];
        __VLS_styleScopedClasses['news__title'];
        __VLS_styleScopedClasses['news__txt'];
        __VLS_styleScopedClasses['news__img'];
        __VLS_styleScopedClasses['news-slider__item'];
        __VLS_styleScopedClasses['swiper-slide'];
        __VLS_styleScopedClasses['news__item'];
        __VLS_styleScopedClasses['news-date'];
        __VLS_styleScopedClasses['news-date__title'];
        __VLS_styleScopedClasses['news-date__txt'];
        __VLS_styleScopedClasses['news__title'];
        __VLS_styleScopedClasses['news__txt'];
        __VLS_styleScopedClasses['news__img'];
        __VLS_styleScopedClasses['news-slider__item'];
        __VLS_styleScopedClasses['swiper-slide'];
        __VLS_styleScopedClasses['news__item'];
        __VLS_styleScopedClasses['news-date'];
        __VLS_styleScopedClasses['news-date__title'];
        __VLS_styleScopedClasses['news-date__txt'];
        __VLS_styleScopedClasses['news__title'];
        __VLS_styleScopedClasses['news__txt'];
        __VLS_styleScopedClasses['news__img'];
        __VLS_styleScopedClasses['news-slider__item'];
        __VLS_styleScopedClasses['swiper-slide'];
        __VLS_styleScopedClasses['news__item'];
        __VLS_styleScopedClasses['news-date'];
        __VLS_styleScopedClasses['news-date__title'];
        __VLS_styleScopedClasses['news-date__txt'];
        __VLS_styleScopedClasses['news__title'];
        __VLS_styleScopedClasses['news__txt'];
        __VLS_styleScopedClasses['news__img'];
        __VLS_styleScopedClasses['news-slider__ctr'];
        __VLS_styleScopedClasses['news-slider__arrows'];
        __VLS_styleScopedClasses['news-slider__arrow'];
        __VLS_styleScopedClasses['news-slider-prev'];
        __VLS_styleScopedClasses['icon-font'];
        __VLS_styleScopedClasses['icon'];
        __VLS_styleScopedClasses['icon-arrow-left'];
        __VLS_styleScopedClasses['news-slider__arrow'];
        __VLS_styleScopedClasses['news-slider-next'];
        __VLS_styleScopedClasses['icon-font'];
        __VLS_styleScopedClasses['icon'];
        __VLS_styleScopedClasses['icon-arrow-right'];
        __VLS_styleScopedClasses['news-slider__pagination'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {};
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
