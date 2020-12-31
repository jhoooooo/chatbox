
# streamlabs-chat
Customizable theme for Streamlabs Twitch chat widget.

![](https://media.giphy.com/media/ekM9pBSlA9laAQ7DjT/giphy.gif)


## How To Use

- Copy all the files needed to their respective field in your Streamlabs widget dashboard. ([https://streamlabs.com/dashboard#/chatbox](https://streamlabs.com/dashboard#/chatbox))
- Custom field can be enable by clicking on 'Add Custom Fields' on the bottom right of the page. You have to edit and update the page with the new code.

## Customization

Most of the features can be customize using the '*custom fields*' section on your widget dashboard.


## Twitch User Color

Twitch user can set their own color on the site. To use this color in this overlay, you have to include it manually on the html code as needed. The variable is `{color}`. For example:

    <div class="name" style="color: {color}">
    <div class="username-box" style="background: {color}">
    <div class="message-box" style="border-color: {color}">

`{color}` does not work on the css as far as I know. It must be put inline on to the html file and will overwrite the css if used.

## Smoothscrolling

Smooth scrolling might not be suitable if chat is moving too fast. To disable smoothscrolling, simply remove the javascript code or restore the original code.

## Premade theme

This repo also included some premade theme in the premade folder. This themes is less customizable than the main overlay unless you edit the css manually.

## License
[![MIT license](https://badgen.net/badge/License/MIT/blue)](https://github.com/metadotmy/streamlabs-chat/blob/master/LICENSE)


## Donate
[![KOFI Donate](https://badgen.net/badge/Kofi/Donate/red?icon=kofi)](https://ko-fi.com/metadotmy)


## Screenshot

![image](https://user-images.githubusercontent.com/65335648/81983309-c0e02600-9665-11ea-9041-06ccda72d384.png)
