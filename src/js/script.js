$(document).ready(function() {
    $('.swiper').slick({
        arrows: false,
        dots: true,
    })
    // add event
    var flag = false
    var $expandMenu = $('.expand-menu')
    var $responsiveMenu = $('.responsive-menus')
    function removeActive() {
        $expandMenu.removeClass('active')
        $responsiveMenu.removeClass('active')
    }
    $expandMenu.click(function() {
        if (!flag) {
            $expandMenu.addClass('active')
            $responsiveMenu.addClass('active')
        } else {
            removeActive()
        }
        flag = !flag
    })

    $responsiveMenu.click(function(){
        removeActive()
        flag = false
    })
})