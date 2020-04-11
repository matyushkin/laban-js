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
  return [combination_str, time_rest, iterations]
}

fill_placeholders();
// document.getElementById("btn_play").onclick = get_data;

var audio_files_arr = [['left ear.mp3', 'left knee.mp3',
'liver.mp3', 'neck.mp3', 'eyes.mp3', 'head.mp3', 'tongue.mp3',
'nape.mp3', 'right knee.mp3', 'face.mp3', 'heart.mp3',
'left heel.mp3', 'left elbow.mp3', 'circulatory system.mp3',
'stomach.mp3', 'left wrist.mp3', 'left hand.mp3', 'belly.mp3',
'right elbow.mp3', 'pelvis.mp3', 'right heel.mp3', 'left shoulder.mp3',
'rib cage.mp3', 'right ear.mp3', 'spine.mp3', 'right hand.mp3',
'right brush.mp3', 'right shoulder.mp3'], ['free movement.mp3',
'disclosure.mp3', 'jumping.mp3', 'support change.mp3', 'drop.mp3',
'imbalance.mp3', 'twisting.mp3', 'turn.mp3'], ['protractedly.mp3',
'instantly.mp3'], ['hit.mp3', 'touch.mp3', 'press.mp3', 'wave.mp3',
'slide.mp3', 'wiggle.mp3', 'whiplash.mp3', 'compression.mp3'],
['single focus.mp3', 'moving focus.mp3'], ['continuous movement.mp3',
'rebound.mp3', 'impact.mp3', 'impulse.mp3'], ['quadrangle.mp3',
'point.mp3', 'line.mp3', 'corner.mp3', 'broken line.mp3',
'triangle.mp3', 'circle.mp3']]

// sleep time expects milliseconds
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function play() {
  let arr = get_data();
  console.log(arr);
  let combination_str = arr[0];
  let time_rest = arr[1];
  let iterations = arr[2];
  let audio_paths_arr = [];
  for (let i = 0; i < iterations; i++) {
    for (let j = 0; j < combination_str.length; j++) {
      category = Number(combination_str[j]);
      audio_file_name = randomChoice(audio_files_arr[category-1]);
      s = "audio/" + category + "/" + audio_file_name;
      audio_paths_arr.push(s);      
    }
  }
  //alert(audio_paths_arr);
  var audio = new Audio(),
    i = 0;
  var playlist = audio_paths_arr;

audio.addEventListener('ended', function () {
    i = ++i < playlist.length ? i : 0;
    console.log(i)
    audio.src = playlist[i];
    audio.play();
}, true);
audio.volume = 0.3;
audio.loop = false;
audio.src = playlist[0];
audio.play();
}

document.getElementById("btn_play").onclick = play;