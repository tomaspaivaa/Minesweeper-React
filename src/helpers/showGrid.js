export const showGrid = (data) => {
  const revealedGrid = data.map((row) =>
    row.map((cell) => {
      return { ...cell, isRevealed: true };
    })
  );

  return revealedGrid;
};
