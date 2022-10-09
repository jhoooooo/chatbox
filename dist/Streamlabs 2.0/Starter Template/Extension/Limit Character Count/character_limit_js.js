// Last modified: Sunday, 31st July 2022, 11:51:11 am
// This method takes raw message from Twitch IRC obj.
// Therefore it will not parse emotes as they are parse by SLOBS.

const charLimit = {character_limit}; // <-- SLOBS Custom Fields

if (obj.detail.command === "PRIVMSG") {
    // Limit character
    if (obj.detail.body.length > charLimit) {
        obj.detail.body = obj.detail.body.slice(0, charLimit);
        $(".message").last().append(obj.detail.body + '...');
    } else {
        $(".message").last().append(obj.detail.body);
    }
}