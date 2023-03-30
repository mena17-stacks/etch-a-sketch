function populateBoard(size){
    let board= document.querySelector('.board');
    let squares = document.querySelectorAll('div');
    squares.forEach(dive=> dive.remove); 
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`; 
    board.style.gridTemplateRows = `repeat(${size} , 1fr)` ;
let amount = size * size
    for (let i=0; i<amount; i++){
        let square = document.createElement('div');
        square.style.backgroundColor='blue';
        board.insertAdjacentElement('beforeend', square);
    }
}

populateBoard(16);

function changeSize(input){
    populateBoard(input);
}