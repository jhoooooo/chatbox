# Table of Content
- [Table of Content](#table-of-content)
  - [HTML Section](#html-section)
  - [CSS Section](#css-section)
  - [Fields Section](#fields-section)
    - [Usage](#usage)
      - [In the fields section](#in-the-fields-section)
      - [Usage in CSS section](#usage-in-css-section)
  - [Data Section](#data-section)

## HTML Section

Regular HTML syntax. Import your library, fonts here. `{{keyname}}` can be use here. Refer to [Fields Section](#Fields-Section)

```html
<div class="chatbox-wrapper {{keyname}}">
    <div class="overlay"></div>
    <div class="chatbox"></div>
</div>
```

## CSS Section

Regular CSS syntax. `{{keyname}}` can be use here. Refer to [Fields Section](#Fields-Section)

```css
.overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: {{overlayColor}};
}
```

## Fields Section

This is the 'frontend' for customization so that user don't have to interact with code directly. There are few input fields supported by Streamelements like  `colorpicker`, `audio-input`, `sound-input`, `video-input`, `googleFont`, `dropdown`, and `slider`. 
Visit [StreamElements Custom Code](https://github.com/StreamElements/widgets/blob/master/CustomCode.md) for full documentation.

### Usage

#### In the fields section

Below is color picker input example named `overlayColor`. The name (key) later will be use as value in the HTML/CSS/JS file.

```json
{ 
"overlayColor": {
    "type": "colorpicker",
    "label": "Background Color",
    "value": "#000000",
    "group": "Customization"
    }
}
```

#### Usage in CSS section

In the HTML, CSS or JS file, the key name `{{overlayColor}}` is use as the value. The actual value data will be auto populated by SE.

```css
.overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: {{overlayColor}};
    opacity: {{overlayOpacity}};
    z-index: -1;
    border-radius: {{borderRadius}}px;
}
```

## Data Section

This is where all the customization data is stored.