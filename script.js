const paletteDiv = document.getElementById('palette');
const feedback = document.getElementById('feedback');

function getRandomColor() {
  let color = Math.floor(Math.random()*16777215).toString(16);
  return "#" + color.padStart(6, "0");
}

