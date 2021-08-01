// Please use event listeners to run functions.
document.addEventListener('onLoad', function (obj) {
    // obj will be empty for chat widget
    // this will fire only once when the widget loads
});


document.addEventListener('onEventReceived', function (obj) {
    // obj will contain information about the event
    console.log(obj.detail); // OBJ Logs

    if (obj.detail.command === "PRIVMSG") { // Prevent animation for ping events - Curtis Geiger
        $('#log>div').last().hide().slideToggle(600, "easeInOutQuart"); //New animation code
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

    // Limit message shown
    const messageLimit = {msg-limit};
    const messageParent = document.querySelector('.sl__chat__layout');

    if (messageParent.children.length > messageLimit) {
        $('#log>div').not($('#log>div').slice(-messageLimit)).fadeOut().remove(500);
    };

});
