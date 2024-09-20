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
        $(".header_lang").removeClass("active");
    }

}

$(".header_menu").click(function() {
    if($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(".header_nav").removeClass("active");
        if ($(this).parents(".header").hasClass("navshow")) {
            $(this).parents(".header").removeClass("navshow");
        }
    }else {
        $(this).addClass("active");
        $(".header_nav").addClass("active");
        if (!$(this).parents(".header").hasClass("navshow")) {
            $(this).parents(".header").addClass("navshow");
        }
    }
})

$(".header_lang_active").click(function() {
    if($(".header_menu").hasClass("active")) {
        $(".header_menu").removeClass("active");
        $(".header_nav").removeClass("active");
        if ($(this).parents(".header").hasClass("navshow")) {
            $(this).parents(".header").removeClass("navshow");
        }
    }
    if($(window).width() < 992) {
        $(this).parents(".header_lang").toggleClass("active");
    }
})
$(document).click(function (event) {
    var haeder_lang = $(".header_lang");
    if (!haeder_lang.is(event.target) && haeder_lang.has(event.target).length === 0) {
        $(".header_lang").removeClass("active");
    }
});

$(".header_nav_lang_active").click(function() {
    $(this).parents(".header_nav_lang").toggleClass("active");
    $(this).parents(".header_nav_lang").find(".header_nav_lang_list").slideToggle(300);
})

$(".btn-top").click(function() {
    $("html, body").animate({scrollTop:0},300);
})



