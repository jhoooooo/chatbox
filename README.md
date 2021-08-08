# Streamlabs Chatbox Widget
This repo provide easy to customize theme/overlay for Streamlabs Chatbox widget.

https://user-images.githubusercontent.com/65335648/118496278-8d434a80-b756-11eb-83fa-42125c71412b.mp4

Video: Pink with Gifs theme.

## Download

[Download](https://github.com/jhoooooo/streamlabs-chat/archive/refs/heads/master.zip)

## How To Use

1. Go to your Streamlabs dashboard > All Widgets > [Chat Box](https://streamlabs.com/dashboard#/chatbox).
2. Recommended Streamlabs's [settings](https://user-images.githubusercontent.com/65335648/119599623-f93d4700-be17-11eb-82ae-848eb7adceb5.png).
3. Choose your theme in the themes folder.
4. Each files can be open with notepad.
5. For preview/testing, you can add `?simulate=1` after your widget url to simulate users.
`https://streamlabs.com/widgets/chat-box/v1/XXXCODEXXXXX?simulate=1`

## Customization

Most of the features can be customize using the '*custom fields*' section on your widget dashboard. Some functionality can be added manually by copying the code from snippets folder.

### Badges

Badges can be hidden by using Streamlabs built-in settings.

### Color Opacity

Enter 8 digits HEX code for color opacity. Last two digits represent the alpha channel (00 to FF). You can use this [guide](https://davidwalsh.name/hex-opacity).

```
  background: #00ff0080;
```

### Twitch User Colors

Twitch user can set their own color on the site. To use this color in this overlay, you have to include it manually on the html code as needed. The variable is `{color}`. For example:

    <div class="name" style="color: {color}">
    <div class="username-box" style="background: {color}">
    <div class="message-box" style="border-color: {color}">

The `{color}` variable does not work on the css file as far as I'm aware. It must be put inline on to the html file and will overwrite any css for said element.

## Credits & Contributor

* [Luxon.js (Time Library)](https://moment.github.io/luxon/)
* [Curtis Geiger](https://github.com/curtissimo41)

## Support Me

[Kofi](https://ko-fi.com/jhooo)

## Contact

[Twitter](https://twitter.com/JHOOOOOOOOOOOOQ)


## License

Copyright (c) Jho. All rights reserved.

Licensed under the [MIT license](https://github.com/metadotmy/streamlabs-chat/blob/master/LICENSE)
