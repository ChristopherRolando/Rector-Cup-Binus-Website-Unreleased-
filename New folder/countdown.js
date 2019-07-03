var countDownDate = new Date("Oct 30, 2018 00:00:00").getTime();

setInterval(function() {

    var now = new Date().getTime();
    
    var distance = countDownDate - now;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    $('.days').html(days);
    $('.hours').html(hours);
    $('.minutes').html(minutes);
    $('.seconds').html(seconds);
    
    // If the count down is over, write some text 
    if (distance < 0) {
        $('.countdown').html("ONGOING");
        $('.countdown-description').html('');
        $('.countdown').css('background-color', 'black');
        $('.countdown').css('width', '50%');
        $('.countdown').css('margin', 'auto');
    }
}, 1000);