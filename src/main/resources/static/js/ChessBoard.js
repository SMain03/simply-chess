class ChessBoard {
    constructor() {
        this.board = []
        this.board.length = 64;

        this.board[0] = "white rook";
        this.board[1] = "white knight";
        this.board[2] = "white bishop";
        this.board[3] = "white queen";
        this.board[4] = "white king";
        this.board[5] = "white bishop";
        this.board[6] = "white knight";
        this.board[7] = "white rook";
        for (let i=8; i<16; ++i) {
            this.board[i] = "white pawn";
        }

        for (let i=48; i<56; ++i) {
            this.board[i] = "black pawn";
        }
        this.board[56] = "black rook";
        this.board[57] = "black knight";
        this.board[58] = "black bishop";
        this.board[59] = "black queen";
        this.board[60] = "black king";
        this.board[61] = "black bishop";
        this.board[62] = "black knight";
        this.board[63] = "black rook";
    }
}

function drawChessBoard(board) {
    let boardDiv = document.getElementById('board');
    for (let i=0; i<8; ++i) {
        for (let j=0; j<8; ++j) {
            let cell = document.createElement('div');
            cell.className = 'board-cell';
            if ((i+j) % 2 === 0) {
                cell.style.backgroundColor = '#D0B6B0';
            } else {
                cell.style.backgroundColor = '#9B746B';
            }
            boardDiv.appendChild(cell);
        }
    }

    for (let i=0; i<8; ++i) {
        for (let j=0; j<8; ++j) {
            let index = i*8+j;
            if (board.board[index] !== undefined) {
                let displayIndex = 8*(7-i) + j;
                let cell = boardDiv.children.item(displayIndex);
                let img = createImage(board.board[index]);
                cell.appendChild(img);
            }
        }
    }
}

function createImage(piece) {
    let img = document.createElement('img');
    img.className = "pieceImage";
    img.width = 45;
    img.height = 45;
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