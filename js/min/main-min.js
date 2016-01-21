$(document).ready(function () {
   if (!$('.main-section').hasClass("no-index")) {
        $('.main-section').css('height', $(window).height());
        $(window).resize(function () {
            $('.main-section').css('height', $(window).height());
        });
    }

});


