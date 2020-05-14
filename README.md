
# streamlabs-chat
Customizable theme for Streamlabs Twitch chat widget.

## Feature
- Smoothscrolling Chat
- Easy to customize

## How To Get

- Download all the files needed (html,js,css,custom-field) and copy them to your Streamlabs widget dashboard ([https://streamlabs.com/dashboard#/chatbox](https://streamlabs.com/dashboard#/chatbox))

## Customization

Most of the features can be customize using the '*custom fields*' section on your widget dashboard.

## Specific Customization:

### Colorful Username Color/Background Color

Twitch provide specific color for each user. To use this color, you have to include it manually on the html file/code as needed. The variable is `{color}`. For example:

    <div class="name" style="color: {color}">
    <div class="username-box" style="background: {color}">
    <div class="message-box" style="border-color: {color}"> 
`{color}` *does not work on the css file/code. Must be put inline on to html file/code as shown. It will overwrite the css if used.*

### Smoothscrolling

To disable smoothscrolling, simply remove the javascript file/code.
 

## License
[![MIT license](https://badgen.net/badge/License/MIT/blue)](https://github.com/metadotmy/streamlabs-chat/blob/master/LICENSE)


## Donate
[![KOFI Donate](https://badgen.net/badge/Kofi/Donate/red?icon=kofi)](https://ko-fi.com/metadotmy)
