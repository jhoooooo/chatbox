/*    /announce support for Streamlabs.

$msg-param-color only available if send thru twitch's site. does not exist from chatterino.


*/

if (obj.detail.command === "USERNOTICE" && obj.detail.tags["msg-id"] === "announcement") {
    console.log(obj.detail);
    let message_body = obj.detail.body;
    let user_name = obj.detail.tags["display-name"];
    let announcement_color = obj.detail.tags["msg-param-color"];
    //append to chatbox - no emote support as sl parse those.
}

