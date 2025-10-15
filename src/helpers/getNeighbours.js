export const getNeighbours = (x, y, data, height, width) => {
  let neighbours = [];
  const surroundings = [
    [-1, -1], // canto inferior esquerda
    [-1, 0], // à esquerda
    [-1, 1], // canto superior esquerda
    [0, -1], // em baixo
    [0, 1], // em cima
    [1, -1], // canto inferior direto
    [1, 0], // à direita
    [1, 1], // canto superior direito
  ];

  surroundings.forEach(([i, j]) => {
    let newX = x + i;
    let newY = y + j;

    if (newX >= 0 && newX < width && newY >= 0 && newY < height) {
      neighbours.push(data[newX][newY]);
    }
  });
  return neighbours;
};
