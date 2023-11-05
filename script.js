const board = document.querySelector("#board");
const player = document.querySelector("#player");
const infoDisplay = document.querySelector("#info-display");
const width = 8;

const startPieces = [
    blackRook, blackKnight, blackBishop, blackQueen, blackKing, blackBishop, blackKnight, blackRook,
    blackPawn, blackPawn, blackPawn, blackPawn, blackPawn, blackPawn, blackPawn, blackPawn,
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    whitePawn, whitePawn, whitePawn, whitePawn, whitePawn, whitePawn, whitePawn, whitePawn,
    whiteRook, whiteKnight, whiteBishop, whiteQueen, whiteKing, whiteBishop, whiteKnight, whiteRook
];

function createBoard() {
    startPieces.forEach((startPiece, i) => {
        const square = document.createElement('div');
        square.classList.add('square');
        square.innerHTML = startPiece;
        square.firstChild && square.firstChild.setAttribute('draggable', true);
        square.setAttribute('square-id', i);
        const row = Math.floor((63 - i) / 8) / 1
        if (row % 2 === 0) {
            square.classList.add(i % 2 === 0 ? "purple" : "white");
        }
        else {
            square.classList.add(i % 2 === 0 ? "white" : "purple");
        }
        board.append(square);
    });
}

createBoard();

const allSquares = document.querySelectorAll("#board .square");
allSquares.forEach(square => {
    square.addEventListener('dragstart', dragStart);
});

allSquares.forEach(square => {
    square.addEventListener('dragstart', dragStart);
    square.addEventListener('dragover', dragOver);
    square.addEventListener('drop', dragDrop);
})

let startPositionID 
let draggedElement

function dragStart(e) {
    startPositionID = e.target.parentNode.getAttribute('square-id');
    draggedElement = e.target;
};

function dragOver(e) {
    e.preventDefault();
}

function dragDrop(e) {
    e.stopPropagation();

    //e.target.parentNode.append(draggedElement);
    e.target.append(draggedElement);
}