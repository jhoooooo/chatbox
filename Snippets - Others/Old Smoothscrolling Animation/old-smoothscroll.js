//old smoothscroll

if (obj['detail']['command'] === 'PRIVMSG') {
    $('#log>div:last-child').css({
        'opacity': '0',
        'display': 'none'
    }).slideDown(300).animate({
        opacity: 1
    }, 300);
}
