/* TODO:
- If user changes level by radio button it must change dinamically inputs placeholders 
 */

let level = "";

let radios = document.getElementsByName("level");

for (let i = 0, length = radios.length; i < length; i++) {
  if (radios[i].checked) {
    level = radios[i].value;
    break;
  }
}

const range = (start, end, length = end - start + 1) =>
  Array.from({ length }, (_, i) => start + i);

function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generate_combination(level) {
  let min = 3;
  let max = 5;

  if (level === "Middle") {
    min = 5;
    max = 7;
  }
  if (level === "Profi") {
    min = 7;
    max = 10;
  }

  let comb_length = randomChoice(range(min, max));

  let arr = [];
  for (var i = 0; i < comb_length; i++) {
    arr.push(randomChoice(range(1, 7)));
  }
  return arr;
}

function generate_iterations(level) {
  let min = 2;
  let max = 3;
  if (level === "Middle") {
    min = 3;
    max = 5;
  }
  if (level === "Profi") {
    min = 5;
    max = 7;
  }
  return randomChoice(range(min, max));
}

function generate_time_rest(level) {
  let min = 10;
  let max = 15;
  if (level === "Middle") {
    min = 5;
    max = 10;
  }
  if (level === "Profi") {
    min = 1;
    max = 5;
  }
  return randomChoice(range(min, max));
}

let COMBINATION_ARR_DEFAULT = generate_combination(level);
let COMBINATION_STR_DEFAULT = COMBINATION_ARR_DEFAULT.join("");
let TIME_REST_DEFAULT = generate_time_rest(level);
let ITERATIONS_DEFAULT = generate_iterations(level);

function fill_placeholders(
  combination_str = COMBINATION_STR_DEFAULT,
  time_rest = TIME_REST_DEFAULT,
  iterations = ITERATIONS_DEFAULT
) {
  document.getElementById("combination").placeholder = combination_str;
  document.getElementById("time_rest").placeholder = time_rest;
  document.getElementById("iterations").placeholder = iterations;
}

function get_data() {
  let combination_str = document.getElementById("combination").value;
  let time_rest = document.getElementById("time_rest").value;
  let iterations = document.getElementById("iterations").value;

  // If user doesn't fill some input, use default constants
  if (combination_str === "") {
    combination_str = COMBINATION_STR_DEFAULT;
  }
  if (time_rest === "") {
    time_rest = TIME_REST_DEFAULT;
  }
  if (iterations === "") {
    iterations = ITERATIONS_DEFAULT;
  }
  alert(combination_str + time_rest + iterations);
}

fill_placeholders();
// document.getElementById("btn_play").onclick = get_data;

function play() {
  var audio = new Audio('audio/figure/circle.mp3');
  audio.play();
}

document.getElementById("btn_play").onclick = play;
