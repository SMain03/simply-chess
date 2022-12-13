class ChessBoard {
    constructor(boardDiv) {
        this.boardDiv = boardDiv;
        createChessBoard(boardDiv);
    }
}

function createChessBoard(board) {
    for (let i=0; i<8; ++i) {
        for (let j=0; j<8; ++j) {
            let cell = document.createElement('div');
            cell.className = 'board-cell';
            if ((i+j) % 2 == 0) {
                cell.style.backgroundColor = '#D0B6B0';
            } else {
                cell.style.backgroundColor = '#9B746B';
            }
            board.appendChild(cell);
        }
    }

    for (const child of board.children) {
        let img = document.createElement('img');
        img.src = '/images/Chess_qdt45.svg';
        img.width = 45;
        img.height = 45;
        child.appendChild(img);
    }
}