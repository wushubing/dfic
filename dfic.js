$(function () {
    //获取浏览器可视区域宽高
    var winwidth = $(window).width();
    var winheight = $(window).height();
    // $('.banner').css('height',winwidth*0.5);
    $('.core').css('height',winheight);


     $('.header').mouseover(function () {
        $('.header').css("background","rgba(255,255,255,0.7)");
        $('.header').addClass("headerhover");

     });
    $('.header').mouseout(function () {
        if ($(document).scrollTop()>=550) {
            $('.header').css('background',"rgba(255,255,255,0.7)");
        }else{
            $('.header').css('background',"rgba(255,255,255,0)");
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
     $('.pic1').mouseover(function (e) {
         $('.core img').css("opacity","0");
         $('.img1').animate({opacity:"0.8"},300);
         e.stopPropagation();
     });
     $('.pic2').mouseover(function (e) {
         $('.core img').css("opacity","0");
         $('.img2').animate({opacity:"0.8"},300);
         e.stopPropagation();
     });
     $('.pic3').mouseover(function (e) {
         $('.core img').css("opacity","0");
         $('.img3').animate({opacity:"0.8"},300);
         e.stopPropagation();
     });
     $('.pic4').mouseover(function (e) {
         $('.core img').css("opacity","0");
         $('.img4').animate({opacity:"0.8"},300);
         e.stopPropagation();
     });
     $('.pic5').mouseover(function (e) {
         $('.core img').css("opacity","0");
         $('.img5').animate({opacity:"0.8"},300);
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
         adaptiveHeight:true
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
        if (aBody.scrollTop()>=1250){
            Advimg1.animate({opacity:"1",top:"20px"},100);
            Advimg2.animate({opacity:"1",top:"0px"},200);
            Advimg3.animate({opacity:"1",top:"30px"},300);
            Advimg4.animate({opacity:"1",top:"60px"},400);
        }
    });
     aWindow.scroll(function () {
//         console.log(aBody.scrollTop());
         if (aBody.scrollTop()>=500) {
             $('.header').css('background',"rgba(255,255,255,0.9)");
             $('.header a').css("color","rgba(0,0,0,0.7)");
             $('#logreg button').css("color","rgba(0,0,0,0.7)");
             $('#searchicon').css("background-image",'url("image/Search.png")');
             $('#register').css('border-color','rgba(0,0,0,0.7)');

         }else{
             $('.header').css('background',"rgba(255,255,255,0)");
             $('.header a').css("color","rgba(255,255,255,0.7)");
             $('#logreg button').css("color","rgba(255,255,255,0.7)");
             $('#searchicon').css("background-image",'url("image/Search1.png")');
             $('#register').css('border-color','rgba(255,255,255,0.7)');
         }
     });
     aWindow.scroll(function () {
         if (aBody.scrollTop()>=2600) {
             ali.animate({margin:"0px",opacity:'1'},400);
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





//     var i = 0;
//
//     var clone = $("#banner .img li").first().clone();//克隆第一张图片
//     $("#banner .img").append(clone);//复制到列表最后
//     var size = $("#banner .img li").size();
//
//
//     for (var j = 0; j < size-1; j++) {
//         $("#banner .num").append("<li></li>");
//     }
//
//     $("#banner .num li").first().addClass("on");
//
//     /*自动轮播*/
//
//     var t = setInterval(function () { i++; move();},2000);
//
//     /*鼠标悬停事件*/
//
//     $("#banner").hover(function () {
//         clearInterval(t);//鼠标悬停时清除定时器
//     }, function () {
//         t = setInterval(function () { i++; move(); }, 2000); //鼠标移出时清除定时器
//     });
//
//
//
//
//     /*鼠标滑入原点事件*/
//
//     $("#banner .num li").hover(function () {
//
//         var index = $(this).index();//获取当前索引值
//         i = index;
//         $("#banner .img").stop().animate({ left: -index * 1000 }, 1000);
//         $(this).addClass("on").siblings().removeClass("on");
//     });
//
//
//
//     /*向左按钮*/
//     $("#banner .btn_l").click(function () {
//         i++;
//         move();
//     })
//
//
//     /*向右按钮*/
//     $("#banner .btn_r").click(function () {
//         i--;
//         move();
//     })
//
//     /*移动事件*/
//     function move() {
//         if (i == size) {
//             $("#banner .img").css({ left: 0 });
//             i = 1;
//         }
//         if (i == -1) {
//             $("#banner .img").css({ left: -(size - 1) * 1980 });
//             i = size - 2;
//         }
//         $("#banner .img").stop().animate({ left: -i * 1980 }, 1000);
//
//         if (i == size - 1) {
//             $("#banner .num li").eq(0).addClass("on").siblings().removeClass("on");
//         } else {
//             $("#banner .num li").eq(i).addClass("on").siblings().removeClass("on");
//         }
//     }
 });


