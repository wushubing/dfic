$(function () {
    //获取浏览器可视区域宽高
    var winwidth = $(window).width();
    var winheight = $(window).height();
     $('.banner').css('height',winheight * 0.8);
     $('.imglist a').css('height',winheight);
    $('.core').css('height',winheight);
    $('.core').css("background-size","100% 100%");


     $('.header').mouseover(function () {
        $('.header').css("background","rgba(255,255,255,1)");
         $('.header a').css("color","rgba(0,0,0,0.7)");
         $('#logreg button').css("color","rgba(0,0,0,0.7)");
         $('#searchicon').css("background-image",'url("image/soblack.png")');
         $('#register').css('border-color','rgba(0,0,0,0.7)');


     });
    $('.header').mouseout(function () {
        if ($(document).scrollTop()>=550) {
            $('.header').css('background',"rgba(255,255,255,1)");
        }else{
            $('.header').css('background',"rgba(255,255,255,0)");
            $('.header a').css("color","rgba(255,255,255,0.7)");
            $('#logreg button').css("color","rgba(255,255,255,0.7)");
            $('#searchicon').css("background-image",'url("image/sowhite.png")');
            $('#register').css('border-color','rgba(255,255,255,0.7)');
        }
    });
     //header搜索效果

     $('#searchicon').click(function (e) {
         e.stopPropagation();
         $('#searchercon').css('border-width','1px');
         $('#searchercon').animate({width:"100%"},300);
         $('#searchtext').focus();
     });
     $(document).click(function (e) {
         e.stopPropagation();
         $('#searchercon').css('border-width','0px');
         $('#searchercon').animate({width:"40px"},300);
     });


     //core部分代码
     $('.pic1').mouseenter(function (e) {
         $('.img1').fadeIn(300);
         e.stopPropagation();
     });
    $('.pic1').mouseout(function (e) {
        $('.img1').fadeOut(300);
        $('.core').css("background","url(image/hx1.jpg)");
        $('.core').css("background-size","100% 100%");
        e.stopPropagation();
    });
     $('.pic2').mouseenter(function (e) {
         $('.img2').fadeIn(300);
         e.stopPropagation();
     });
    $('.pic2').mouseout(function (e) {
        $('.img2').fadeOut(300);
        $('.core').css("background","url(image/hx2.jpg)");
        $('.core').css("background-size","100% 100%");
        e.stopPropagation();
    });
     $('.pic3').mouseenter(function (e) {
         $('.img3').fadeIn(300);
         e.stopPropagation();
     });
    $('.pic3').mouseout(function (e) {
        $('.img3').fadeOut(300);
        $('.core').css("background","url(image/hx3.jpg)");
        $('.core').css("background-size","100% 100%");
        e.stopPropagation();
    });
     $('.pic4').mouseenter(function (e) {
         $('.img4').fadeIn(300);
         e.stopPropagation();
     });
    $('.pic4').mouseout(function (e) {
        $('.img4').fadeOut(300);
        $('.core').css("background","url(image/hx4.jpg)");
        $('.core').css("background-size","100% 100%");
        e.stopPropagation();
    });
     $('.pic5').mouseenter(function (e) {
         $('.img5').fadeIn(300);
         e.stopPropagation();
     });
    $('.pic5').mouseout(function (e) {
        $('.img5').fadeOut(300);
        $('.core').css("background","url(image/hx5.jpg)");
        $('.core').css("background-size","100% 100%");
        e.stopPropagation();
    });



    // banner组件
     $('.imglist').slick({
         dots:true,
         autoplay:true,
         arrows:true,
         autoplaySpeed:3000,
         infinite:true,
         speed:300,
         slidesToShow:1,
         adaptiveHeight:true,
         pauseOnHover:true
     });
     $('.bancon').slick({
         autoplay:true,
         autoplaySpeed:3000,
         slidesToShow:1,
         arrows:false,
         pauseOnHover:true
     });
     $('.banner').mouseenter(function () {
         $('.imglist').slickPause();
         $('.bancon').slickPause();
     });
    $('.banner').mouseout(function () {
        $('.imglist').slickPlay();
        $('.bancon').slickPlay();
    });
    $('.imglist').mouseenter(function () {
        $('.bancon').slickPause();
    });
    $('.imglist').mouseout(function () {
        $('.bancon').slickPlay();
    });
    $('.slick-prev').click(function () {
        $('.bancon').slickPrev();
    });
    $('.slick-next').click(function () {
        $('.bancon').slickNext();
    });

     //导航栏出现在特定区域
    var aWindow = $(window);
    var aBody   = $(document);
    var aheader  = $('.header');
    var Advimg1  = $('.advimg1');
    var Advimg2  = $('.advimg2');
    var Advimg3  = $('.advimg3');
    var Advimg4  = $('.advimg4');
    var ali      = $('#logolist li');
    var aBack    = $('#back');

        aWindow.scroll(function () {
        if (aBody.scrollTop()>=1900){
            Advimg1.animate({opacity:"1",top:"20px"},200);
            Advimg2.animate({opacity:"1",top:"0px"},300);
            Advimg3.animate({opacity:"1",top:"30px"},400);
            Advimg4.animate({opacity:"1",top:"60px"},500);
            $('.advright').animate({padding:'0',opacity:'1'},400);
        }
    });
     aWindow.scroll(function () {
//         console.log(aBody.scrollTop());
         if (aBody.scrollTop()>=400) {
             $('.header').css('background',"rgba(255,255,255,1)");
             $('.header a').css("color","rgba(0,0,0,0.7)");
             $('#logreg button').css("color","rgba(0,0,0,0.7)");
             $('#searchicon').css("background-image",'url("image/soblack.png")');
             $('#register').css('border-color','rgba(0,0,0,0.7)');
             $('#piccon a').animate({padding:'0',opacity:1},300);

         }else{
             $('.header').css('background',"rgba(255,255,255,0)");
             $('.header a').css("color","rgba(255,255,255,0.7)");
             $('#logreg button').css("color","rgba(255,255,255,0.7)");
             $('#searchicon').css("background-image",'url("image/sowhite.png")');
             $('#register').css('border-color','rgba(255,255,255,0.7)');
         }
     });
     aWindow.scroll(function () {
         if (aBody.scrollTop()>=3100) {
             ali.animate({margin:"0px",opacity:'1'},500);
         }
         });
     //回到顶部效果
     aWindow.scroll(function () {
         if(aBody.scrollTop()>=300) {
             aBack.fadeIn(1000);
         }else{
             aBack.fadeOut(1000);
         }
     });
     aBack.click(function () {
         $('body,html').animate({ scrollTop: "0" }, 500);
         return false;
     });


     //视频播放弹出
     $('.videoshow').click(function () {
         $('.modal').css("display","block");
     });
     $('#my-video').click(function (e) {
         e.stopPropagation();
     });
     $('.modal').click(function () {
         $('.modal').css("display","none");
         return false;
     });
 });


