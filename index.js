// add grid selections 
const grid = document.querySelector('.grid')
for (let i = 0; i < 500; i++) {
    const cell = document.createElement('div');
    cell.id = i
    cell.classList.add('cell');
    grid.appendChild(cell)
    cell.classList.add
  }

 const colors = [
  'red',
  'blue',
  'orange',
  'green',
  'cyan',
  'purple',
  'gray',
  'dodgerblue',
  'forestgreen',
  'yellow',
  'brown',
  'teal',
  'white',
  'black'
  ];

// add pallete selections and set to the color
const palletItem = document.querySelector('.pallete')
for (let i = 0; i < colors.length; i++) {
    const cell = document.createElement('div');
    cell.id = colors[i];
    cell.classList.add('cell');
    palletItem.appendChild(cell)
    cell.classList.add
    cell.style.background = colors[i];
    //console.log(cell)
  }

// add color select box 
for (let i = 0; i < 4; i++) {
  //const $colorselect = document.querySelector('.palletitem') 
  const cell = document.createElement('div');
  cell.id = "cellcolor" + i;
  cell.classList.add('cellcolor');
  palletItem.appendChild(cell)
  cell.classList.add;
}

// add text box 
  //const colorselect = document.querySelector('.palletitem') 
  const cell = document.createElement('div');
  cell.id = "cellcolor" + 5;
  cell.classList.add('cellcolor');
  palletItem.appendChild(cell)
  cell.classList.add;

  

  // get the color when the color pallete is clicked
  let currentColor;
  document.getElementById('pallete').addEventListener('click',function(newColor){
    currentColor = newColor.target.id;
    for (let j=0;j < 4; j++) {
      document.getElementById(`cellcolor${j}`).style.backgroundColor = currentColor;
     }
   // `${currentColor}`
//    newfield.style.background=`${currentColor}`;
    //console.log(newfield);
    console.log(currentColor);
    //const colorbox = document.'pallete'[0]];
    //console.log(colorbox);
  })
  
// when grid item is selected, set color to current selected color
document.getElementById('grid').addEventListener('click',function(name){
  if (name.target.classList !== "grid") {
    name.target.style.background=`${currentColor}`;
  }
})



