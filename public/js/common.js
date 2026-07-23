AOS.init({startEvent: 'load'});
window.addEventListener('load', AOS.refresh);

resize();  
$(window).on("resize scroll",function(){
    resize();  
})

function resize() {
    // header
    if($(window).scrollTop()>0){
        $(".header").addClass("scrolldown");
    }else {
        $(".header").removeClass("scrolldown");
    }

    // lang
    if($(window).width() >= 992) {
        $(".header__lang").removeClass("active");
    }

}

$(".header__menu").click(function() {
    if($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(".header__nav").removeClass("active");
        if ($(this).parents(".header").hasClass("navshow")) {
            $(this).parents(".header").removeClass("navshow");
        }
    }else {
        $(this).addClass("active");
        $(".header__nav").addClass("active");
        if (!$(this).parents(".header").hasClass("navshow")) {
            $(this).parents(".header").addClass("navshow");
        }
    }
})

$(".header__lang-active").click(function() {
    if($(".header__menu").hasClass("active")) {
        $(".header__menu").removeClass("active");
        $(".header__nav").removeClass("active");
        if ($(this).parents(".header").hasClass("navshow")) {
            $(this).parents(".header").removeClass("navshow");
        }
    }
    if($(window).width() < 992) {
        $(this).parents(".header__lang").toggleClass("active");
    }
})
$(document).click(function (event) {
    var haeder_lang = $(".header__lang");
    if (!haeder_lang.is(event.target) && haeder_lang.has(event.target).length === 0) {
        $(".header__lang").removeClass("active");
    }
});

$(".header__nav-lang-active").click(function() {
    $(this).parents(".header__nav-lang").toggleClass("active");
    $(this).parents(".header__nav-lang").find(".header__nav-lang-list").slideToggle(300);
})

$(".btn-top").click(function() {
    $("html, body").animate({scrollTop:0},300);
})



