/*
- Jho Chatbox - Default Theme
- Version 2.0
- Last modified: Sunday, 9th October 2022, 10:23:53 pm
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
    const reply = {enable_reply};
    const reply_limit = {reply_limit};
    const display_announcement = {display_announcement};

    function smoothscroll_f() {
        if (smoothscroll == true){
            $('#log>div').last().hide().slideToggle(600, "easeInOutQuart");
        }
    }
    //announcement
    if (display_announcement === true) {
        if (obj.detail.command === "USERNOTICE" && obj.detail.tags["msg-id"] === "announcement") {
            // variables
            let message_body = obj.detail.body;
            let display_name = obj.detail.tags["display-name"];
            let data_id = obj.detail["messageId"];
            let announcement_color = obj.detail.tags["msg-param-color"] || 'PRIMARY'; //default to primary if null
            let announcement_color_css = announcement_color.toLowerCase();
            // create element
            let elem = document.createElement('div');
            elem.classList.add('wrapper', 'announcement', `announcement_${announcement_color_css}`);
            elem.setAttribute("data-from", display_name);
            elem.setAttribute("data-id", data_id);
            // element matching chatbox HTML's section
            elem.innerHTML = `<div class="message-box"><div class="child meta"><svg class='svg_announcement' xmlns="http://www.w3.org/2000/svg" viewBox="-2 -3 24 24" width="1em" fill="currentColor"><path d="M12.8 1.613l6.701 11.161c.963 1.603.49 3.712-1.057 4.71a3.213 3.213 0 0 1-1.743.516H3.298C1.477 18 0 16.47 0 14.581c0-.639.173-1.264.498-1.807L7.2 1.613C8.162.01 10.196-.481 11.743.517c.428.276.79.651 1.057 1.096zm-2.22.839a1.077 1.077 0 0 0-1.514.365L2.365 13.98a1.17 1.17 0 0 0-.166.602c0 .63.492 1.14 1.1 1.14H16.7c.206 0 .407-.06.581-.172a1.164 1.164 0 0 0 .353-1.57L10.933 2.817a1.12 1.12 0 0 0-.352-.365zM10 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1z"></path></svg><span class="announcement_name">${display_name} : </span></div><span>${message_body}</span></div>`;
            // append element to chatbox
            document.getElementById("log").appendChild(elem);
            smoothscroll_f();
        }
    }

    //chat
    if (obj.detail.command === "PRIVMSG" || obj.detail.command === "youtube#liveChatMessage") {
        if (limitEnable == true) {
            if (msgParent.children.length > msgLimit) {
                $('#log>div').not($('#log>div').slice(-msgLimit)).fadeOut();
            }
        }

        // Replies
        if (typeof obj.detail.tags["reply-parent-msg-body"] != "undefined") {
            if (reply == true) {
                let parent_msg = obj.detail.tags["reply-parent-msg-body"];
                let parent_msg_id = obj.detail.tags["reply-parent-msg-id"];
                let new_parent_msg = parent_msg.replaceAll('\\\s', ' ')
                let truncated_parent_msg = new_parent_msg.substring(0, reply_limit) + "...";
                reply_to = obj.detail.tags["reply-parent-display-name"];
                last_elem = $('#log>div>div').last();
                last_elem.before(`<div class='reply_to message' data-id="${parent_msg_id}"><?xml version="1.0" encoding="UTF-8"?>
                <svg class="reply_svg" width="1em" fill="currentColor" viewBox="-2 -2.5 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 0h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-6.958l-6.444 4.808A1 1 0 0 1 2 18.006V14a2 2 0 0 1-2-2V3a3 3 0 0 1 3-3zm6.378 12H17a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1 1 1 0 0 1 1 1v3.013L9.378 12zM13 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM7 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
                </svg> replying to @${reply_to} : ${truncated_parent_msg} </div>`);

                $('.wrapper:has(.reply_to)').addClass('border');
                smoothscroll_f();
            }
        }
        smoothscroll_f();
    }
    // clear whole chat but not /timeout /ban
    if (obj.detail.command === "CLEARCHAT" && typeof obj.detail.body === "undefined") {
        $('#log').empty();
    }
});
