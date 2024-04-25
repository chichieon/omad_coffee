
$(function () {
  var swiper = new Swiper('.gallery .gallery_inner ', {
    slidesPerView: 3,//보여지는 갤러리 수
    spaceBetween: 60,//갤러리 사이 간격
    speed: 1500,//버튼을 슬라이드가 넘어가는 시간
    autoplay: {
      delay: 3500,//자동으로 넘어가기 전 머무르는 시간
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
  AOS.init({
    duration: 1000 //aos 나타나는 속도
  });
});

$(window).scroll(function () {
  var height = $(window).scrollTop();


  if (height > 800) {
      $('.top_icon').css({ "display": "block" })
  }
});
//top아이콘 안보이다가 나타나게

$(function () {
  $('.nav>ul>li').mouseover(function () {
      $(this).children('.sub').stop().slideDown();
  });
});
$(function () {
  $('.nav>ul>li').mouseout(function () {
      $(this).children('.sub').stop().slideUp();
  });
});
//서브메뉴 슬라이드