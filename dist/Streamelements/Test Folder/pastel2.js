window.addEventListener('onWidgetLoad', function (obj) {

});

window.addEventListener('onEventReceived', function (obj) {
    //console.log(obj.detail);
    if (obj.detail.listener === "message") {
        //* Assign data
        let chatUsername = obj.detail.event.data.displayName;
        let chatMessage = obj.detail.event.renderedText;
        let msgId = obj.detail.event.data.msgId;
        let userId = obj.detail.event.data.userId;

        //* Handle badges
        let badges = obj.detail.event.data.badges;
        let urlsArray = '';
        for (let i = 0; i < badges.length; i++) {
            let url = badges[i].url;
            let type = badges[i].type;
            urlsArray += `<img src="${url}" class="badge ${type}"></img>`;
        }

        //* Combine all
        let renderedMessage = `<div class="messages" data-msgId="${msgId}" data-userId="${userId}"><div class="badges">${urlsArray}</div><div class='name'>${chatUsername}</div><div class='message'>${chatMessage}</div></div>`;

        //* Append Chat Messages
        $(".chatbox").append(renderedMessage);
        //* Animation - Normal 600 is somehow have stutter in the beginning of the animation unlike SL.
        $(".chatbox>div").last().hide().slideToggle(200, "swing");

    }
    //* Delete messages & timeouts
    if (obj.detail.listener === "delete-message") {
        let delMsgId =  obj.detail.event.msgId;
        $("div[data-msgid='" +delMsgId+ "']").remove();
    }
    if (obj.detail.listener === "delete-messages") {
        let delUserId =  obj.detail.event.userId;
        if (delUserId === undefined){
            $(".chatbox").empty();
        }
        else {
            $("div[data-userid='" +delUserId+ "']").remove();
        }
    }
});
