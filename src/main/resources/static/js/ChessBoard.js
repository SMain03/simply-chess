class ChessBoard {
    constructor() {
        this.board = document.getElementById("board");
        for (let i=0; i<8; ++i) {
            for (let j=0; j<8; ++j) {
                let cell = document.createElement("div");
                if ((i+j) % 2 === 0) {
                    cell.className = "board-cell-light";
                } else {
                    cell.className = "board-cell-dark";
                }
                this.board.appendChild(cell);
            }
        }

        let pieces = ["black rook", "black knight", "black bishop", "black queen", "black king", "black bishop", "black knight", "black rook"];
        for (let i=0; i<8; ++i) {
            this.board.children.item(i).appendChild(createPieceImage(pieces[i]));
        }

        for (let i=8; i<16; ++i) {
            this.board.children.item(i).appendChild(createPieceImage("black pawn"));
        }

        for (let i=48; i<56; ++i) {
            this.board.children.item(i).appendChild(createPieceImage("white pawn"));
        }

        pieces = ["white rook", "white knight", "white bishop", "white queen", "white king", "white bishop", "white knight", "white rook"];
        for (let i=56; i<64; ++i) {
            this.board.children.item(i).appendChild(createPieceImage(pieces[i-56]));
        }
    }
}

const chessboard = new ChessBoard();

const pieces = document.querySelectorAll(".piece-image");

let dragged;

for (const piece of pieces) {
    piece.addEventListener("dragstart", (e) => {
        dragged = e.target;
    });
}

for (const cell of chessboard.board.children) {
    cell.addEventListener("dragover", (e) => {
        e.preventDefault();
    });
    cell.addEventListener("drop", (e) => {
        e.preventDefault();
        e.target.appendChild(dragged);
    });
}

function createPieceImage(piece) {
    let img = document.createElement('img');
    img.className = "piece-image";
    img.width = 45;
    img.height = 45;
    img.draggable = true;
    switch (piece) {
        case "white king":
            img.src = '/images/Chess_klt45.svg';
            break;
        case "black king":
            img.src = '/images/Chess_kdt45.svg';
            break;
        case "white queen":
            img.src = '/images/Chess_qlt45.svg';
            break;
        case "black queen":
            img.src = '/images/Chess_qdt45.svg';
            break;
        case "white rook":
            img.src = '/images/Chess_rlt45.svg';
            break;
        case "black rook":
            img.src = '/images/Chess_rdt45.svg';
            break;
        case "white bishop":
            img.src = '/images/Chess_blt45.svg';
            break;
        case "black bishop":
            img.src = '/images/Chess_bdt45.svg';
            break;
        case "white knight":
            img.src = '/images/Chess_nlt45.svg';
            break;
        case "black knight":
            img.src = '/images/Chess_ndt45.svg';
            break;
        case "white pawn":
            img.src = '/images/Chess_plt45.svg';
            break;
        case "black pawn":
            img.src = '/images/Chess_pdt45.svg';
            break;
    }
    return img;
}