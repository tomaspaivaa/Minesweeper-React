import { getNeighbours } from "./getNeighbours";

export const generateNeighbours = (data, height, width) => {
  let i, j, mines;
  //console.log("sopa", data);
  for (i = 0; i < width; i++) {
    for (j = 0; j < height; j++) {
      mines = 0;
      let area = getNeighbours(data[i][j].x, data[i][j].y, data, height, width);
      area.map((x) => {
        if (x.isMine) {
          return mines++;
        } else {
          return 0;
        }
      });
      if (!mines) {
        data[i][j].isEmpty = true;
      }
      data[i][j].neighbours = mines;
    }
  }
  return data;
};
