
resizeHome();
$(window).on("resize scroll",function(){
    resizeHome();  
})
function resizeHome() {
    let serviceTop = $("#service").offset().top - $(".header").height();
    let worksTop = $("#works").offset().top - $(".header").height();
    let aboutTop = $("#about").offset().top - $(".header").height();
    let contactTop = $("#contact").offset().top - $(".header").height();

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

    let contactBottom = $("#contact").offset().top - $(window).height();
    // sidebtn
    if($(window).scrollTop() >= contactBottom) {
        $(".sidebtn").addClass("bluebg");
    }else {
        $(".sidebtn").removeClass("bluebg");
    }
}

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