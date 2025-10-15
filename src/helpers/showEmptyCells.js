import { getNeighbours } from "./getNeighbours";

export const showEmptyCells = (h, w, x, y, data) => {
  let neighbours = getNeighbours(x, y, data, h, w);
  neighbours.map((cell) => {
    if (!cell.isRevealed && (cell.isEmpty || !cell.isMine) && !cell.isFlagged) {
      Object.assign(data[cell.x][cell.y], { isRevealed: true });
      if (cell.isEmpty) {
        showEmptyCells(h, w, cell.x, cell.y, data);
      }
    }
    return null;
  });
  return data;
};
