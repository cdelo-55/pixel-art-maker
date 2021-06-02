const grid = document.querySelector('.grid')
for (let i = 0; i < 400; i++) {
    const cell = document.createElement('div');
    cell.id = i
    cell.classList.add('cell');
    grid.appendChild(cell)
    cell.classList.add
  }

let currentColor;
let currentCell;

document.getElementById('pallete').addEventListener('click',function(newColor){
  currentColor = newColor.target.id;
  //console.log(currentColor);
})

document.getElementById('grid').addEventListener('click',function(name){
  if (name.target.classList !== "grid") {
    name.target.style.background=`${currentColor}`;
  }
  //console.log(name.target.classList);
})
