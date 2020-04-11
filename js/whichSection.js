$(document).ready(function () {
    // 當畫面開始滾動時
    $(window).scroll(function () {
        // 取得畫面滾動的位置
        const position = $(window).scrollTop();
        // console.log(`position: ${position}`);
        // console.log(`header: ${$('#header').offset().top}`);
        // console.log(`sectionNews: ${$('#sectionNews').offset().top}`);
        // console.log(`sectionAbout: ${$('#sectionAbout').offset().top}`);
        const allSection = '#which-section-1,#which-section-2,#which-section-3,#which-section-4,#which-section-5';
        // 如果滾動位置超過100
        if (position > 100) {
            // 把.scrolling-img 加上class scrolling
            $('.scroll-img').addClass('scrolling');
        } else {
            // 把.scrolling-img 移除class scrolling
            $('.scroll-img').removeClass('scrolling');
        }
        if (position > $('#header').offset().top) {
            $(allSection).removeClass('active');
            $('#which-section-1').addClass('active');
        }
        if (position > $('#section-about').offset().top) {
            $(allSection).removeClass('active');
            $('#which-section-2').addClass('active');
        }
        if (position > $('#sectionDesign').offset().top) {
            $(allSection).removeClass('active');
            $('#which-section-3').addClass('active');
        }
        if (position > $('#section-whatICan').offset().top) {
            $(allSection).removeClass('active');
            $('#which-section-4').addClass('active');
        }
        if (position > $('#footer').offset().top) {
            $(allSection).removeClass('active');
            $('#which-section-5').addClass('active');
        }
    });
});