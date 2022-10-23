// Please use event listeners to run functions.
document.addEventListener('onLoad', function(obj) {
    // obj will be empty for chat widget
    // this will fire only once when the widget loads
});

document.addEventListener('onEventReceived', function (obj) {
    // obj will contain information about the event
    console.log(obj.detail); // OBJ Logs

    const smoothscroll = {smoothscroll};
    const limitEnable = {limit_enable};
    const msgLimit = {msg_limit};
    const msgParent = document.querySelector('.sl__chat__layout');

    if (obj.detail.command === "PRIVMSG" || obj.detail.command === "youtube#liveChatMessage") {
        if (smoothscroll == true) {
            $('#log>div').last().hide().slideToggle(600, "easeInOutQuart");
        }
        if (limitEnable == true) {
            if (msgParent.children.length > msgLimit) {
                $('#log>div').not($('#log>div').slice(-msgLimit)).fadeOut();
            }
        }
    }
    // Announcement
    if (obj.detail.command === "USERNOTICE" && obj.detail.tags["msg-id"] === "announcement") {
        // console.log(obj.detail.body);
        const announcement = document.createElement("div");
        announcement.innerText = obj.detail.body;
        announcement.setAttribute ('class', 'announcement');
        document.body.appendChild(announcement).hide().fadeIn(1000);
        // remove element after 3s
        setTimeout(function () {
            $('.announcement').fadeOut(1000, function() {
                $('.announcement').remove();
            });
        }, 10000);
    }

    // clear whole chat but not /timeout /ban
    if (obj.detail.command === "CLEARCHAT" && typeof obj.detail.body === "undefined") {
        $('#log').empty();
    }
});
