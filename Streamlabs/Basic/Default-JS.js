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

    if (obj.detail.command === "PRIVMSG") {
        if (smoothscroll == true) {
            $('#log>div').last().hide().slideToggle(600, "easeInOutQuart");
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
    // Append Announcement To Chatbox (Default Theme)
    if (obj.detail.command === "USERNOTICE" && obj.detail.tags["msg-id"] === "announcement") {
        let message_body = obj.detail.body;
        let user_name = obj.detail.tags["display-name"];
        let data_id = obj.detail["messageId"];
        let announcement_color = obj.detail.tags["msg-param-color"] || 'PRIMARY';
        let node = document.createElement('div');
        node.classList.add('wrapper');
        node.setAttribute("data-from", user_name);
        node.setAttribute("data-id", data_id);
        node.innerHTML = `<div class="message-box ${announcement_color}"><div class="child meta"><span class="badges"><span class="name">${user_name}</span></div><span class="child message">: ${message_body}</span></div>`;
        document.getElementById("log").appendChild(node);
        if (smoothscroll == true) {
            $('#log>div').last().hide().slideToggle(600, "easeInOutQuart");
        }
    }
});

