jQuery(document).ready(function() {
    "use strict";


    /* ------- Preloader ------ */
    $(window).load(function(){
        $('.preloader').delay(1000).slideUp('slow'); // set duration in brackets
    });

    /* -------- Appears Menu 滚动显示scroll ------ */
    $(window).on('ready , scroll', function() {
        if ($(window).scrollTop() > 30) {
            $('.main-menu').addClass('minified');
        } else {
            $('.main-menu').removeClass('minified');
        }
    });

    /* ---------- Hide Menu-------- */
    jQuery(".nav a").on("click", function () {
        jQuery("#nav-menu").removeClass("in").addClass("collapse");
    });

    /* --------- One Page Navigation 页内锚点导航 -------- */
    // $('#collapsingNavbar').onePageNav({
    //     currentClass: 'active',
    //     scrollSpeed: 500,
    //     easing: 'linear'
    // });

    /* ---------- Wow Js ---------- */
    var wow = new WOW(
        {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'wow animated', // animation css class (default is animated)
            offset:       250,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
            callback:     function(box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
            }
        }
    );
    wow.init();

    /* ---------- ISoptope --------- */
    var $container = $('.portfolio-items');

    // filter items on button click
    $container.isotope({
        filter: '*',
        itemSelector: '.item',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });

    /* ---------- 切换内容 --------- */
    $('.article-title div').on('click',function (e) {
        console.log($(e.target).parent()[0])
    })
    let t=0;
    function move(num) {
        if(!num && num!=0){
            t++;
            if(t>6) t=0;
        } else{
            t=num;
        }
        $('.article-title > div').removeClass('active');
        $('.article-content > div').removeClass('active');
        $(".article-title > div:eq(" + t + ")").addClass('active');
        $(".article-content > div:eq(" + t+ ")").addClass('active');
    }
    let content=setInterval(move,2000);
    $('.article-title > div').hover((e)=>{
        clearInterval(content);
        move($(e.target).parents('div').index());
    },(e)=>{

        content=setInterval(move,2000);
    });
    $('.article-content > div').hover((e)=>{
        clearInterval(content);
    },(e)=>{
        content=setInterval(move,2000);
    });
    /*底部切换*/
    $('.contact div').mouseover(function () {
        $('.contact div').removeClass('active');
        $(this).addClass('active');
        $('footer .content p').removeClass('active');
        $("footer .content p:eq(" + $(this).index() + ")").addClass('active');
    })
});
