// Please use event listeners to run functions.
document.addEventListener('onLoad', function (obj) {
  // obj will be empty for chat widget
  // this will fire only once when the widget loads
});

document.addEventListener('onEventReceived', function (obj) {
  // obj will contain information about the event
  console.log(obj.detail); // OBJ Logs
  var randomNumber = function(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  var chatId = randomNumber(10, 50000); //im lazy. chance are same number in 10 seconds is low.
  var yPosition = randomNumber(10, 90); //mesage y position.
  let width = $(window).width(); //window width.
  let spanWidth = $('#log>div').last().width(); //mesasge span length.
  let fullWidth = width + spanWidth + 50; //+ 50px buffer to ensure no bleeding in.
  let translateX = "translateX( -" + fullWidth + "px)"; //to ensure message go pass window width

  if (obj.detail.command === "PRIVMSG") { // Prevent animation for ping events - Curtis Geiger
    $('#log>div').last().addClass(`marquee chat-${chatId}`).css("top", yPosition + "%");
    $('#log>div').last().css("transform", translateX );
    setTimeout(function () { $(`.chat-${chatId}`).remove(); }, 10000);
  }

});
