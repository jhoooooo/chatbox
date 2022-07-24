window.addEventListener('onWidgetLoad', function (obj) {

});

// Version
const consoleStyle = 'background-color: yellow; color: black; padding:4px; font-size:14px; font-weight:900;'
console.log("%cJho Chatbox - Version 20 APRIL 2022 @ 05.25 PM", consoleStyle);


// Event Variables
let latestSubName, latestFolName, latestHostName, latestCheerName, latestTipName, latestRaidName;

// User Config
/*
@param {{example}} is 'key' from FIELDS section. SE will autopopulate.

*/

const hideBotsCommands = {{hideBots}};
const botNames = '{{botNames}}';
const disableAnimation = {{disableAnimation}};
const useUserColor = {{useUserColor}};
let userColor;

// Event Listener
window.addEventListener('onEventReceived', function (obj) {
    console.log(obj.detail); //obj logger

    // Assigning Event Data
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
    // Chat Message Handler
    /*
    If obj is a message, populate each variable with relevant data.
    Command is detected by using first character in the message body "renderedText.charAt(0)"
    {useUserColor} refer to Twitch's chat username color
    */
    if (obj.detail.listener === "message") {
        let chatUsername = obj.detail.event.data.displayName;
        let chatMessage = obj.detail.event.renderedText;
        let msgId = obj.detail.event.data.msgId;
        let userId = obj.detail.event.data.userId;
        const botNamesArray = botNames.split(' '); //splitting bot names from FIELDS into an array
        let isCommand = obj.detail.event.renderedText.charAt(0);

        if (useUserColor === true) {
            userColor = obj.detail.event.data.displayColor;
        } else {
            userColor = '';
        }

        // Badges handler
        /*
        Grab badges from obj and populate into an HTML-ed array
        */
        let badges = obj.detail.event.data.badges;
        let urlsArray = '';
        for (let i = 0; i < badges.length; i++) {
            let url = badges[i].url;
            let type = badges[i].type;
            urlsArray += `<img src="${url}" class="badge ${type}"></img>`;
        }

        // Updated Rendered Message
        let renderedMessage = `<div class="messages" data-msgId="${msgId}" data-userId="${userId}"><div class="badges">${urlsArray}</div><div class="name" style="color:${userColor};">${chatUsername}</div><div class="message">${chatMessage}</div></div>`;

        /* !!
        Using Event Data With Chat Messages
        -----------------------------------
        Normally, rendered message above is enough for normal chatbox overlay. But you can extend
        with more data from events. So not only you can detect who in your chat is mod, subs, vip
        etc(via message obj), you can also detect latest subscriber, follower, raider
        etc(via event obj) and do whatever with that info. Example below, I added new CSS class
        if the chatter is the latest subscriber.
        */

        if (obj.detail.event.data.displayName === latestSubName) {
            renderedMessage = `<div class="messages latest-subscriber" data-msgId="${msgId}" data-userId="${userId}"><div class="badges">${urlsArray}</div><div class="name" style="color:${userColor};">${chatUsername}</div><div class="message">${chatMessage}</div></div>`;
        }

        // Append Final Rendered Message
        /*
        Append final message to chat overlay with animation & event/command skipper.
        ! Animation is basically the same as the one I use on Streamlabs but somehow have stutter in the
        beginning of the animation unlike Streamlabs. IDK why.

        */
        if (hideBotsCommands === true ){
            if (botNamesArray.includes(obj.detail.event.data.nick) || isCommand === "!"){
                console.log('Message skipped');
            }
            else {
                $(".chatbox").append(renderedMessage);
                if(disableAnimation === false){
                    $(".chatbox>div").last().hide().slideToggle(200, "swing");
                }
            }
        } else {
            $(".chatbox").append(renderedMessage);
            if(disableAnimation === false){
                $(".chatbox>div").last().hide().slideToggle(200, "swing");
            }
        }

    }

    // Delete messages & timeouts
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
