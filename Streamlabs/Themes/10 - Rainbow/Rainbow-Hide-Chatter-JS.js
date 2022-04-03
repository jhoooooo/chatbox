// Please use event listeners to run functions.
document.addEventListener('onLoad', function(obj) {
    // obj will be empty for chat widget
    // this will fire only once when the widget loads
});

document.addEventListener('onEventReceived', function(obj) {
    // obj will contain information about the event
  	console.log(obj.detail); // OBJ Logs
    const botNames = ["nightbot","moobot","xanbot","deepbot","vivbot","phantombot","streamelements"];
    const smoothscroll = {smoothscroll};
    const limitEnable = {limit_enabler};
    const msgLimit = {message_limiter};
    const msgParent = document.querySelector('.sl__chat__layout');

    if (obj.detail.command === "PRIVMSG") {
        let isCommand = obj.detail.body.charAt(0);
        if (botNames.indexOf(obj.detail.from) == -1 && isCommand != "!"){
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
    if (obj.detail.command === "CLEARCHAT" && typeof obj.detail.body == "undefined") {
        $('#log').empty();
    }
});
