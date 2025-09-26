$(document).ready(function(){
    // sub nav 
    $(".h_nav").on("mouseenter",function(){
        $("header").addClass("active")
    })

    $("header").on("mouseleave",function(){
        $("header").removeClass("active")
    })
})