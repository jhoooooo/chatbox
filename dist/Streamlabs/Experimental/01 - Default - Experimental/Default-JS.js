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

        // Experiment Starts - append reply parent
        if (typeof obj.detail.tags["reply-parent-msg-body"] != "undefined") {
            let parent_msg = obj.detail.tags["reply-parent-msg-body"];
            let parent_msg_id = obj.detail.tags["reply-parent-msg-id"];
            let new_parent_msg = parent_msg.replaceAll('\\\s', ' ')
            /* let truncated_parent_msg = new_parent_msg.substring(0,30) + "..."; */
            reply_to = obj.detail.tags["reply-parent-display-name"];
            last_elem = $('#log>div>div').last();
            last_elem.before(`<div class='reply_to message' data-id="${parent_msg_id}"><?xml version="1.0" encoding="UTF-8"?>
            <svg class="reply_svg" width="1em" fill="currentColor" viewBox="-2 -2.5 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 0h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-6.958l-6.444 4.808A1 1 0 0 1 2 18.006V14a2 2 0 0 1-2-2V3a3 3 0 0 1 3-3zm6.378 12H17a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1 1 1 0 0 1 1 1v3.013L9.378 12zM13 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM7 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
            </svg> replying to @${reply_to} : ${new_parent_msg} </div>`);

            $('.wrapper:has(.reply_to)').addClass('border');

            /*
            "reply-parent-display-name": "jhooooooooobot",
            "reply-parent-msg-body": "lorem\\sipsum",
            "reply-parent-msg-id": "c1ef3be6-0f54-4531-ac1f-f03ddd4f4b06",
            "reply-parent-user-id": "674193841",
            "reply-parent-user-login": "jhooooooooobot",
            */

        }


    }
    // clear whole chat but not /timeout /ban
    if (obj.detail.command === "CLEARCHAT" && typeof obj.detail.body === "undefined") {
        $('#log').empty();
    }
});
