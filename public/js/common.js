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

    
    let serviceTop = $("#service").offset().top - $(".header").height();
    let worksTop = $("#works").offset().top - $(".header").height();
    let aboutTop = $("#about").offset().top - $(".header").height();
    let contactTop = $("#contact").offset().top - $(".header").height();
    let contactBottom = $("#contact").offset().top - $(window).height();

    // sidebtn
    if($(window).scrollTop() >= contactBottom) {
        $(".sidebtn").addClass("bluebg");
    }else {
        $(".sidebtn").removeClass("bluebg");
    }

    // navbar
    if($(window).scrollTop()>=serviceTop && $(window).scrollTop()<worksTop){
        $(".gotoelement-service").addClass("active").parents("li").siblings("li").find(".gotoelement").removeClass("active");
    }else if($(window).scrollTop()>=worksTop && $(window).scrollTop()<aboutTop) {
        $(".gotoelement-works").addClass("active").parents("li").siblings("li").find(".gotoelement").removeClass("active");
    }else if($(window).scrollTop()>=aboutTop && $(window).scrollTop()<contactTop) {
        $(".gotoelement-about").addClass("active").parents("li").siblings("li").find(".gotoelement").removeClass("active");
    }else if($(window).scrollTop()>=contactTop) {
        $(".gotoelement-contact").addClass("active").parents("li").siblings("li").find(".gotoelement").removeClass("active");
    }else {
        $(".gotoelement").removeClass("active");
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

$(".gotoelement").click(function(){
    let target = $(this).data("target");
    let top = $(target).offset().top - 60;
    $("html, body").animate({scrollTop:top},300);
    $(this).addClass("active");
    
    $(".header_menu").removeClass("active");
    $(".header_nav").removeClass("active");
    if ($(".header").hasClass("navshow")) {
        $(".header").removeClass("navshow");
    }
})

