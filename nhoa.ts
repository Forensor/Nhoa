const COORDS: string[] = [
  'a3','b3','c3',
  'a2','b2','c2',
  'a1','b1','c1'
];
var best: string = '';
function hasWon(node: number[], max: boolean): boolean {
  const p: number = max ? 1 : 2;
  if (node[0] === p && node[1] === p && node[2] === p) {
    return true;
  }
  if (node[3] === p && node[4] === p && node[5] === p) {
    return true;
  }
  if (node[6] === p && node[7] === p && node[8] === p) {
    return true;
  }
  if (node[0] === p && node[3] === p && node[6] === p) {
    return true;
  }
  if (node[1] === p && node[4] === p && node[7] === p) {
    return true;
  }
  if (node[2] === p && node[5] === p && node[8] === p) {
    return true;
  }
  if (node[0] === p && node[4] === p && node[8] === p) {
    return true;
  }
  if (node[2] === p && node[4] === p && node[6] === p) {
    return true;
  }
  return false;
}
function getChildNodes(node: number[], max: boolean): number[][] {
  let childs: number[][] = [];
  node.forEach((piece, place) => {
    if (piece === 0) {
      childs.push(node.map((cur, ind) => ind === place ? max ? 1 : 2 : cur));
    }
  });
  return childs;
}
function getMoves(node: number[]): string[] {
  let moves: string[] = [];
  node.forEach((piece, place) => {
    if (piece === 0) {
      moves.push(COORDS[place]);
    }
  });
  return moves;
}
function minimax(node: number[], depth: number, max: boolean): number {
  if (hasWon(node, true)) { return 1; }
  if (hasWon(node, false)) { return -1; }
  if (depth === 0) { return 0; }
  if (max) {
    let value: number = Number.NEGATIVE_INFINITY;
    let moves: string[] = getMoves(node);
    best = moves[0];
    getChildNodes(node, max).forEach((child, ind) => {
      const lastValue = value;
      value = Math.max(value, minimax(child, depth - 1, false));
      if (value > lastValue) {
        best = moves[ind];
      }
    });
    return value;
  } else {
    let value: number = Number.POSITIVE_INFINITY;
    let moves: string[] = getMoves(node);
    best = moves[0];
    getChildNodes(node, max).forEach((child, ind) => {
      const lastValue = value;
      value = Math.min(value, minimax(child, depth - 1, true));
      if (value < lastValue) {
        best = moves[ind];
      }
    });
    return value;
  }
}