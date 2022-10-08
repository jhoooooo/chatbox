/*
- Default Theme
- Version 2.0
- Last modified: Sunday, 9th October 2022, 12:40:35 am
*/
// Please use event listeners to run functions.
document.addEventListener('onLoad', function(obj) {
    // obj will be empty for chat widget
    // this will fire only once when the widget loads
});

document.addEventListener('onEventReceived', function (obj) {
    // obj will contain information about the event
    console.log(obj.detail); // OBJ Logs
    const smoothscroll = {smoothscroll};
    const limitEnable = {enable_limit};
    const msgLimit = {message_limit};
    const msgParent = document.querySelector('.sl__chat__layout');

    let isCommand = '';
    const botNames = ["nightbot", "moobot", "xanbot", "deepbot", "vivbot", "phantombot", "streamelements"];

    if (obj.detail.command === "PRIVMSG") {
        let isCommand = obj.detail.body.charAt(0);
        if (botNames.indexOf(obj.detail.from) == -1 && isCommand != "!") {
            if (smoothscroll == true) {
                $('#log>div').last().hide().slideToggle(600, "easeInOutQuart");
            }
        }
        if (limitEnable == true) {
            if (msgParent.children.length > msgLimit) {
                $('#log>div').not($('#log>div').slice(-msgLimit)).fadeOut();
            }
        }
    }
    // clear whole chat but not /timeout /ban
    if (obj.detail.command === "CLEARCHAT" && typeof obj.detail.body === "undefined") {
        $('#log').empty();
    }
});
