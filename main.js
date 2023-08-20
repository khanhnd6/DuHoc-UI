function mobileButtonHandler(){
    $(".main-header").on('click', '.mobile-button', function (){
        var el = $(".main-menu")
        if(el.hasClass('nav-active')){
            $(el).removeClass("nav-active")
        } else {
            $(el).addClass("nav-active")
        }
        console.log("clickded")
    })
}


$(document).ready(function(){
    mobileButtonHandler();
})
