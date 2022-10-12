//randomize which image get attach 

const classes = ["gif_one", "gif_two", "gif_three"]; //class name of each gif
let randomClasses = Math.floor(Math.random() * 3); //3 is number of gifs

if (obj.detail.command === "PRIVMSG") { 
    $('#log>div').last().hide().slideToggle(600, "easeInOutQuart");
    $(".message-box").last().addClass(classes[randomClasses]); //generate random
}