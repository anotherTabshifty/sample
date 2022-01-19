(function($, window){
    $(document).ready(function() {
    
        var flag = false
        var $expandMenu = $('.expand-menu')
        var $responsiveMenu = $('.responsive-menus')
        var $loader = $('.loader')
    
        function removeActive() {
            $expandMenu.removeClass('active')
            $responsiveMenu.removeClass('active')
        }
    
        $('.swiper').slick({
            arrows: false,
            dots: true,
        })
    
        // add event
        $expandMenu.click(function(e) {
            if (!flag) {
                $expandMenu.addClass('active')
                $responsiveMenu.addClass('active')
            } else {
                removeActive()
            }
            flag = !flag
            e.stopPropagation()
    
        })
    
        $responsiveMenu.click(function(e){
            removeActive()
            flag = false
            e.stopPropagation()
        })
    
        $(window).resize(function(){
            var _window = this
            if(!flag) return
            if (_window.innerWidth > 1024) {
                flag = false
                removeActive()
            }
        })
    
        new WOW().init({
            animateClass: "animate__animated" 
        })

        window.onload = function() {
            $loader.remove()
        }
    })
})(jQuery, window)
