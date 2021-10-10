// Please use event listeners to run functions.
document.addEventListener('onLoad', function (obj) {
    // obj will be empty for chat widget
    // this will fire only once when the widget loads
});

document.addEventListener('onEventReceived', function (obj) {
    // obj will contain information about the event
    console.log(obj.detail); // OBJ Logs
    const msgParent = document.querySelector('.sl__chat__layout');
    const specialList = '{special_list}';
    const specialNames = specialList.split(' ');

    if (obj.detail.command === "PRIVMSG") {
        $('#log>div').last().animate({
            "max-height": "500px",
        }, 100);
        if (specialNames.indexOf(obj.detail.from) !== -1) {
            $(".message-box").last().addClass("special");
        }
    }
    if (obj.detail.command === "CLEARCHAT") {
        $('#log').empty();
    }
});
