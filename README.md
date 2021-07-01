# Streamlabs Chatbox Widget
This repo provide easy to customize theme/overlay for Streamlabs Chatbox widget. This repo is meant to be example of what you can do with the widget, provide more documentation for it, therefore the options is limited. If you need help or something specific to fit your stream style for example, you can contact me on Twitter.

https://user-images.githubusercontent.com/65335648/118496278-8d434a80-b756-11eb-83fa-42125c71412b.mp4

Video: Pink with Gifs in Premades folder.

## How To Use

1. Go to your Streamlabs dashboard > All Widgets > [Chat Box](https://streamlabs.com/dashboard#/chatbox).
2. Follow this [instruction](https://user-images.githubusercontent.com/65335648/119599623-f93d4700-be17-11eb-82ae-848eb7adceb5.png).
3. The code files is in 'Default' folder.
4. For preview and testing purpose, you can add `?simulate=1` after your widget url to simulate users.
`https://streamlabs.com/widgets/chat-box/v1/XXXCODEXXXXX?simulate=1`

## Advanced Customization

Most of the features can be customize using the '*custom fields*' section on your widget dashboard. Further customization can be done by editing the files directly, especially the js file. Alot more can be done with javascript. There's a folder with some basic code snippets of examples of things that you can do.

### Badges

Badges can be hidden by using Streamlabs built-in settings.

### Color Opacity

Enter 8 digits HEX code for color opacity. Last two represent the alpha channel (00 to FF). You can use this [guide](https://davidwalsh.name/hex-opacity). OBS does not support css background blur/backdrop-filter.

```
  background: #00ff0080;
```

### Twitch User Colors

Twitch user can set their own color on the site. To use this color in this overlay, you have to include it manually on the html code as needed. The variable is `{color}`. For example:

    <div class="name" style="color: {color}">
    <div class="username-box" style="background: {color}">
    <div class="message-box" style="border-color: {color}">

The `{color}` variable does not work on the css file as far as I'm aware. It must be put inline on to the html file and will overwrite any css for said element. Or you can hook and append it using javascript `obj.detail.tags.color`.

## Smoothscrolling

Smooth scrolling might not be suitable if chat is moving too fast. To disable smoothscrolling animation, simply remove the javascript code or restore the original javascript code. 

## Premade themes

This repo also included some premade theme in the premade folder. This themes is less customizable than the main overlay unless you edit the files manually. The purpose is to vary the design, test more functionalities, showcase what you can do or poc that cannot be included in the default design.

## Credits

* [Luxon](https://moment.github.io/luxon/)
* [Curtis Geiger](https://github.com/curtissimo41)

## License

[MIT license](https://github.com/metadotmy/streamlabs-chat/blob/master/LICENSE)

## FAQ

**Q. Do you take commission?**
A. No. I'm not a dev/artist and everything here is self-learn. By taking payment, I feel like I'm responsible for the product and I don't think I'm knowledgeable enough for it. If you need specific design to fit your stream, feel free to reach out to me on Twitter. I will try to help you if I'm able to (no payment ofc).

**Q. I'm an overlay maker, can i integrate and resell you work?**
A. Yes. It's MIT licensed. Its a short and simple permissive license with conditions only requiring preservation of copyright and license notices.

**Q. Your code is wrong / not optimized.**
A. Please correct me.

**Q. Can i still pay you?**
A. You can donate to my kofi but don't demand anything from me because of it. Donating doesn't mean that I will help you.

## Donate

[Kofi](https://ko-fi.com/jhooo)

## Contact

[Twitter](https://twitter.com/JHOOOOOOOOOOOOQ)
