$(function(){
    var aLi = $('.cai ul li');
    var iNow = 0;
    var aSmall = $('.picName span')

    //自动轮播函数
    function autoRun () {
        if (iNow < 5) {
            iNow++;
        } else {
            iNow = 0;
        }
        aLi.eq(iNow).siblings().stop().animate({
            opacity:0
        },800);
        aLi.eq(iNow).stop().animate({
            opacity:1
        },800);
        aSmall.eq(iNow).addClass('small_active').siblings().removeClass('small_active');
    }
    var autoId = setInterval(autoRun, 3000);


    //点击图片名字手动切换
    aSmall.click(function(){
        iNow = $(this).index();
        aLi.eq(iNow).siblings().stop().animate({
            opacity:0
        },800);
        aLi.eq(iNow).stop().animate({
            opacity:1
        },800);
        aSmall.eq(iNow).addClass('small_active').siblings().removeClass('small_active');

    })


    aLi.hover(function(){
        clearInterval(autoId);
    }, function(){
        autoId = setInterval(autoRun, 3000);
    })




})