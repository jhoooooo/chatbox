// Under On event received - Heart animation
// Custom image replacement included.

var randomNumber = function(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}; //random number generator
var bottom = randomNumber(5, 20); //heart y start position (between 5-20 screen height percentage)
var right = randomNumber(10, 90); //heart x start position (between 10-90 screen width percentage)
var size = randomNumber(15, 50); //heart size
var heartsId = randomNumber(100, 50000); //id so that messasge can be remove individually. lazy way but probability of same number in 3 sec timeframe is low so i'm okay with it right now.
let defaultImage = ""; //default image placeholder.
const customImage = {custom-image}; // true/false from custom fields
let heartsAni = "{animation}"; // animation selection from custom fields

if(customImage == true) {
    defaultImage = "{custom-image-uploaded}"; //image from custom fields
} else {
    defaultImage = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIxOCI+PHJlY3QgaWQ9ImJhY2tncm91bmRyZWN0IiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4PSIwIiB5PSIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiIGNsYXNzPSIiIHN0eWxlPSIiLz4KCQo8ZyBjbGFzcz0iY3VycmVudExheWVyIiBzdHlsZT0iIj48dGl0bGU+TGF5ZXIgMTwvdGl0bGU+PHBhdGggZmlsbD0iI2U1NmQ0MiIgZD0iTTEwLjAwMDAwMTgzMDIxMjI4OCwxNy41NTA1MTQ5NzQwNTk2MSBsLTEuMzUxMzA3NDcxMTA1NzQ0LC0xLjIzMDE1NTc2Njc5OTcxMTggYy00Ljc5OTQ3MTM2Mjg5MjgxNSwtNC4zNTIxNDE5OTMxNDc0NjUgLTcuOTY4MDU0Mzk4NTg5MDQzLC03LjIyMjUwNTQ0OTAxMzQ1OSAtNy45NjgwNTQzOTg1ODkwNDMsLTEwLjc0NTIyNDIzNTc1ODA4NyBjMCwtMi44NzAzNjM0NTU4NjU5OTQ1IDIuMjU1Mjg1NTcyNDY2MTM4LC01LjEyNTY0OTAyODMzMjEzMiA1LjEyNTY0OTAyODMzMjEzMiwtNS4xMjU2NDkwMjgzMzIxMzIgYzEuNjIxNTY4OTY1MzI2ODkzOSwwIDMuMTc3OTAyMzk3NTY1OTIyNCwwLjc1NDg2ODMxMTQ0NTI3NzMgNC4xOTM3MTI4NDEzNjI2NTQsMS45NDc3NDY2MzA3NjYyMTA0IGMxLjAxNTgxMDQ0Mzc5NjczMTUsLTEuMTkyODc4MzE5MzIwOTMyNSAyLjU3MjE0Mzg3NjAzNTc2MTMsLTEuOTQ3NzQ2NjMwNzY2MjEwNCA0LjE5MzcxMjg0MTM2MjY1NCwtMS45NDc3NDY2MzA3NjYyMTA0IGMyLjg3MDM2MzQ1NTg2NTk5NDUsMCA1LjEyNTY0OTAyODMzMjEzMiwyLjI1NTI4NTU3MjQ2NjEzOCA1LjEyNTY0OTAyODMzMjEzMiw1LjEyNTY0OTAyODMzMjEzMiBjMCwzLjUyMjcxODc4Njc0NDYyOTIgLTMuMTY4NTgzMDM1Njk2MjI3Miw2LjM5MzA4MjI0MjYxMDYyNCAtNy45NjgwNTQzOTg1ODkwNDMsMTAuNzU0NTQzNTk3NjI3NzgyIGwtMS4zNTEzMDc0NzExMDU3NDQsMS4yMjA4MzY0MDQ5MzAwMTY5IHoiIGlkPSJzdmdfMSIgY2xhc3M9IiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMyNDI0MjQiIHN0cm9rZS1vcGFjaXR5PSIxIi8+PC9nPjwvc3ZnPg=="; //default heart image
}
// Append heart - to custom html instead of div>log so it doesnt ruin message box spacing/animation. probably can make it cleaner but it works fine right now so...
$("#custom_html").append('<span class="hearts' + ` hearts-${heartsId}` + ` ${heartsAni}"` + 'style="position: absolute; bottom:' + bottom + '%; right:' + right + '%;"><img width="' + size + '"' + `src="${defaultImage}` + '"></img></span>');
setTimeout(function () { $(`.hearts-${heartsId}`).remove(); }, 3000); //remove span just to make it cleaner.