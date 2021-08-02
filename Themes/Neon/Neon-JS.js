// Please use event listeners to run functions.
document.addEventListener('onLoad', function(obj) {
    // obj will be empty for chat widget
    // this will fire only once when the widget loads
});


document.addEventListener('onEventReceived', function(obj) {
    // obj will contain information about the event
  	console.log(obj.detail); // OBJ Logs

    //smoothscroll animation
    const smoothscroll = {smoothscroll};

    if (smoothscroll == true) {
        if (obj.detail.command === "PRIVMSG") { // Prevent animation for ping events - Curtis Geiger
            $('#log>div').last().hide().slideToggle(600, "easeInOutQuart"); //New animation code
        }
    }

    // Limit message shown
    const limitEnable = {limit-enable};
    const msgLimit = {msg-limit};
    const msgParent = document.querySelector('.sl__chat__layout');

    if (limitEnable == true) {
        if (msgParent.children.length > msgLimit) {
            $('#log>div').not($('#log>div').slice(-msgLimit)).fadeOut();
        }
    }

});
