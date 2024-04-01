$(function () {
    var swiper = new Swiper('.slide ', {
      speed: 3000,//버튼을 슬라이드가 넘어가는 시간
      autoplay: {
        delay: 2500,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
      },
      loop: true,//슬라이드 무한반복
      navigation: {//화살표 버튼
        nextEl: '.slide .swiper-button-next',
        prevEl: '.slide .swiper-button-prev',
      }
    });
    // 배너 슬라이드


    $('.nav>ul>li').hover(function () {
      $(this).children('.sub').stop().slideToggle();
    });
    //서브메뉴 슬라이드


    var swiper = new Swiper('.gallery .gallery_inner ', {
      slidesPerView: 3,//보여지는 갤러리 수
      spaceBetween: 80,//갤러리 사이 간격
      speed: 1500,//버튼을 슬라이드가 넘어가는 시간
      autoplay: {
        delay: 2500,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
      },
      loop: true,//슬라이드 무한반복
      navigation: {//화살표 버튼
        nextEl: '.gallery .swiper-button-next',
        prevEl: '.gallery .swiper-button-prev',
      },
      pagination: {//블릿 버튼
        el: '.gallery .swiper-pagination',
        clickable: true,
      },
    });

    //best_item


    var swiper2 = new Swiper('.slide2 ', {
      direction: "vertical",//세로 방향
      speed: 1500,//버튼을 슬라이드가 넘어가는 시간

      loop: true,//슬라이드 무한반복
      pagination: {//블릿 버튼
        el: '.slide2 .swiper-pagination',
        clickable: true,
      },
      mousewheel: true,
      watchOverflow: true,
      on: {
        slideChange: function () {
          setTimeout(function () {
            swiper2.params.touchReleaseOnEdges = false;
            swiper2.params.mousewheel.releaseOnEdges = false;
          });
        },
        reachEnd: function () {
          setTimeout(function () {
            swiper2.params.touchReleaseOnEdges = true;
            swiper2.params.mousewheel.releaseOnEdges = true;
          }, 500);
        },
        reachBeginning: function () {
          setTimeout(function () {
            swiper2.params.touchReleaseOnEdges = true;
            swiper2.params.mousewheel.releaseOnEdges = true;
          }, 500);
        }
      }
    });
    // brewing_guide


    var swiper = new Swiper('.gallery2 .gallery_inner ', {
      slidesPerView: 3,//보여지는 갤러리 수
      spaceBetween: 30,//갤러리 사이 간격
      speed: 1500,//버튼을 슬라이드가 넘어가는 시간
      loop: true,//슬라이드 무한반복
      navigation: {//화살표 버튼
        nextEl: '.gallery2 .swiper-button-next',
        prevEl: '.gallery2 .swiper-button-prev',
      },
      pagination: {//블릿 버튼
        el: '.gallery2 .swiper-pagination',
        clickable: true,
      },
    });
    //card_news

    AOS.init({
      duration: 1000 //aos 나타나는 속도
    });

    $('.section_3>div').mouseenter(function () {
      $(this).css({"width":"830px", "transition":"all 1s"});
      $(this).siblings("div").css({"width":"430px", "transition":"all 1s"});
    });

    $('.section_3>div').mouseleave(function () {
      $(this).css({"width":"630px", "transition":"all 1s"});
      $(this).siblings("div").css({"width":"630px", "transition":"all 1s"});
    });
    //subscript
  });