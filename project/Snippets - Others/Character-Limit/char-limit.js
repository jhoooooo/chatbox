// This method takes raw message from Twitch IRC obj.
// Therefore it will not parse emotes as they are parse by SLOBS.

const charLimit = {char-limit}; // <-- SLOBS Custom Fields

if (obj.detail.command === "PRIVMSG") {
    // Limit character
    if (obj.detail.body.length > charLimit) {
        obj.detail.body = obj.detail.body.slice(0, charLimit);
        $(".message").last().append(obj.detail.body + '...');
    } else {
        $(".message").last().append(obj.detail.body);
    }
}

//{message} on html need to be removed. <-- This is message parsed by SLOBS.
// This method bypass it completely so no emotes.

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