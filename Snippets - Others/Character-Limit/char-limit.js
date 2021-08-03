const charLimit = {char-limit};

if (obj.detail.command === "PRIVMSG") { // Prevent animation for ping events - Curtis Geiger
    // Limit character
    if (obj.detail.body.length > charLimit) {
        obj.detail.body = obj.detail.body.slice(0, charLimit);
        $(".message").last().append(obj.detail.body + '...');
    } else {
        $(".message").last().append(obj.detail.body);
    }
}

//{message} on html need to be removed.

// code for custom field section: 510 is Twitch default char limit.

"char-limit": {
    "label": "Message character limit",
    "type": "slider",
    "name": "",
    "value": 510,
    "max": 510,
    "min": 1,
    "steps": 1
}