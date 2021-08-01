// Please use event listeners to run functions.
document.addEventListener('onLoad', function(obj) {
    // obj will be empty for chat widget
    // this will fire only once when the widget loads
});


document.addEventListener('onEventReceived', function(obj) {
    // obj will contain information about the event
  	console.log(obj.detail); // OBJ Logs
  
  	// Variables for Bot and Command check. This follows streamlabs' way of doing it.
  	var isCommand = obj.detail.body.charAt(0);
  	var botNames = ["nightbot","moobot","xanbot","deepbot","vivbot","phantombot","streamelements"];
  
    if (obj.detail.command === "PRIVMSG") // Prevent animation for ping events - Curtis Geiger
    {
        if (botNames.indexOf(obj.detail.from) == -1 && isCommand != "!") // Prevent animation if bot
        { 
            $('#log>div').last().hide().slideToggle(600, "easeInOutQuart"); //New animation code
        }    
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
