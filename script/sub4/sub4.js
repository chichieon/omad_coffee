
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
      $('.notice_tabcontent > div').hide();
      $('.notice_tabnav a').click(function () {
        $('.tabcontent > div').hide().filter(this.hash).fadeIn();
        $('.notice_tabnav a').removeClass('active');
        $(this).addClass('active');
        return false;
      }).filter(':eq(0)').click();
    });
    // notice_tab

    $(function () {
      $(".q_a li").click(function () {
        $(this).children("div").slideToggle()
        $(this).siblings().children("div").slideUp();
        $(this).toggleClass("on").siblings().removeClass("on")
      });
    });
    // notice_tab의 아코디언