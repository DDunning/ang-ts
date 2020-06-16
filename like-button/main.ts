import { LikeButtonComponent } from "./like-button";

let button = new LikeButtonComponent(3);

function report(){
    console.log("    Likes:" + button.likes);
    console.log("    Button is selected: " + button.isSelected);
}
 
report();
console.log("Clicking button");
button.Clicked();
report();