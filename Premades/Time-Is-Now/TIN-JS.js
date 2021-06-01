// Please use event listeners to run functions.
document.addEventListener('onLoad', function(obj) {
    // obj will be empty for chat widget
    // this will fire only once when the widget loads
});


document.addEventListener('onEventReceived', function(obj) {
    // obj will contain information about the event
  	console.log(obj.detail); // OBJ Logs
    var dt = luxon.DateTime;
    var now = dt.now();
    var tt = now.toLocaleString(dt.TIME_SIMPLE);
    var classes = ["pastel-01", "pastel-02", "pastel-03", "pastel-04", "pastel-05", "pastel-06", "pastel-07", "pastel-08", "pastel-09", "pastel-10"];
    var randomClasses = Math.floor(Math.random() * (10 - 1)) + 1;

    $(".time").last().text(tt);
  
    if (obj.detail.command === "PRIVMSG") { // Prevent animation for ping events - Curtis Geiger
        $('#log>div').last().hide().slideToggle(600, "easeInOutQuart"); //New animation code
        
        $(".message-box").last().addClass(classes[randomClasses]);
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
