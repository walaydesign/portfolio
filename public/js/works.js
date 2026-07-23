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

    const category = $(this).attr("class").match(/works__tab-item--(\S+)/)?.[1];
    const $items = $(".works__item-wrap");

    $items.stop(true).fadeOut(150).promise().done(function() {
        const $target = category === "all" ? $items : $(`.works__item-wrap--${category}`);
        $target.fadeIn(200);
    });

    const headHeight = $(".page-head").height() + ($(window).width() > 500 ? 175 : 120) * 2 + 50 - 70 + 1;
    if ($(window).scrollTop() > headHeight) {
        $("html, body").animate({ scrollTop: headHeight }, 100);
    }

    if ($(window).width() < 768) {
        $(".works__tab-active-text").text($(this).text());
        $(".works__tab-list").slideUp(300);
        $(".works__tab").removeClass("active");
    }
})