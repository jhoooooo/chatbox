> _I'm not a programmer, developer etc, everything is self learn and still havent completed my beginner javascript udemy course lmao. So code is scuff and amateurish. sorry._

<br/>

## HTML, CSS, JS SECTION

---

Explaination in their own file.

<br/>

## FIELDS SECTION

---

This is also the 'frontend' for customization.
Fields section will automaticly gets populated by Streamelements.
Theres few types like buttons, color picker, slider, dropdown etc.
You can group sections.
Pay attention to the names.

```JSON
{
    "overlayColor": {
        "type": "colorpicker",
        "label": "Background Color",
        "value": "#000000",
        "group": "Customization"
    }
}
```

OverlayColor is the name. in HTML, CSS & JS it will be use as `{{overlayColor}}`.

<br/>

## DATA SECTION

---

Changes and value from Fields section will be saved here. So its empty when you first set-up the widget.
