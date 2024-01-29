import { Board } from './Board'
import type { Piece } from './Piece'
import type { Coord } from './models/Coord'

export class Game {
  board: Board
  isBlackTurn = false
  selectedPiece: Piece | null = null

  constructor() {
    this.board = new Board(this)
  }

  isBlackPiece(piece: Piece) {
    return piece.name === 'b' || piece.name === 'bk'
  }

  setSelectedPiece(piece: Piece | null) {
    this.selectedPiece = piece
  }

  isEmptyCell(coord: Coord) {
    return this.board.board[coord.i][coord.j] === null
  }

  onClickBoard(coord: Coord) {
    // handle eatble move:
    // handle piece color:
    // handle step move:
    if (this.selectedPiece) {
      this.selectedPiece.move(coord)
      this.selectedPiece = null
    }

    // handle piece selection:
    else if (!this.selectedPiece) {
      this.setSelectedPiece(this.board.board[coord.i][coord.j])
    }
  }
}
