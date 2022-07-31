/*
    Starter Template 
    Last modified: Monday, 11th July 2022, 3:46:41 pm
*/

// Please use event listeners to run functions.
document.addEventListener('onLoad', function(obj) {
    // obj will be empty for chat widget
    // this will fire only once when the widget loads
});

document.addEventListener('onEventReceived', function (obj) {
    
    // Clearing chat- adding support for '/clear' command
    // Streamlabs already handling '/timeout' & '/ban' so those are not necessary
    if (obj.detail.command === "CLEARCHAT" && typeof obj.detail.body === "undefined") {
        $('#log').empty();
    }

    // other extra functionalities can be added below this comment

    
});

