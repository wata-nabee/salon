  $(function() {
    var pagetop = $('#toTop');
    $(window).scroll(function () {
      if ($(this).scrollTop() > 150) {
        pagetop.fadeIn(500);
       }else {
        pagetop.fadeOut(500);
      }
    });
    pagetop.click(function () {
      $('body, html').animate({ scrollTop: 0 }, 500);
      return false;
    });
  });
  

  // headerのスライダー
  //slickを初期化した際に発生するイベント（初期表示のスライドに.slick-animationのクラスをつける)
  $('#header-slider').on('init', function () {
    $('.slick-slide[data-slick-index="0"]').addClass('slick-animation');
  })
  .slick({
    autoplay: true, //自動再生
    infinite: true, //無限ループ
    fade: true, //フェード
    slidesToShow: 1, //スライド表示数
    slidesToScroll: 1, //スライドする数
    arrows: false, //前へ・次への矢印ナビの表示
    speed: 2000, //スライドの速度
    autoplaySpeed: 5000, //自動再生の速度
    pauseOnFocus: false, //フォーカスで一時停止
    pauseOnHover: false //ホバーで一時停止
  })
  .on({
    // スライドが移動する前に発生するイベント
    beforeChange: function (event, slick, currentSlide, nextSlide) {
      //表示されているスライドに.slick-animationのクラスをつける
      $(".slick-slide", this).eq(nextSlide).addClass("slick-animation");

      //あとで、.slick-animationのクラスを消すための.stop-animationクラスを付ける
      $(".slick-slide", this).eq(currentSlide).addClass("stop-animation");
    },
    // スライドが移動した後に発生するイベント
    afterChange: function () {
      //見えてないスライドにはアニメーションのクラスを外す
      $(".stop-animation", this).removeClass("stop-animation slick-animation");
    },
  });

  // ---------ハンバーガーメニュー----------------
  $('.toggle_btn').on('click', function() {
    $('header').toggleClass('open'),
    $('body').toggleClass('active') 
  });

  $('.hamburger-li').on('click',function(){
    $('header').removeClass('open'),
    $('body').removeClass('active')
  });
  

  // -----セクションスライダー---------
  $(".sec-slider").slick ({
      autoplay: true, //自動再生
      infinite: true, //無限ループ
      fade: false, //フェード
      slidesToShow: 1, //スライド表示数
      slidesToScroll: 1, //スライドする数
      arrows: false, //前へ・次への矢印ナビの表示
      speed: 1000, //スライドの速度
      autoplaySpeed: 5000, //自動再生の速度
      pauseOnFocus: false, //フォーカスで一時停止
      pauseOnHover: false, //ホバーで一時停止
      dots: true,
  });

  
});
