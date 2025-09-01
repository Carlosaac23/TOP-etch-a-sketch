const container = document.getElementById('container');

function userPrompt() {
  const gridNumber = parseInt(prompt('Set your grid size (Max. 100px)'));
  createGrid(gridNumber);
}

function createGrid(number) {
  if (number > 100) return alert('You should enter a value below 100');

  // reset the grid
  container.innerHTML = '';

  // render div container
  container.style.display = 'grid';

  container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${number}, 1fr)`;

  for (let i = 0; i < number * number; i++) {
    const div = document.createElement('div');
    div.classList.add('square');

    div.addEventListener('mouseover', () => {
      div.style.backgroundColor = `${randomRGB()}`;
    });

    container.appendChild(div);
  }
}

function randomRGB() {
  return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
}
