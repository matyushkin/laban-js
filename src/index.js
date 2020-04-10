/* 
TODO:
- NOW: Add info to wiki from Miroslav Project, add video
- NOW: Start mode: beginner is checked
 - Make placeholders for inputs from javascript
 - Make function that will generate text for placeholders of inputs
 - Get Audio from Miroslav repo
 - Make function to play audiofiles sequence
 - Add instructions
 */

import "./styles.css";

document.getElementById("app").innerHTML = `
`;

function get_data() {
  var combination = document.getElementById("combination").value;
  var time_rest = document.getElementById("time_rest").value;
  var repetitions = document.getElementById("repetitions").value;
  alert(combination + time_rest + repetitions);
}

document.getElementById("btn_play").onclick = get_data;
