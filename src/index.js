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
