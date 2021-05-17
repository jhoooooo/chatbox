
# streamlabs-chat
Customizable theme for Streamlabs Twitch chat widget.


https://user-images.githubusercontent.com/65335648/118496278-8d434a80-b756-11eb-83fa-42125c71412b.mp4es.githubusercontent.com/65335648/1184962


## How To Use

- Copy all the files needed to their respective field in your Streamlabs widget dashboard. ([https://streamlabs.com/dashboard#/chatbox](https://streamlabs.com/dashboard#/chatbox))
- Custom field can be enable by clicking on 'Add Custom Fields' on the bottom right of the page. You have to edit and update the page with the new code.

## Customization

Most of the features can be customize using the '*custom fields*' section on your widget dashboard. Further customization can be done by editing the css file directly.

### Fonts

Fonts can be change by using [Google Fonts](https://fonts.google.com/). Edit the css file by changing the @import url and font-family.

``` 
@import url('https://fonts.googleapis.com/css2?family=KoHo:wght@500&display=swap');
font-family: 'KoHo', sans-serif;

```

### Badges

Badges can be hidden by using Streamlabs built-in settings.

### Color Opacity

Streamlabs color picker does not support opacity. You have to manually edit the css file and use RGBA or 8 digits HEX codes.

```
  background: rgba(0, 255, 0, 0.5);
  background: #00ff0080;

```

## Twitch User Colors

Twitch user can set their own color on the site. To use this color in this overlay, you have to include it manually on the html code as needed. The variable is `{color}`. For example:

    <div class="name" style="color: {color}">
    <div class="username-box" style="background: {color}">
    <div class="message-box" style="border-color: {color}">

`{color}` does not work on the css as far as I know. It must be put inline on to the html file and will overwrite the css if used.

## Smoothscrolling

Smooth scrolling might not be suitable if chat is moving too fast. To disable smoothscrolling, simply remove the javascript code or restore the original javascript code.

## Premade theme

This repo also included some premade theme in the premade folder. This themes is less customizable than the main overlay unless you edit the css manually.

## License
[![MIT license](https://badgen.net/badge/License/MIT/blue)](https://github.com/metadotmy/streamlabs-chat/blob/master/LICENSE)


## Donate
[![KOFI Donate](https://badgen.net/badge/Kofi/Donate/red?icon=kofi)](https://ko-fi.com/metadotmy)


## Screenshot

![image](https://user-images.githubusercontent.com/65335648/81983309-c0e02600-9665-11ea-9041-06ccda72d384.png)

## Contact

You can contact me on [Twitter](https://twitter.com/JHOOOOOOOOOOOOQ) if needed.