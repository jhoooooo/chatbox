// Please use event listeners to run functions.
document.addEventListener('onLoad', function(obj) {
    // obj will be empty for chat widget
    // this will fire only once when the widget loads
});


document.addEventListener('onEventReceived', function(obj) {
    // obj will contain information about the event
  	console.log(obj.detail); // OBJ Logs
    const hero = ["Akshan", "Aatrox", "Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Annie", "Aphelios", "Ashe", "Aurelion Sol", "Azir", "Bard", "Blitzcrank", "Brand", "Braum", "Caitlyn", "Camille", "Cassiopeia", "Cho'Gath", "Corki", "Darius", "Diana", "Dr Mundo", "Draven", "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Hecarim", "Heimerdinger", "Illaoi", "Irelia", "Ivern", "Janna", "Jarvan IV", "Jax", "Jayce", "Jhin", "Jinx", "Kai'Sa", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen", "Kha'Zix", "Kindred", "Kled", "Kog'Maw", "LeBlanc", "Lee Sin", "Leona", "Lillia", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "Master Yi", "Miss Fortune", "Mordekaiser", "Morgana", "Nami", "Nasus", "Nautilus", "Neeko", "Nidalee", "Nocturne", "Nunu and Willump", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke", "Qiyana", "Quinn", "Rakan", "Rammus", "Rek'Sai", "Rell", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Samira", "Sejuani", "Senna", "Seraphine", "Sett", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain", "Sylas", "Syndra", "Tahm Kench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere", "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Vel'Koz", "Vi", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xayah", "Xerath", "Xin Zhao", "Yasuo", "Yone", "Yorick", "Yuumi", "Zac", "Zed", "Ziggs", "Zilean", "Zoe", "Zyra"]; //hero lists 154

    function assignNumber(str) {
        let total = 0;
        for (let i = 0; i < str.length; i++) {
            total += str.charCodeAt(i);
        }
        return (total % 153); //hero list - 1
    }

    const str = obj.detail.tags["display-name"]; //username
    heroid = assignNumber(str); //hero assigned
    const dt = luxon.DateTime;
    const now = dt.now();
    const tt = now.toLocaleString(dt.TIME_24_SIMPLE); //time format
    const smoothscroll = {smoothscroll}; //enabling smoothscroll
    const timeEnable = {time-enable};
    const heroEnable = {hero-enable};
    const alltextEnable = {alltext-enable};

    if (obj.detail.command === "PRIVMSG") { // Prevent animation for ping events - Curtis Geiger
        if (timeEnable == true) {
            $(".time").last().text("["+tt+"]"); //append time
        }
        if (heroEnable == true) {
            $( ".hero" ).last().append("("+hero[heroid]+"):"); //append hero
        }
        if (alltextEnable == true) {
            $( ".all" ).last().append("[All]"); //append hero
        }
        if (smoothscroll == true) {
            $('#log>div').last().hide().slideToggle(600, "easeInOutQuart"); //New animation code
        }
        if (obj.detail.tags["subscriber"] == "1") // If subscriber
            {
                $(".hero").last().addClass("team"); //assign blue color
                $(".name").last().addClass("team");
            }
        else {
            $(".hero").last().addClass("enemy"); // assign red color
            $(".name").last().addClass("enemy");
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
    }

});
