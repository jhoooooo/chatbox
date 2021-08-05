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

    if (obj.detail.command === "PRIVMSG") { // Prevent animation for ping events - Curtis Geiger
        if (smoothscroll == true) {
            $('#log>div').last().hide().slideToggle(600, "easeInOutQuart"); //New animation code
        }
        var randomNumber = function(max, min) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        var bottom = randomNumber(5, 20);
        var right = randomNumber(10, 90);
        var size = randomNumber(15, 50);
        var heartsId = randomNumber(10000, 50000);
        let defaultImage = "";
        const customImage = {custom-image};
        let heartsAni = "{animation}";

        if(customImage == true) {
            defaultImage = "{custom-image-uploaded}";
        } else {
            defaultImage = "data:image/svg+xml;base64,PHN2ZyAKCXhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKCXdpZHRoPSIyNCIKCWhlaWdodD0iMjQiCgl2aWV3Ym94PSIwIDAgMjQgMjQiPgoJPHBhdGggZmlsbD0icmVkIiBkPSJNMTIgMjEuMzVsLTEuNDUtMS4zMmMtNS4xNS00LjY3LTguNTUtNy43NS04LjU1LTExLjUzIDAtMy4wOCAyLjQyLTUuNSA1LjUtNS41IDEuNzQgMCAzLjQxLjgxIDQuNSAyLjA5IDEuMDktMS4yOCAyLjc2LTIuMDkgNC41LTIuMDkgMy4wOCAwIDUuNSAyLjQyIDUuNSA1LjUgMCAzLjc4LTMuNCA2Ljg2LTguNTUgMTEuNTRsLTEuNDUgMS4zMXoiLz4KPC9zdmc+";
        }

        $("#custom_html").append('<span class="hearts' + ` hearts-${heartsId}` + ` ${heartsAni}"` + 'style="position: absolute; bottom:' + bottom + '%; right:' + right + '%;"><img width="' + size + '"' + `src="${defaultImage}` + '"></img></span>');
        setTimeout(function () { $(`.hearts-${heartsId}`).remove(); }, 3000);
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