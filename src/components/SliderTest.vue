<script setup lang="js">
var bg = document.querySelector('.item-bg');
var items = document.querySelectorAll('.news__item');
var item = document.querySelector('.news__item');

function cLog(content) {
    console.log(content)
}

if($(window).width() > 800) {
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



</script>

<template>
<div class="wrapper">
  <div class="background">
    <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1537132206/news-slider/background.webp" alt="">
  </div>
  <div class="item-bg"></div>

  <div class="news-slider">
    <div class="news-slider__wrp swiper-wrapper">
      <div class="news-slider__item swiper-slide">
        <a href="#" class="news__item">
          <div class="news-date">
            <span class="news-date__title">24</span>
            <span class="news-date__txt">May</span>
          </div>
          <div class="news__title">
            Lorem Ipsum Dolor Sit Amed
          </div>

          <p class="news__txt">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
          </p>

          <div class="news__img">
            <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1537132205/news-slider/item-2.webp" alt="news">
          </div>
        </a>
      </div>

      <div class="news-slider__item swiper-slide">
        <a href="#" class="news__item">
          <div class="news-date">
            <span class="news-date__title">25</span>
            <span class="news-date__txt">May</span>
          </div>
          <div class="news__title">
            Lorem Ipsum Dolor Sit Amed
          </div>

          <p class="news__txt">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
          </p>

          <div class="news__img">
            <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1537132205/news-slider/item-3.webp" alt="news">
          </div>
        </a>
      </div>

      <div class="news-slider__item swiper-slide">
        <a href="#" class="news__item">
          <div class="news-date">
            <span class="news-date__title">26</span>
            <span class="news-date__txt">May</span>
          </div>
          <div class="news__title">
            Lorem Ipsum Dolor Sit Amed
          </div>

          <p class="news__txt">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
          </p>

          <div class="news__img">
            <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1537132205/news-slider/item-4.webp" alt="news">
          </div>
        </a>
      </div>

      <div class="news-slider__item swiper-slide">
        <a href="#" class="news__item">
          <div class="news-date">
            <span class="news-date__title">27</span>
            <span class="news-date__txt">May</span>
          </div>
          <div class="news__title">
            Lorem Ipsum Dolor Sit Amed
          </div>

          <p class="news__txt">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
          </p>

          <div class="news__img">
            <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1537132205/news-slider/item-2.webp" alt="news">
          </div>
        </a>
      </div>

      <div class="news-slider__item swiper-slide">
        <a href="#" class="news__item">
          <div class="news-date">
            <span class="news-date__title">28</span>
            <span class="news-date__txt">May</span>
          </div>
          <div class="news__title">
            Lorem Ipsum Dolor Sit Amed
          </div>

          <p class="news__txt">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
          </p>

          <div class="news__img">
            <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1537132205/news-slider/item-5.webp" alt="news">
          </div>
        </a>
      </div>

      <div class="news-slider__item swiper-slide">
        <a href="#" class="news__item">
          <div class="news-date">
            <span class="news-date__title">29</span>
            <span class="news-date__txt">May</span>
          </div>
          <div class="news__title">
            Lorem Ipsum Dolor Sit Amed
          </div>

          <p class="news__txt">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
          </p>

          <div class="news__img">
            <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1537132205/news-slider/item-4.webp" alt="news">
          </div>
        </a>
      </div>
    </div>

    <div class="news-slider__ctr">

      <div class="news-slider__arrows">
        <button class="news-slider__arrow news-slider-prev">
          <span class="icon-font">
            <svg class="icon icon-arrow-left"><use xlink:href="#icon-arrow-left"></use></svg>
          </span>
        </button>
        <button class="news-slider__arrow news-slider-next">
          <span class="icon-font">
            <svg class="icon icon-arrow-right"><use xlink:href="#icon-arrow-right"></use></svg>
          </span>
        </button>
      </div>

      <div class="news-slider__pagination"></div>

    </div>

  </div>

</div>

<svg hidden="hidden">
  <defs>
    <symbol id="icon-arrow-left" viewBox="0 0 32 32">
      <title>arrow-left</title>
      <path d="M0.704 17.696l9.856 9.856c0.896 0.896 2.432 0.896 3.328 0s0.896-2.432 0-3.328l-5.792-5.856h21.568c1.312 0 2.368-1.056 2.368-2.368s-1.056-2.368-2.368-2.368h-21.568l5.824-5.824c0.896-0.896 0.896-2.432 0-3.328-0.48-0.48-1.088-0.704-1.696-0.704s-1.216 0.224-1.696 0.704l-9.824 9.824c-0.448 0.448-0.704 1.056-0.704 1.696s0.224 1.248 0.704 1.696z"></path>
    </symbol>
    <symbol id="icon-arrow-right" viewBox="0 0 32 32">
      <title>arrow-right</title>
      <path d="M31.296 14.336l-9.888-9.888c-0.896-0.896-2.432-0.896-3.328 0s-0.896 2.432 0 3.328l5.824 5.856h-21.536c-1.312 0-2.368 1.056-2.368 2.368s1.056 2.368 2.368 2.368h21.568l-5.856 5.824c-0.896 0.896-0.896 2.432 0 3.328 0.48 0.48 1.088 0.704 1.696 0.704s1.216-0.224 1.696-0.704l9.824-9.824c0.448-0.448 0.704-1.056 0.704-1.696s-0.224-1.248-0.704-1.664z"></path>
    </symbol>
  </defs>
</svg>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Quicksand:400,500,700&subset=latin-ext');

html {
  position: relative;
  overflow-x: hidden!important;
}

body {
  font-family: 'Quicksand', sans-serif;
}

a, a:hover {
  text-decoration: none;
}

.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}

.background {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(45deg, rgba(209, 0, 42, 0.6) 0%, #0E5DC4 100%);
    opacity: 0.9;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
    user-select: none;
  }

}

.item-bg {
  width: 300px;
  height: 500px;
  position: absolute;
  top: 30px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 6px 26px 6px rgba(0,0,0,0.25);
  opacity: 0;
  transition: all .3s;
  left: -30px;
  //left: 50%;
  //transform: translateX(-50%);

  &.active {
    left: 0;
    top: 0;
    opacity: 1;
  }

}

.news {

  &-slider {
    z-index: 2;
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 60px;

    @media screen and (max-width: 1300px){
      max-width: 1000px;
    }

    @media screen and (max-width: 576px) {
      margin-top: 45px;
    }

    &__wrp {
      display: flex;
      align-items: flex-start;
      position: relative;
      z-index: 2;
    }

    &__item {
      width: 400px;
      flex-shrink: 0;
      //padding: 15px;

      @media screen and (max-width: 992px) {
        width: 340px;
      }

      &.swiper-slide {
        opacity: 0;
        pointer-events: none;
        transition: all .3s;
      }

      &.swiper-slide-active,
      &.swiper-slide-prev,
      &.swiper-slide-next {
        opacity: 1;
        pointer-events: auto;
      }


    }

    &__ctr {
      position: relative;
      z-index: 12;
    }

    &__arrow {
      background: #fff;
      border: none;
      display: inline-flex;
      width: 50px;
      height: 50px;
      justify-content: center;
      align-items: center;
      box-shadow: 0 6px 26px 6px rgba(0,0,0,0.25);
      border-radius: 50%;
      position: absolute;
      top: 50%;
      z-index: 12;
      cursor: pointer;
      outline: none!important;

      &:focus {
        outline: none!important;
      }

      .icon-font {
        display: inline-flex;
      }

      &.news-slider-prev {
        left: 15px;
        transform: translateY(-50%);
      }

      &.news-slider-next {
        right: 15px;
        transform: translateY(-50%);
      }

    }

    &__pagination {
      text-align: center;
      margin-top: 50px;

      // @media screen and (max-width: 576px) {
      //   margin-top: 50px;
      // }

      .swiper-pagination-bullet {
        width: 13px;
        height: 10px;
        display: inline-block;
        background: #fff;
        opacity: .2;
        margin: 0 5px;
        border-radius: 20px;
        transition: opacity .5s, background-color .5s, width .5s;
        transition-delay: .5s, .5s, 0s;
      }

      .swiper-pagination-bullet-active {
        opacity: 1;
        background: #ffffff;
        width: 100px;
        transition-delay: 0s;

        @media screen and (max-width: 576px) {
          width: 70px;
        }

      }
    }

  }

  &__item {
    padding: 40px;
    color: #fff;
    border-radius: 10px;
    display: block;
    transition: all .3s;

    @media screen and (min-width: 800px) {
      &:hover {
        color: #222222;
        transition-delay: .1s;
        //background: #fff;
        //box-shadow: 0 6px 26px 6px rgba(0,0,0,0.25);

        .news-date,.news__title,.news__txt {
          opacity: 1;
          transition-delay: .1s;
        }

        .news__img {
          box-shadow: none;
        }

      }
    }



    &.active {
      color: #222222;

      .news-date,.news__title,.news__txt {
        opacity: 1;
      }

      .news__img {
        box-shadow: none;
      }

    }

    @media screen and (max-width: 992px) {
      padding: 30px;
    }

    @media screen and (max-width: 576px) {
      padding: 20px;
    }

  }

  &-date {
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 2px solid;
    display: inline-block;
    opacity: .7;
    transition: opacity .3s;

    @media screen and (max-width: 576px) {
      margin-bottom: 10px;
      display: inline-flex;
      align-items: center;
      padding-bottom: 0;
    }

    &__title {
      display: block;
      font-size: 32px;
      margin-bottom: 10px;
      font-weight: 500;

      @media screen and (max-width: 576px) {
        margin-right: 10px;
      }

    }

    &__txt {
      font-size: 16px;
    }

  }

  &__title {
    font-size: 25px;
    font-weight: 500;
    opacity: .7;
    margin-top: 10px;
    margin-bottom: 15px;
    transition: opacity .3s;

    @media screen and (max-width: 576px) {
      font-size: 22px;
      margin-bottom: 10px;
    }

  }

  &__txt {
    margin: 10px 0;
    line-height: 1.6em;
    font-size: 15px;
    opacity: .7;
    transition: opacity .3s;
  }

  &__img {
    border-radius: 10px;
    box-shadow: 0 6px 26px 6px rgba(0,0,0,0.25);
    height: 200px;
    margin-top: 30px;
    width: 100%;
    transition: all .3s;
    transform-origin: 0% 0%;

    @media screen and (max-width: 576px) {
      height: 180px;
      margin-top: 20px;
    }

    img {
      max-width: 100%;
      border-radius: 10px;
      height: 100%;
      width: 100%;
    }

  }


}

</style>