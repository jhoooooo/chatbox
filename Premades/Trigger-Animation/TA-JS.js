// Please use event listeners to run functions.
document.addEventListener('onLoad', function(obj) {
    // obj will be empty for chat widget
    // this will fire only once when the widget loads
});


document.addEventListener('onEventReceived', function(obj) {
    // obj will contain information about the event
  	console.log(obj.detail); // OBJ Logs
  
    if (obj.detail.command === "PRIVMSG") { // Prevent animation for ping events - Curtis Geiger
        $('#log>div').last().hide().slideToggle(600, "easeInOutQuart"); //New animation code
        $("#custom_html").append("<div class='heart animate-up'></div>");

        /* Script for animation by remi */
        var b = Math.floor(Math.random() * 100 + 1);
        var d = ["flowOne", "flowTwo", "flowThree"];
        var a = [
            "colOne",
            "colTwo",
            "colThree",
            "colFour",
            "colFive",
            "colSix",
        ];
        var c = (Math.random() * (5 - 2) + 1.2).toFixed(1); //1.6 - 1.2 ori value.
        $(
            '<div class="heart part-' +
            b +
            " " +
            a[Math.floor(Math.random() * 6)] +
            '" style="font-size:' +
            Math.floor(Math.random() * (50 - 22) + 22) +
            'px;"><i class="fa fa-heart"></i></div>'
        )
            .appendTo(".hearts")
            .css({
            animation:
                "" + d[Math.floor(Math.random() * 3)] + " " + c + "s linear",
            }); //
        $(".part-" + b).show();
        setTimeout(function () {
            $(".part-" + b).remove();
        }, c * 900);
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