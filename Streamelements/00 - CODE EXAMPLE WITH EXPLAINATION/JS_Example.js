window.addEventListener('onWidgetLoad', function (obj) {

});

//* Console styling
const consoleStyle = 'background-color: yellow; color: black; padding:4px; font-size:14px; font-weight:900;'
console.log("%cJho Chatbox - Version 20 APRIL 2022 @ 05.25 PM", consoleStyle);


//Event data variables
let latestSubName, latestFolName, latestHostName, latestCheerName, latestTipName, latestRaidName;

window.addEventListener('onEventReceived', function (obj) {
    console.log(obj.detail); //obj logger
    //* Latest Event Data - Assign to respective variable.
    switch (obj.detail.listener) {
        case "subscriber-latest":
            latestSubName = obj.detail.event.name;
            break
        case "follower-latest":
            latestFolName = obj.detail.event.name;
            break
        case "host-latest":
            latestHostName = obj.detail.event.name;
            break
        case "cheer-latest":
            latestCheerName = obj.detail.event.name;
            break
        case "tip-latest":
            latestTipName = obj.detail.event.name;
            break
        case "raid-latest":
            latestRaidName = obj.detail.event.name;
            break
    }
    // Chat Messages Handler
    if (obj.detail.listener === "message") {

        //Normal Messages Handler
        //Data and settings from Field section.
        let chatUsername = obj.detail.event.data.displayName;
        let chatMessage = obj.detail.event.renderedText;
        let msgId = obj.detail.event.data.msgId;
        let userId = obj.detail.event.data.userId;
        const hideBotsCommands = {{hideBots}};
        const botNames = '{{botNames}}'; //{{example}} is data from field section
        const botNamesArray = botNames.split(' ');
        let isCommand = obj.detail.event.renderedText.charAt(0);
        const disableAnimation = {{disableAnimation}};
        const useUserColor = {{useUserColor}};
        let userColor = '';
        if ( useUserColor === true ){
            userColor = obj.detail.event.data.displayColor;
        } else {
            userColor = '';
        }

        //* Handle badges
        let badges = obj.detail.event.data.badges;
        let urlsArray = '';
        for (let i = 0; i < badges.length; i++) {
            let url = badges[i].url;
            let type = badges[i].type;
            urlsArray += `<img src="${url}" class="badge ${type}"></img>`;
        }

        //* Combine all
        let renderedMessage = `<div class="messages" data-msgId="${msgId}" data-userId="${userId}"><div class="badges">${urlsArray}</div><div class="name" style="color:${userColor};">${chatUsername}</div><div class="message">${chatMessage}</div></div>`;

        // ============================================================== //
        //Using Event Data With Chat Messages 
        //So not only you can detect who in your chat is mod, subs, vip etc(via normal message obj details), you can also detect latest subscriber, follower, raider etc(via event obj details) and do whatever with that info. Example below

        if (obj.detail.event.data.displayName === latestSubName){
            //do stuff here. In example below, latest subsriber messages will have a different background color compared to other messages in chat. (new class latest-subscriber added)
            renderedMessage = `<div class="messages latest-subscriber" data-msgId="${msgId}" data-userId="${userId}"><div class="badges">${urlsArray}</div><div class="name" style="color:${userColor};">${chatUsername}</div><div class="message">${chatMessage}</div></div>`;
        }
        //END Using Event Data With Chat Messages
        // ============================================================== //

        //* Append Chat Messages To Chatbox
        if (hideBotsCommands === true ){
            if (botNamesArray.includes(obj.detail.event.data.nick) || isCommand === "!"){
                console.log('Message skipped');
            }
            else {
                $(".chatbox").append(renderedMessage);
                //* Animation - Normal 600 is somehow have stutter in the beginning of the animation unlike SL.
                if(disableAnimation === false){
                    $(".chatbox>div").last().hide().slideToggle(200, "swing");
                }
            }
        } else {
            $(".chatbox").append(renderedMessage);
            //* Animation - Normal 600 is somehow have stutter in the beginning of the animation unlike SL.
            if(disableAnimation === false){
                $(".chatbox>div").last().hide().slideToggle(200, "swing");
            }
        }

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
