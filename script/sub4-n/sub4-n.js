
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
