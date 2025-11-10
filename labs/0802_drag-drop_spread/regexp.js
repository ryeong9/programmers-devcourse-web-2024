let str1 = "aahh aahhhh ";
let pattern = /\ah?/g;
let pattern2 = /e\B/g;
let result = str1.match(pattern);
let result2 = str1.replace(pattern2, "_");

let text = "";
text += result + "<br>";
text += result2 + "<br>";
document.getElementById("show").innerHTML = text;
