$(function () {

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

  $('.tabcontent > div').hide();
  $('.tabnav a').click(function () {
    $('.tabcontent > div').hide().filter(this.hash).fadeIn();
    $('.tabnav a').removeClass('active');
    $(this).addClass('active');
    return false;
  }).filter(':eq(0)').click();
  //탭메뉴
});


$(window).scroll(function () {
  var height = $(window).scrollTop();


  if (height > 1400) {
    $('.top_icon_white').css({ "display": "block" })
  }  
  if (height > 3400) {
    $('.top_icon_white').css({ "display": "none" });
  }
  // top아이콘 흰색 부분

  if (height > 3400) {
    $('.top_icon').css({ "display": "block" })
  }
 
  //top아이콘 안보이다가 나타나게

  if (height > 1350) {
    $('.wrap .text').addClass('text_fixed');
    $('.wrap .text').css({ "opacity": "1" });
  } else {
    $('.wrap .text').removeClass('text_fixed');
  }
  if (height > 2487) {
    $('.wrap .text').css({ "opacity": "0" });
  }
  if (height >= 2700) {
    $('.wrap .text').removeClass('text_fixed');
  }
  //브랜드스토리 텍스트 설정

  if (height < 1600) {
    $('.text_box2 ul li:nth-child(1)').addClass('on');
    $('.card_box div:nth-child(1)').addClass('card_on');
    $('.card_box div:nth-child(1)>img').addClass('img_on');
    $('.wrap').css({ "background-image": " url(./images/sub1/2.brand_story/brandstory_1.png)" });
  } else {
    $('.text_box2 ul li:nth-child(1)').removeClass('on');
    $('.card_box div:nth-child(1)').removeClass('card_on');
    $('.card_box div:nth-child(1)>img').removeClass('img_on');

  }

  if ((height >= 1600) && (height < 1900)) {
    $('.text_box2 ul li:nth-child(2)').addClass('on');
    $('.card_box div:nth-child(2)').addClass('card_on');
    $('.card_box div:nth-child(2)>img').addClass('img_on');
    $('.wrap').css({ "background-image": " url(./images/sub1/2.brand_story/brandstory_2.png)" });

  } else {
    $('.text_box2 ul li:nth-child(2)').removeClass('on');
    $('.card_box div:nth-child(2)').removeClass('card_on');
    $('.card_box div:nth-child(2)>img').removeClass('img_on');


  }

  if ((height >= 1900) && (height < 2200)) {
    $('.text_box2 ul li:nth-child(3)').addClass('on');
    $('.card_box div:nth-child(3)').addClass('card_on');
    $('.card_box div:nth-child(3)>img').addClass('img_on');
    $('.wrap').css({ "background-image": " url(./images/sub1/2.brand_story/brandstory_3.png)" });

  } else {
    $('.text_box2 ul li:nth-child(3)').removeClass('on');
    $('.card_box div:nth-child(3)').removeClass('card_on');
    $('.card_box div:nth-child(3)>img').removeClass('img_on');

  }

  if ((height >= 2200)) {
    $('.text_box2 ul li:nth-child(4)').addClass('on');
    $('.card_box div:nth-child(4)').addClass('card_on');
    $('.card_box div:nth-child(4)>img').addClass('img_on');
    $('.wrap').css({ "background-image": " url(./images/sub1/2.brand_story/brandstory_4.png)" });
  } else {
    $('.text_box2 ul li:nth-child(4)').removeClass('on');
    $('.card_box div:nth-child(4)').removeClass('card_on');
    $('.card_box div:nth-child(4)>img').removeClass('img_on');
  }
});

//브랜드 소개 제이쿼리

console.log(($(document).scrollTop()));
//브랜드 소개 스크롤값


$(document).ready(function () {
  var isDragging = false;
  var startMouseX;
  var startScrollLeft;

  $('.section_in').mousedown(function (event) {
    isDragging = true;
    startMouseX = event.clientX;
    startScrollLeft = $(this).scrollLeft();
  });

  $(document).mousemove(function (event) {
    if (isDragging) {
      var deltaX = event.clientX - startMouseX;
      $('.section_in').scrollLeft(startScrollLeft - deltaX);
    }
  });

  $(document).mouseup(function () {
    isDragging = false;
  });
});

AOS.init({
  duration: 1000 //aos 나타나는 속도
});
// AOS
