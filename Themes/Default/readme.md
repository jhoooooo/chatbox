![alt text](https://raw.githubusercontent.com/jhoooooo/streamlabs-chat/master/Themes/Default/Screenshot-default.png)

### Default Template.

Each file can be open with notepad (right click > open with > notepad).

### Description.

This default template is targeted at those who want to spend lots of time to customize every little things.
It has the most options but it will look bad if you mindlessly alter all options and don't have a style in mind.
If you only want to change simple things, try other themes instead.
Other themes has less option to customize but already have a style to begin with.

### ! Warning
If you enabled the 'hide chatter option' in Streamlabs, use themename-hide-chatter.js file instead of the normal themename.js file.

### HTML

```<!-- item will be appened to this layout -->
<div id="log" class="sl__chat__layout">
</div>

<!-- chat item -->
<script type="text/template" id="chatlist_item">
  <div data-from="{from}" data-id="{messageId}">

    <div class="meta">
      <div class="username-box">
        <span class="name">{from}</span>
      </div>
    </div>

    <div class="crown">
   <span class="badges"></span>
    </div>

    <div class="message-box">
    <span class="message">{message}</span>
    </div>

  </div>
</script>
```

### CSS

```
/*
- Default
- Last Update: 02 Aug 2021
- https://github.com/jhoooooo/streamlabs-chat/
- https://twitter.com/JHOOOOOOOOOOOOQ
*/

@import url('https://fonts.googleapis.com/css?family=Open+Sans');
@import url('https://fonts.googleapis.com/css?family={font-choosen}');

* {
  box-sizing: border-box;
}

html, body {
  height: 100%;
  overflow: hidden;
}

body {
  background: {background_color};
  font-family: '{font-choosen}', 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: {font-weight};
  font-size: {font-size}px;
  line-height: 1.5em;
}

.colon {
  display: none;
}

#log {
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0 10px 10px 10px;
  width: 100%;
}

#log>div.deleted {
  visibility: hidden;
}

#log>div {
  margin-bottom: {message-box-margin}px;
  animation: fadeOut 0.5s ease {message_hide_delay} forwards;
  -webkit-animation: fadeOut 0.5s ease {message_hide_delay} forwards;
  /* Fadeout animation is needed here because if user disable(untick)
  'Disable Message Animations' in Streamlabs, 'Hide Message After'
  option will not work. */
}

.meta  {
  display: inline-block;
}

.crown {
  display: inline-block;
}

.badge {
  display: inline-block;
  margin: 0 0.2em;
  position: relative;
  height: fit-content;
  vertical-align: middle;
  margin-top: -2px;
}

.username-box {
  margin-bottom: {meta-box-margin}px;
  display: inline-block;
  background-color: {name-bg-color};
  border: {name-border}px solid {name-border-color};
  border-radius: {name-border-radius}px;
  -ms-transform: skewX(-{name-skew}deg); /* IE 9 */
   -webkit-transform: skewX(-{name-skew}deg); /* Safari */
   transform: skewX(-{name-skew}deg);
}
.name {
  display: inline-block;
  color: {name-font-color};
  text-transform: {name-transform};
  padding: {name-padding-tb}px {name-padding-lr}px ;
  -ms-transform: skewX({name-skew}deg); /* IE 9 */
   -webkit-transform: skewX({name-skew}deg); /* Safari */
   transform: skewX({name-skew}deg);
}

.message-box {
  margin-left: {message-box-offset};
  background-color: {message-bg-color};
  border: {message-border}px solid {message-border-color};
  border-radius: {message-border-radius}px;
  -ms-transform: skewX(-{message-skew}deg); /* IE 9 */
   -webkit-transform: skewX(-{message-skew}deg); /* Safari */
   transform: skewX(-{message-skew}deg);
}

.message {
  display: block;
  color: {message-font-color};
  text-transform: {message-transform};
  padding: {message-padding-tb}px {message-padding-lr}px ;
  word-wrap: break-word;
  -ms-transform: skewX({message-skew}deg); /* IE 9 */
   -webkit-transform: skewX({message-skew}deg); /* Safari */
   transform: skewX({message-skew}deg);
}

#log .emote {
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  padding: 0.4em 0.2em;
  position: relative;
}

#log .emote img {
  display: inline-block;
  height: 1em;
  opacity: 0;
}

```
### Custom Field

```
{
    "message-box-margin": {
        "label": "Spacing Between User",
        "type": "slider",
        "name": "Spacing Between User",
        "value": 5,
        "max": 30,
        "min": 0,
        "steps": 1
    },
    "meta-box-margin": {
        "label": "Spacing Between Username And Message",
        "type": "slider",
        "name": "Spacing Between Username And Message",
        "value": 5,
        "max": 30,
        "min": 0,
        "steps": 1
    },
    "font-choosen": {
        "label": "Font",
        "type": "fontpicker",
        "value": "Open Sans"
    },
    "font-size": {
        "label": "Font Size",
        "type": "slider",
        "name": "",
        "value": 14,
        "max": 60,
        "min": 10,
        "steps": 1
    },
    "font-weight": {
        "label": "Font Weight",
        "type": "slider",
        "name": "",
        "value": 600,
        "max": 900,
        "min": 100,
        "steps": 100
    },
    "name-font-color": {
        "label": "Username Text Color",
        "type": "colorpicker",
        "value": "#515E63"
    },
    "name-bg-color": {
        "label": "Username Background Color",
        "type": "colorpicker",
        "value": "#F1ECC3"
    },
    "name-transform": {
        "label": "Username Text Transform",
        "type": "dropdown",
        "options": {
            "none": "None",
            "uppercase": "Uppercase"
        },
        "value": "none"
    },
    "name-padding-tb": {
        "label": "Username Top/Bottom Padding",
        "type": "slider",
        "name": "",
        "value": 5,
        "max": 30,
        "min": 0,
        "steps": 1
    },
    "name-padding-lr": {
        "label": "Username Left/Right Padding",
        "type": "slider",
        "name": "",
        "value": 10,
        "max": 30,
        "min": 0,
        "steps": 1
    },
    "name-border": {
        "label": "Username Box Border Size",
        "type": "slider",
        "name": "Name Border Size",
        "value": 2,
        "max": 10,
        "min": 0,
        "steps": 1
    },
    "name-border-radius": {
        "label": "Username Box Border Radius",
        "type": "slider",
        "name": "Username Border Radius",
        "value": 3,
        "max": 15,
        "min": 0,
        "steps": 1
    },
    "name-border-color": {
        "label": "Username Box Border Color",
        "type": "colorpicker",
        "value": "#515E63"
    },
    "name-skew": {
        "label": "Username Box Skew",
        "type": "slider",
        "name": "Username Box Skew",
        "value": 0,
        "max": 20,
        "min": 0,
        "steps": 1
    },
    "message-font-color": {
        "label": "Message Text Color",
        "type": "colorpicker",
        "value": "#57837B"
    },
    "message-bg-color": {
        "label": "Message Background Color",
        "type": "colorpicker",
        "value": "#C9D8B6"
    },
    "message-transform": {
        "label": "Message Text Transform",
        "type": "dropdown",
        "options": {
            "none": "None",
            "uppercase": "Uppercase"
        },
        "value": "none"
    },
    "message-padding-tb": {
        "label": "Message Top/Bottom Padding",
        "type": "slider",
        "name": "Message Top/Bottom Padding",
        "value": 5,
        "max": 30,
        "min": 0,
        "steps": 1
    },
    "message-padding-lr": {
        "label": "Message Padding Left/Right",
        "type": "slider",
        "name": "Message Padding Left/Right",
        "value": 10,
        "max": 30,
        "min": 0,
        "steps": 1
    },
    "message-box-offset": {
        "label": "Message Box Offset",
        "type": "slider",
        "name": "Message Box Offset",
        "value": 0,
        "max": 30,
        "min": 0,
        "steps": 1
    },
    "message-border": {
        "label": "Message Box Border Size",
        "type": "slider",
        "name": "Message Border Size",
        "value": 2,
        "max": 10,
        "min": 0,
        "steps": 1
    },
    "message-border-radius": {
        "label": "Message Box Border Radius",
        "type": "slider",
        "name": "Message Border Radius",
        "value": 3,
        "max": 15,
        "min": 0,
        "steps": 1
    },
    "message-border-color": {
        "label": "Message Box Border Color",
        "type": "colorpicker",
        "value": "#515E63"
    },
    "message-skew": {
        "label": "Message Box Skew",
        "type": "slider",
        "name": "Message Box Skew",
        "value": 0,
        "max": 20,
        "min": 0,
        "steps": 1
    },
    "smoothscroll": {
        "label": "Smoothscroll Animation?",
        "type": "dropdown",
        "options": {
          "false": "Disable",
          "true": "Enable"
        },
        "value": "true"
      },
      "limit-enable": {
        "label": "Limit Message Shown?",
        "type": "dropdown",
        "options": {
          "false": "Disable",
          "true": "Enable"
        },
        "value": "true"
      },
      "msg-limit": {
        "label": "No. of Message Shown",
        "type": "slider",
        "name": "",
        "value": 10,
        "max": 999,
        "min": 1,
        "steps": 1
      }
}

```

### Javascript

```
// Please use event listeners to run functions.
document.addEventListener('onLoad', function(obj) {
    // obj will be empty for chat widget
    // this will fire only once when the widget loads
});


document.addEventListener('onEventReceived', function (obj) {
    // obj will contain information about the event
    console.log(obj.detail); // OBJ Logs

    //smoothscroll animation
    const smoothscroll = {smoothscroll};
    const limitEnable = {limit-enable};
    const msgLimit = {msg-limit};
    const msgParent = document.querySelector('.sl__chat__layout');

    if (obj.detail.command === "PRIVMSG") { // Prevent animation for ping events - Curtis Geiger
        if (smoothscroll == true) {
            $('#log>div').last().hide().slideToggle(600, "easeInOutQuart"); //New animation code
        }
    // Limit message shown
        if (limitEnable == true) {
            if (msgParent.children.length > msgLimit) {
                $('#log>div').not($('#log>div').slice(-msgLimit)).fadeOut();
            }
        }
    }

});
```

### Javascript (Hide Chatter Enabled - hide-chatter.js)

```
// Please use event listeners to run functions.
document.addEventListener('onLoad', function(obj) {
    // obj will be empty for chat widget
    // this will fire only once when the widget loads
});

document.addEventListener('onEventReceived', function(obj) {
    // obj will contain information about the event
  	console.log(obj.detail); // OBJ Logs

  	// Variables for Bot and Command check. This follows streamlabs' way of doing it.
    const isCommand = obj.detail.body.charAt(0);
    const botNames = ["nightbot","moobot","xanbot","deepbot","vivbot","phantombot","streamelements"];
    const smoothscroll = {smoothscroll};
    const limitEnable = {limit-enable};
    const msgLimit = {msg-limit};
    const msgParent = document.querySelector('.sl__chat__layout');


    if (obj.detail.command === "PRIVMSG") // Prevent animation for ping events - Curtis Geiger
    {
        if (botNames.indexOf(obj.detail.from) == -1 && isCommand != "!"){
            if (smoothscroll == true) {
                $('#log>div').last().hide().slideToggle(600, "easeInOutQuart"); //New animation code
            }
        }
        // Limit message shown
        if (limitEnable == true) {
            if (msgParent.children.length > msgLimit) {
                $('#log>div').not($('#log>div').slice(-msgLimit)).fadeOut();
            }
        }
    }
});

```