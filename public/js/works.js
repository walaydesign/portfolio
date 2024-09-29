$(".works_tab_active").click(function() {
    $(this).parents(".works_tab").find(".works_tab_list").slideToggle(300);
    $(this).parents(".works_tab").toggleClass("active");
})

resizeWorks();
$(window).on("resize scroll",function(){
    resizeWorks();  
})
function resizeWorks() {
    let worksTabTop = $("#works_tab").offset().top - $(".header").height();
    if($(window).scrollTop()>=worksTabTop){
        $(".works_tab").addClass("scrolldown");
        $(".header").addClass("worksscrolldown");
    }else {
        $(".works_tab").removeClass("scrolldown");
        $(".header").removeClass("worksscrolldown");
    }

    if($(window).width() > 767) {
        $(".works_tab").removeClass("active");
        $(".works_tab_list").removeAttr("style");
    }
}

$(".works_tab_item").click(function() {
    $(this).addClass("active").siblings(".works_tab_item").removeClass("active");
    if($(this).hasClass("works_tab_all")) {
        $(".works_item-wrap").show();
    }else if($(this).hasClass("works_tab_graphic")) {
        $(".works_item-wrap").hide();
        $(".works-graphic").show();
    }else if($(this).hasClass("works_tab_ui")) {
        $(".works_item-wrap").hide();
        $(".works-ui").show();
    }else if($(this).hasClass("works_tab_layout")) {
        $(".works_item-wrap").hide();
        $(".works-layout").show();
    }else if($(this).hasClass("works_tab_wordpress")) {
        $(".works_item-wrap").hide();
        $(".works-wordpress").show();
    }
})