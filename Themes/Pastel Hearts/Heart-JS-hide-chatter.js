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
    const isCommand = obj.detail.body.charAt(0);
    const botNames = ["nightbot","moobot","xanbot","deepbot","vivbot","phantombot","streamelements"];

    if (obj.detail.command === "PRIVMSG") { // Prevent animation for ping events - Curtis Geiger

        if (botNames.indexOf(obj.detail.from) == -1 && isCommand != "!"){

            // Assign BG Color
            const bgColor = ["#fccba8", "#f1dca2", "#c7e4c7", "#95d1ec", "#cfd6ed", "#d5e59d", "#f9e381", "#f1c3b7", "#d3bbdb", "#d1cfd9", "#a5dacd", "#d0eae6"];
            const str = obj.detail.tags["display-name"]; //Username
            function assignNumber(str) {
                let total = 0;
                for (let i = 0; i < str.length; i++) {
                    total += str.charCodeAt(i);
                }
                return (total % 11); //color list - 1
            }
            bgId = assignNumber(str); //assign user a color based on their name.
            $('.message-box').last().css("background-color", bgColor[bgId]); //append the color

            //smoothscroll
            if (smoothscroll == true) {
                $('#log>div').last().hide().slideToggle(600, "easeInOutQuart"); //New animation code
            }

            // On event received - Heart animation
            var randomNumber = function(max, min) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            };
            var bottom = randomNumber(5, 20);
            var right = randomNumber(10, 90);
            var size = randomNumber(15, 50);
            var heartsId = randomNumber(100, 50000);
            let defaultImage = "";
            const customImage = {custom-image};
            let heartsAni = "{animation}";

            if(customImage == true) {
                defaultImage = "{custom-image-uploaded}";
            } else {
                defaultImage = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIxOCI+PHJlY3QgaWQ9ImJhY2tncm91bmRyZWN0IiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4PSIwIiB5PSIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiIGNsYXNzPSIiIHN0eWxlPSIiLz4KCQo8ZyBjbGFzcz0iY3VycmVudExheWVyIiBzdHlsZT0iIj48dGl0bGU+TGF5ZXIgMTwvdGl0bGU+PHBhdGggZmlsbD0iI2U1NmQ0MiIgZD0iTTEwLjAwMDAwMTgzMDIxMjI4OCwxNy41NTA1MTQ5NzQwNTk2MSBsLTEuMzUxMzA3NDcxMTA1NzQ0LC0xLjIzMDE1NTc2Njc5OTcxMTggYy00Ljc5OTQ3MTM2Mjg5MjgxNSwtNC4zNTIxNDE5OTMxNDc0NjUgLTcuOTY4MDU0Mzk4NTg5MDQzLC03LjIyMjUwNTQ0OTAxMzQ1OSAtNy45NjgwNTQzOTg1ODkwNDMsLTEwLjc0NTIyNDIzNTc1ODA4NyBjMCwtMi44NzAzNjM0NTU4NjU5OTQ1IDIuMjU1Mjg1NTcyNDY2MTM4LC01LjEyNTY0OTAyODMzMjEzMiA1LjEyNTY0OTAyODMzMjEzMiwtNS4xMjU2NDkwMjgzMzIxMzIgYzEuNjIxNTY4OTY1MzI2ODkzOSwwIDMuMTc3OTAyMzk3NTY1OTIyNCwwLjc1NDg2ODMxMTQ0NTI3NzMgNC4xOTM3MTI4NDEzNjI2NTQsMS45NDc3NDY2MzA3NjYyMTA0IGMxLjAxNTgxMDQ0Mzc5NjczMTUsLTEuMTkyODc4MzE5MzIwOTMyNSAyLjU3MjE0Mzg3NjAzNTc2MTMsLTEuOTQ3NzQ2NjMwNzY2MjEwNCA0LjE5MzcxMjg0MTM2MjY1NCwtMS45NDc3NDY2MzA3NjYyMTA0IGMyLjg3MDM2MzQ1NTg2NTk5NDUsMCA1LjEyNTY0OTAyODMzMjEzMiwyLjI1NTI4NTU3MjQ2NjEzOCA1LjEyNTY0OTAyODMzMjEzMiw1LjEyNTY0OTAyODMzMjEzMiBjMCwzLjUyMjcxODc4Njc0NDYyOTIgLTMuMTY4NTgzMDM1Njk2MjI3Miw2LjM5MzA4MjI0MjYxMDYyNCAtNy45NjgwNTQzOTg1ODkwNDMsMTAuNzU0NTQzNTk3NjI3NzgyIGwtMS4zNTEzMDc0NzExMDU3NDQsMS4yMjA4MzY0MDQ5MzAwMTY5IHoiIGlkPSJzdmdfMSIgY2xhc3M9IiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMyNDI0MjQiIHN0cm9rZS1vcGFjaXR5PSIxIi8+PC9nPjwvc3ZnPg==";
            }
            // Append heart
            $("#custom_html").append('<span class="hearts' + ` hearts-${heartsId}` + ` ${heartsAni}"` + 'style="position: absolute; bottom:' + bottom + '%; right:' + right + '%;"><img width="' + size + '"' + `src="${defaultImage}` + '"></img></span>');
            setTimeout(function () { $(`.hearts-${heartsId}`).remove(); }, 3000);
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