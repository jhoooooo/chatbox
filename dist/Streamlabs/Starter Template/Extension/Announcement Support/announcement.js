// Append Announcement To Chatbox
if (obj.detail.command === "USERNOTICE" && obj.detail.tags["msg-id"] === "announcement") {
    // variables
    let message_body = obj.detail.body;
    let display_name = obj.detail.tags["display-name"];
    let data_id = obj.detail["messageId"];
    let announcement_color = obj.detail.tags["msg-param-color"] || 'PRIMARY';
    let announcement_color_css = announcement_color.toLowerCase();
    // create element
    let elem = document.createElement('div');
    elem.classList.add('wrapper');
    elem.setAttribute("data-from", display_name);
    elem.setAttribute("data-id", data_id);
    // element matching chatbox HTML's section
    elem.innerHTML = `<div class="message-box announcement announcement_${announcement_color_css}"><div class="child meta"><span class="name">${display_name}</span></div><span class="child message">: ${message_body}</span></div>`;
    // append element to chatbox
    document.getElementById("log").appendChild(elem);
}