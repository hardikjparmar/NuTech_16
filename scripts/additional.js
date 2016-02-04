

$(document).ready(function(e) {

    // 1. COUNTDOWN SET
    $('#clock').countdown('2015/02/12').on('update.countdown', function(event) {
        var $this = $(this).html(event.strftime('' + '<div class="day"><span>%-D</span> <i>day%!d</i></div>' + '<div><span>%H</span> <i>hr</i></div>' + '<div><span>%M</span> <i>min</i></div>' + '<div><span>%S</span> <i>sec</i></div>'));
    });

})