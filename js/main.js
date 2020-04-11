$(document).ready(function () {
  

  $('#menuBtn').click(function () {
    // 把.menu與.dark-cover加上class active
    $('.menu').addClass('active');
    $('.dark-cover').addClass('active');
    $('#closeBtn').addClass('active');
  });
  // 當.dark-cover, #closeBtn被點擊時
  $('.dark-cover, #closeBtn').click(function () {
    // 把.menu與.dark-cover移除class active
    $('.menu').removeClass('active');
    $('.dark-cover').removeClass('active');
    $('#closeBtn').removeClass('active');
  });
  $('.up #scrollupBtn').click(function () {
    //1.取得移動目標
    var target = $(this).attr('href');
    console.log(target);
    //2.取得目標座標
    // 只要取得top屬性就在後面加.top
    var headerposition = $(target).offset().top;
    // 3.1先停止目前html和body目前有在執行的動畫，再使用動畫滾動到目標位置.stop()
    //3.2使用動畫滾動畫面至座標位置.animate()
    var duration = 2500;
    //.animate({},動畫時間)  <-----需要兩個參數
    $('html,body').stop().animate({
      scrollTop: headerposition
    }, duration);
  });
});