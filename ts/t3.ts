class T3 {
    private _board: number[];
    private _turn: boolean;

    constructor(board: number[] = [0,0,0,0,0,0,0,0,0], turn: boolean = true) {
        this._board = board;
        this._turn = turn;
    }

    public board(): number[] {
      return this._board;
    }

    public move(pos: number): void {
        if (this._turn) this._board[pos] = 1;
        else this._board[pos] = 2;
        this._turn = !this._turn;
    }

    public moves(): number[] {
        let posMoves: number[] = [];
        this._board.forEach((piece, pos) => {
          if (piece === 0) posMoves.push(pos);
        });
        return posMoves;
    }

    public reset(): void {
      this._board = [0,0,0,0,0,0,0,0,0];
      this._turn = true;
    }

    public turn(): boolean {
        return this._turn;
    }

    public xWon(): boolean {
      if (this._board[0] === 1 && this._board[1] === 1 && this._board[2] === 1) return true;
      if (this._board[3] === 1 && this._board[4] === 1 && this._board[5] === 1) return true;
      if (this._board[6] === 1 && this._board[7] === 1 && this._board[8] === 1) return true;
      if (this._board[0] === 1 && this._board[3] === 1 && this._board[6] === 1) return true;
      if (this._board[1] === 1 && this._board[4] === 1 && this._board[7] === 1) return true;
      if (this._board[2] === 1 && this._board[5] === 1 && this._board[8] === 1) return true;
      if (this._board[0] === 1 && this._board[4] === 1 && this._board[8] === 1) return true;
      if (this._board[2] === 1 && this._board[4] === 1 && this._board[6] === 1) return true;
      return false;
    }

    public oWon(): boolean {
      if (this._board[0] === 2 && this._board[1] === 2 && this._board[2] === 2) return true;
      if (this._board[3] === 2 && this._board[4] === 2 && this._board[5] === 2) return true;
      if (this._board[6] === 2 && this._board[7] === 2 && this._board[8] === 2) return true;
      if (this._board[0] === 2 && this._board[3] === 2 && this._board[6] === 2) return true;
      if (this._board[1] === 2 && this._board[4] === 2 && this._board[7] === 2) return true;
      if (this._board[2] === 2 && this._board[5] === 2 && this._board[8] === 2) return true;
      if (this._board[0] === 2 && this._board[4] === 2 && this._board[8] === 2) return true;
      if (this._board[2] === 2 && this._board[4] === 2 && this._board[6] === 2) return true;
      return false;
    }

    public isDraw(): boolean {
        return this.moves().length === 0;
    }
}