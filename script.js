const paletteDiv = document.getElementById('palette');
const feedback = document.getElementById('feedback');

function getRandomColor() {
  let color = Math.floor(Math.random()*16777215).toString(16);
  return "#" + color.padStart(6, "0");
}

function clearFeedback() {
  setTimeout(() => {
    feedback.innerText = "";
  }, 1500);
}

function generatePalette(numColors=5) {
   paletteDiv.innerHTML = ''; // clear previous palette
  feedback.innerText = '';

  for (let i = 0; i < numColors; i++) {
    const color = getRandomColor();

     const colorBox = document.createElement('div');
     colorBox.style.backgroundColor = color;
      colorBox.style.width = '100px';
    colorBox.style.height = '100px';
    colorBox.style.margin = '10px';
    colorBox.style.borderRadius = '10px';
    colorBox.style.display = 'flex';
    colorBox.style.justifyContent = 'center';
    colorBox.style.alignItems = 'center';
    colorBox.style.cursor = 'pointer';
    colorBox.style.color = 'white';
    colorBox.style.fontWeight = 'bold';
    colorBox.style.userSelect = 'none';
    colorBox.textContent = color;
