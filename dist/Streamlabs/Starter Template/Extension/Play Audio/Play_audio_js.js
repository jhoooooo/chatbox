// Last modified: Sunday, 31st July 2022, 3:42:29 pm
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
        //play audio for each message
        var audio = new Audio('https://cdn.twitchalerts.com/twitch-bits/sounds/bits.ogg');
        audio.play()
    }
});
