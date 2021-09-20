// Please use event listeners to run functions.
document.addEventListener('onLoad', function(obj) {
    // obj will be empty for chat widget
    // this will fire only once when the widget loads
});


document.addEventListener('onEventReceived', function(obj) {
    // obj will contain information about the event
  	console.log(obj.detail); // OBJ Logs
    const dt = luxon.DateTime;
    const now = dt.now();
    const tt = now.toLocaleString(dt.TIME_SIMPLE);
    const classes = ["pastel-01", "pastel-02", "pastel-03", "pastel-04", "pastel-05", "pastel-06", "pastel-07", "pastel-08", "pastel-09", "pastel-10"];
    let randomClasses = Math.floor(Math.random() * (10 - 1)) + 1;
    //smoothscroll animation
    const smoothscroll = {smoothscroll};
    const limitEnable = {limit-enable};
    const msgLimit = {msg-limit};
    const msgParent = document.querySelector('.sl__chat__layout');

    if (obj.detail.command === "PRIVMSG") { // Prevent animation for ping events - Curtis Geiger
        if (smoothscroll == true) {
            $('#log>div').last().hide().slideToggle(600, "easeInOutQuart"); //New animation code
        }
        $(".time").last().text(tt);
        $(".message-box").last().addClass(classes[randomClasses]);
        if (limitEnable == true) {
            if (msgParent.children.length > msgLimit) {
                $('#log>div').not($('#log>div').slice(-msgLimit)).fadeOut();
            }
        }
    }
});