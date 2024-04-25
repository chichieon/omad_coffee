
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


$(function () {
    var executed1 = false;

    $('.number').waypoint(function () {
        var targetNumber = $('.animate2').attr('data-rate');
        if (!executed1) {
            var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
            $('.animate2').animateNumber({
                number: targetNumber,
                numberStep: comma_separator_number_step
            }, 1500);
            executed1 = true;
        }
    },
        {
            offset: '80%'
        }
    );

});
// 숫자 올라가는 js

AOS.init({
    duration: 1000 //aos 나타나는 속도
});
