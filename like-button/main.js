"use strict";
exports.__esModule = true;
var like_button_1 = require("./like-button");
var button = new like_button_1.LikeButtonComponent(3);
function report() {
    console.log("    Likes:" + button.likes);
    console.log("    Button is selected: " + button.isSelected);
}
report();
console.log("Clicking button");
button.Clicked();
report();
