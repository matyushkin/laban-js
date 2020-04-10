/* TODO:
- If user changes level by radio button it must change dinamically inputs placeholders 
 */

const range = (start, end, length = end - start + 1) =>
  Array.from({ length }, (_, i) => start + i);

const level = get_level();
const COMBINATION_ARR_DEFAULT = generate_combination(level);
const COMBINATION_STR_DEFAULT = COMBINATION_ARR_DEFAULT.join("");
const TIME_REST_DEFAULT = generate_time_rest(level);
const ITERATIONS_DEFAULT = generate_iterations(level);

function fill_placeholders(
  combination_str = COMBINATION_STR_DEFAULT,
  time_rest = TIME_REST_DEFAULT,
  iterations = ITERATIONS_DEFAULT
) {
  //  fill input forms with default or generated values
  document.getElementsByName("combination")[0].placeholder = combination_str;
  document.getElementsByName("time_rest")[0].placeholder = time_rest;
  document.getElementsByName("iterations")[0].placeholder = iterations;
}

function get_level() {
  let level_flag = document.getElementsByName("level")[0].value;
  return level_flag;
}

function get_data() {
  let combination_str = document.getElementsByName("combination")[0].value;
  let time_rest = document.getElementsByName("time_rest")[0].value;
  let iterations = document.getElementsByName("iterations")[0].value;

  // If user doesn't fill some input, use deafault constants
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

// functions for data random generation
function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
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

fill_placeholders();
document.getElementById("btn_play").onclick = get_data;
