// ローディング画面

 $(function(){});
setTimeout(function(){ 
  $.when(
    $('.loader').delay(3000).fadeOut(500)
  ).done(function(){
    $('.logo').css("display","block");
  });
  $.when(
    $('#loading').delay(5000).fadeOut(500)
  ).done(function(){
    $('.logo').css("z-index",10);
  });
    
});



$(function(){
  // スムーススクロール----------------------------------------------------------
  // #で始まるa要素をクリックした場合に処理（"#"←ダブルクォーテンションで囲むのを忘れずに。忘れるとjQueryのバージョンによっては動かない。。）
  $('a[href^="#"]').click(function(){
    // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
    var adjust = 0;
    // スクロールの速度（ミリ秒）
    var speed = 400;
    // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
    var href= $(this).attr("href");
    // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
    var position = target.offset().top + adjust;
    // スムーススクロール linear（等速） or swing（変速）
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });

// logoの画面中央配置
  checkWidth = function(){
    // ブラウザの横幅を取得
    var browserWidth = $(window).width();
 
    // ボックスの横幅を取得
    var boxW = $(".logo").width();
 
    // 左端から離す距離pxを計算
    var plusPxW = ((browserWidth - boxW)/2);
 
    // CSSで追加
    $('.logo').css({'left': plusPxW + "px"});
  };

  // リアルタイムで縦・横幅を取得
  $(function(){
    checkWidth();
    $(window).resize(checkWidth);
  });

  // ページトップへ戻る------------------------------------------------------------
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
