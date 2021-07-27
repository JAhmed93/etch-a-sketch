
const container = document.querySelector('.grid-container');
const squares = document.querySelector('.squares');
const gameButton = document.querySelector('.game');
const resetButton = document.querySelector('.reset');
let row = [];
let col = [];

gameButton.addEventListener('click', () => {
  var x = prompt('Enter the Size of the grid you would like');

  if(x !== null){
    gameButton.style.cssText = 'display: none !important';
  } 
  printDivs(x);
  
  
});

resetButton.addEventListener('click', () => {
for(let i = 0; i < row.length; i++) {
container.removeChild(row[i]);
}
gameButton.style.cssText = 'display: initial !important';
});


function printDivs(n) {
  for(let i = 0; i < n; i++) {
    row[i] = document.createElement('div');
    row[i].classList.add('d-flex', `row_${i}`, 'justify-content-center', 'rows', 'flex-nowrap');
    col[i] = [];
    if(i === 0) {
      row[i].classList.add('pt-4');
    }
    if(i === n-1) {
      row[i].classList.add('pb-4');
    }
    for(let j = 0; j < n; j++) {
      col[i][j] = document.createElement('div');
      col[i][j].classList.add(`col_${j}`,`border`, `border-warning`, 'cols');
      // col[i][j].addEventListener('mouseout', () => {
      //   col[i][j].classList.add('bg-dark');
      // });
      // col[i][j].addEventListener('hover', () => {
      //   col[i][j].classList.add('bg-danger');
      //  });
   
      
    }
  }
  let rowCount = 0;

 let cDiv = col[rowCount];

  while(rowCount < n) {
    let rDiv = row[rowCount];
    let colCount = 0;
    while(colCount < n) {
      colCount += 1;
      container.appendChild(rDiv);
    }

    rowCount++;
  }

 placeCol();

  }


function placeCol() {

  for(let i = 0; i< row.length; i++) {
    for(let element of col[i]){
      row[i].append(element);
    }
  }
}


function colorGrid() {
  for(let i = 0; i < row.length; i++) {

    for(let j = 0; j < row.length; i++) {
        col[i][j].addEventListener('mouseover', () => {
        col[i][j].classList.add('bg-danger');
         });
        col[i][j].addEventListener('mouseout', () => {
       col[i][j].classList.add('bg-dark');});
    }
  }
}


    

