// Please use event listeners to run functions.
document.addEventListener('onLoad', function(obj) {
    // obj will be empty for chat widget
    // this will fire only once when the widget loads
});


document.addEventListener('onEventReceived', function(obj) {
    // obj will contain information about the event
    console.log(obj.detail); // OBJ Logs
    var randomPart = Math.floor(Math.random() * 100 + 1);
    var randomFontSize = Math.floor(Math.random() * (50 - 22) + 22);
    // var f = Math.floor(Math.random() * 3);
  
    if (obj.detail.command === "PRIVMSG") { // Prevent animation for ping events - Curtis Geiger
        $('#log>div').last().hide().slideToggle(600, "easeInOutQuart"); //New animation code

        $(".hearts").append('<div class="heart part-' + randomPart + '" style="font-size:' + randomFontSize + 'px;"><i class="fa fa-heart" style="color:' + obj.detail.tags.color + '"></i></div>'
        );
        $(".part-" + randomPart).show();
        setTimeout(function () {
            $(".hearts").find("div:first-child").remove(); 
        }, 4900);
    }
  

    /* Old animation code - idk which is better tbh.

         if (obj['detail']['command'] === 'PRIVMSG') {
            $('#log>div:last-child').css({
                'opacity': '0',
                'display': 'none'
            }).slideDown(300).animate({
                opacity: 1
            }, 300);
        }

    */

    
});