$(document).ready(function(){
            // Hamburger
    $(".hamb").click(()=>{
        $(".navbar>div").slideToggle("hide");
    })
    $(window).resize(()=>{
        if($(window).width() < 768) {
            $(".navbar>div").hide();
            $(".hamb").show();
        }
        else {
            $(".navbar>div").show();
            $(".hamb").hide();
        }
    });
            //HamburgerEnd
});