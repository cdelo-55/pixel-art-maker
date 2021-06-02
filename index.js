
let cellColor;
let currentColor;
let currentCell;

document.getElementById('pallete').addEventListener('click',function(newColor){
  currentColor = newColor.target.id;
  console.log(currentColor);
})


document.getElementById('grid').addEventListener('click',function(name){
  name.target.style.background=`${currentColor}`;
})
