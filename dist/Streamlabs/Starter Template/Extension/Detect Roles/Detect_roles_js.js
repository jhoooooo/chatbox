// Last modified: Sunday, 31st July 2022, 3:40:16 pm
// Please use event listeners to run functions.
document.addEventListener('onLoad', function(obj) {
    // obj will be empty for chat widget
    // this will fire only once when the widget loads
});


document.addEventListener('onEventReceived', function (obj) {
    // obj will contain information about the event
    console.log(obj.detail); // OBJ Logs

    if (obj.detail.command === "PRIVMSG") {
        $('#log>div').last().hide().slideToggle(600, "easeInOutQuart");
         // check if user is a mod
        if (obj.detail.tags.mod == "1"){
            $(".username-box").last().addClass("moderator");
        }
        // check if user is a broadcaster/streamer 
        if (obj.detail.owner == "1"){
            $(".username-box").last().addClass("broadcaster");
        }
        // If username matched
        if (obj.detail.tags["display-name"] == "StreamElements"){
            $(".username-box").last().addClass("newcode"); //append new class
            $(".name").last().text("bot"); // replace the name
            //$(".name").last().replaceWith("<span>New heading</span>"); //for whole code
        }
    }
});
