// Please use event listeners to run functions.
document.addEventListener('onLoad', function(obj) {
    // obj will be empty for chat widget
    // this will fire only once when the widget loads
});


document.addEventListener('onEventReceived', function(obj) {
    // obj will contain information about the event
  	console.log(obj.detail); // OBJ Logs

    if (obj.detail.command === "PRIVMSG") // Prevent animation for ping events - Curtis Geiger
    {
            $('#log>div').last().hide().slideToggle(600, "easeInOutQuart");
      		
            // var audio = new Audio('https://cdn.twitchalerts.com/twitch-bits/sounds/bits.ogg');
            // audio.play()

            // Dot and bracket notation still confuses me, send halp please
            // I'm using .last to append cause i'm dumb in js but you can 
            // probaby detect obj id to append or add your own id or else 
            // every class you hook(.username-box) including previous ones gonna get append.
          	
          	if (obj.detail.tags.mod == "1") // If mod, add new class.
            {
                $(".username-box").last().addClass("moderator");
            }
            
            if (obj.detail.owner == "1") // If broadcaster, add new class.
            {
                $(".username-box").last().addClass("broadcaster");
            }
            
            if (obj.detail.tags["display-name"] == "StreamElements") // If name matched
            {
                $(".username-box").last().addClass("newcode"); //append new class
                $(".name").last().text("bot"); // replace the name
                //$(".name").last().replaceWith("<span>New heading</span>"); //for whole code
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
