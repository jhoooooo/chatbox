// Please use event listeners to run functions.
document.addEventListener('onLoad', function (obj) {
    // obj will be empty for chat widget
    // this will fire only once when the widget loads
});

document.addEventListener('onEventReceived', function (obj) {
    // obj will contain information about the event
    if (obj['detail']['command'] === 'PRIVMSG') {
        $('#log>div:last-child').css({
            'opacity': '0',
            'display': 'none'
        }).slideDown(300).animate({
            opacity: 1
        }, 300);
    }

    /* Play audio when new messages received. Will still play when option 
    to hide bot commands is active eventhough the messages is hidden.
    IDK enough js to filter it out. */

    // var audio = new Audio('https://cdn.twitchalerts.com/twitch-bits/sounds/bits.ogg');
    // audio.play()

});
