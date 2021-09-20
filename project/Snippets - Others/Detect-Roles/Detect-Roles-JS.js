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
          	if (obj.detail.tags.mod == "1") // If mod,
            {
                $(".username-box").last().addClass("moderator"); // add class
            }

            if (obj.detail.owner == "1") // If broadcaster,
            {
                $(".username-box").last().addClass("broadcaster"); //add class
            }

            if (obj.detail.tags["display-name"] == "StreamElements") // If name matched
            {
                $(".username-box").last().addClass("newcode"); //append new class
                $(".name").last().text("bot"); // replace the name
                //$(".name").last().replaceWith("<span>New heading</span>"); //for whole code
            }
    }
});
