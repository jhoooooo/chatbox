# Streamlabs Chatbox Widget
This repo provide easy to customize theme/overlay for Streamlabs Chatbox widget. This repo is meant for general consumer usage with options that is enough for most people. If you need help or something specific to fit your stream style for example, you can contact me on Twitter.

https://user-images.githubusercontent.com/65335648/118496278-8d434a80-b756-11eb-83fa-42125c71412b.mp4


## How To Use

1. Go to your Streamlabs dashboard > All Widgets > [Chat Box](https://streamlabs.com/dashboard#/chatbox).
2. Follow this [instruction](https://user-images.githubusercontent.com/65335648/119599623-f93d4700-be17-11eb-82ae-848eb7adceb5.png).
3. The code files is in 'Default' folder.
4. For preview and testing purpose, you can add `?simulate=1` after your widget url to simulate users.
`https://streamlabs.com/widgets/chat-box/v1/XXXCODEXXXXX?simulate=1`

## Advanced Customization

Most of the features can be customize using the '*custom fields*' section on your widget dashboard. Further customization can be done by editing the files directly, especially the js file. Alot more can be done with javascript. There's a folder with some basic code snippets of examples of things that you can do.

``` 
@import url('https://fonts.googleapis.com/css2?family=KoHo:wght@500&display=swap');
font-family: 'KoHo', sans-serif;
```

### Badges

Badges can be hidden by using Streamlabs built-in settings.

### Color Opacity

Streamlabs color picker does not support opacity. You have to manually edit the css file and use RGBA or 8 digits HEX codes. OBS does not support css background blur/backdrop-filter.

```
  background: rgba(0, 255, 0, 0.5);
  background: #00ff0080;
```

### Twitch User Colors

Twitch user can set their own color on the site. To use this color in this overlay, you have to include it manually on the html code as needed. The variable is `{color}`. For example:

    <div class="name" style="color: {color}">
    <div class="username-box" style="background: {color}">
    <div class="message-box" style="border-color: {color}">

The `{color}` variable does not work on the css file as far as I'm aware. It must be put inline on to the html file and will overwrite the css if used. Or you can hook and append it using javascript `obj.detail.tags.color`.

## Smoothscrolling

Smooth scrolling might not be suitable if chat is moving too fast. To disable smoothscrolling, simply remove the javascript code or restore the original javascript code. 

## Premade themes

This repo also included some premade theme in the premade folder. This themes is less customizable than the main overlay unless you edit the files manually. The purpose is to vary the design, test more functionalities, showcase what you can do or poc that cannot be included in the default design. 

## License

[![MIT license](https://badgen.net/badge/License/MIT/blue)](https://github.com/metadotmy/streamlabs-chat/blob/master/LICENSE)

## Disclaimer

I'm not a web developers in any capacity. Everythings here is self-learned, scuffed, messy and amateurish especially the javascript parts. Feel free to fix my mistakes.


## Donate

[Kofi](https://ko-fi.com/metadotmy)

## Contact

You can contact me on [Twitter](https://twitter.com/JHOOOOOOOOOOOOQ) if needed. I will try my best to help.
