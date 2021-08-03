// Random gif for PWG.

const classes = ["gifone", "giftwo", "gifthree"]; //class name of each gif
let randomClasses = Math.floor(Math.random() * 3); //3 is number of gifs

if (obj.detail.command === "PRIVMSG") { // Prevent animation for ping events - Curtis Geiger
    $('#log>div').last().hide().slideToggle(600, "easeInOutQuart"); //New animation code
    $(".message-box").last().addClass(classes[randomClasses]); //append the gif
}