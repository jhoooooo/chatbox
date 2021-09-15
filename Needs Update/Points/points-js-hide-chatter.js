// Please use event listeners to run functions.
document.addEventListener('onLoad', function(obj) {
    // obj will be empty for chat widget
    // this will fire only once when the widget loads
});

document.addEventListener('onEventReceived', function (obj) {
    // obj will contain information about the event
    console.log(obj.detail); // OBJ Logs
    //smoothscroll animation
    const smoothscroll = {smoothscroll};
    // Limit message shown
    const limitEnable = {limit-enable};
    const msgLimit = {msg-limit};
    const msgParent = document.querySelector('.sl__chat__layout');

    // Variables for Bot and Command check. This follows streamlabs' way of doing it.
    const isCommand = obj.detail.body.charAt(0);
    const botNames = ["nightbot", "moobot", "xanbot", "deepbot", "vivbot", "phantombot", "streamelements"];

    if (obj.detail.command === "PRIVMSG") {
        if (botNames.indexOf(obj.detail.from) == -1 && isCommand != "!") { // Prevent animation if bot
            if (smoothscroll == true) {
                $('#log>div').last().hide().slideToggle(600, "easeInOutQuart"); //New animation code
            }
        }
        if (limitEnable == true) {
            if (msgParent.children.length > msgLimit) {
                $('#log>div').not($('#log>div').slice(-msgLimit)).fadeOut();
            }
        }
    }
});
