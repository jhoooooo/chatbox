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
        // variables
        let message_body = obj.detail.body;
        let display_name = obj.detail.tags["display-name"];
        let data_id = obj.detail["messageId"];
        let announcement_color = obj.detail.tags["msg-param-color"] || 'PRIMARY';
        let announcement_color_css = announcement_color.toLowerCase();
        // create element
        let elem = document.createElement('div');
        elem.classList.add('wrapper');
        elem.setAttribute("data-from", display_name);
        elem.setAttribute("data-id", data_id);
        // element matching chatbox HTML's section
        elem.innerHTML = `<div class="message-box announcement announcement-${announcement_color_css}"><div class="child meta"><span class="name">${display_name}</span></div><span class="child message">: ${message_body}</span></div>`;
        // append element to chatbox
        document.getElementById("log").appendChild(elem);
        // animation to match normal messages
        if (smoothscroll == true) {
            $('#log>div').last().hide().slideToggle(600, "easeInOutQuart");
        }
    }
});

