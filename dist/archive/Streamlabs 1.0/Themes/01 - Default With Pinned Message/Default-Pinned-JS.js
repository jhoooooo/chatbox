// Please use event listeners to run functions.
document.addEventListener('onLoad', function(obj) {
    // obj will be empty for chat widget
    // this will fire only once when the widget loads
});

let pinMessageStatus = 0;

document.addEventListener('onEventReceived', function (obj) {
    // obj will contain information about the event
    console.log(obj.detail); // OBJ Logs

    const smoothscroll = {smoothscroll};
    const limitEnable = {enable_limit};
    const msgLimit = {message_limit};
    const msgParent = document.querySelector('.sl__chat__layout');
    // pinned message
    const messageBody = obj.detail.body;
    let pinnedCommand = "!pin";
    let unpinCommand = "!unpin";
    let pinMessageBody = messageBody.replace('!pin', '');

    if (obj.detail.command === "PRIVMSG") {
        if (smoothscroll == true) {
            $('#log>div').last().hide().slideToggle(600, "easeInOutQuart");
        }
        if (limitEnable == true) {
            if (msgParent.children.length > msgLimit) {
                $('#log>div').not($('#log>div').slice(-msgLimit)).fadeOut();
            }
        }
        if (messageBody.includes(pinnedCommand) && pinMessageStatus === 0){
            $("#custom_html").append(`<div class="pinnedMessage"><svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="-2.5 -2.5 24 24" width="24" fill="currentColor"><path d="M12.626 11.346l-.184-1.036 4.49-4.491-2.851-2.852-4.492 4.49-1.035-.184a5.05 5.05 0 0 0-2.734.269l6.538 6.537a5.05 5.05 0 0 0 .268-2.733zm-4.25 1.604L2.67 18.654a1.008 1.008 0 0 1-1.426-1.426l5.705-5.704L2.67 7.245a7.051 7.051 0 0 1 6.236-1.958l3.747-3.747a2.017 2.017 0 0 1 2.853 0l2.852 2.853a2.017 2.017 0 0 1 0 2.852l-3.747 3.747a7.051 7.051 0 0 1-1.958 6.236L8.376 12.95z"></path></svg>${pinMessageBody}</div>`);
            pinMessageStatus = 1;
        }
        if (messageBody.includes(pinnedCommand) && pinMessageStatus === 1){
            $(".pinnedMessage").remove();
            $("#custom_html").append(`<div class="pinnedMessage"><svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="-2.5 -2.5 24 24" width="24" fill="currentColor"><path d="M12.626 11.346l-.184-1.036 4.49-4.491-2.851-2.852-4.492 4.49-1.035-.184a5.05 5.05 0 0 0-2.734.269l6.538 6.537a5.05 5.05 0 0 0 .268-2.733zm-4.25 1.604L2.67 18.654a1.008 1.008 0 0 1-1.426-1.426l5.705-5.704L2.67 7.245a7.051 7.051 0 0 1 6.236-1.958l3.747-3.747a2.017 2.017 0 0 1 2.853 0l2.852 2.853a2.017 2.017 0 0 1 0 2.852l-3.747 3.747a7.051 7.051 0 0 1-1.958 6.236L8.376 12.95z"></path></svg>${pinMessageBody}</div>`);
            pinMessageStatus = 1;
        }
        if (messageBody.includes(unpinCommand) && pinMessageStatus === 1){
            $(".pinnedMessage").remove();
            pinMessageStatus = 0;
        }
        console.log(pinMessageStatus);
            
    }
    // clear whole chat but not /timeout /ban
    if (obj.detail.command === "CLEARCHAT" && typeof obj.detail.body === "undefined") {
        $('#log').empty();
    }
});
