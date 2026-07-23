$(".works__tab-active").click(function() {
    $(this).parents(".works__tab").find(".works__tab-list").slideToggle(300);
    $(this).parents(".works__tab").toggleClass("active");
})

resizeWorks();
$(window).on("resize scroll",function(){
    resizeWorks();  
})
function resizeWorks() {
    let worksTabTop = $("#works__tab").offset().top - $(".header").height();
    if($(window).scrollTop()>=worksTabTop){
        $(".works__tab").addClass("scrolldown");
        $(".header").addClass("worksscrolldown");
    }else {
        $(".works__tab").removeClass("scrolldown");
        $(".header").removeClass("worksscrolldown");
    }

    if($(window).width() > 767) {
        $(".works__tab").removeClass("active");
        $(".works__tab-list").removeAttr("style");
    }
}

$(".works__tab-item").click(function() {
    $(this).addClass("active").siblings(".works__tab-item").removeClass("active");
    if($(this).hasClass("works__tab-item--all")) {
        $(".works__item-wrap").show();
    }else if($(this).hasClass("works__tab-item--graphic")) {
        $(".works__item-wrap").hide();
        $(".works__item-wrap--graphic").show();
    }else if($(this).hasClass("works__tab-item--ui")) {
        $(".works__item-wrap").hide();
        $(".works__item-wrap--ui").show();
    }else if($(this).hasClass("works__tab-item--layout")) {
        $(".works__item-wrap").hide();
        $(".works__item-wrap--layout").show();
    }else if($(this).hasClass("works__tab-item--wordpress")) {
        $(".works__item-wrap").hide();
        $(".works__item-wrap--wordpress").show();
    }

    let headHeight;
    if($(window).width() > 500) {
        headHeight = $(".page-head").height() + 175*2 + 50 - 70 + 1;
    }else {
        headHeight = $(".page-head").height() + 120*2 + 50 - 70 + 1;
    }

    if($(window).scrollTop() > headHeight) {
        $("html, body").animate({scrollTop:headHeight},100);
    }

    if($(window).width() < 768) {
        let worksActive = $(this).text();
        $(".works__tab-active-text").text(worksActive);
        $(".works__tab-list").slideUp(300);
        $(".works__tab").removeClass("active");
    }
})