const container = document.getElementById('container');

function main() {}

function createGrid() {
  const grid = parseInt(prompt('Set your grid size (Max. 100px)'));

  if (grid > 100) return alert('You should enter a value below 100');

  for (let i = 0; i < grid; i++) {
    for (let i = 0; i < grid; i++) {
      const div = document.createElement('div');
      div.classList.add('square');

      div.addEventListener('mouseover', () => {
        div.style.backgroundColor = '#ededed';
      });

      container.appendChild(div);
    }
  }
}

main();
