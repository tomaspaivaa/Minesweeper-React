import React from "react";

function Cell({ col, i, j, onLClick, onRClick, slotBgColour }) {
  const getValue = (cellData) => {
    const { isMine, isRevealed, neighbours, isFlagged, isPossible } = cellData;
    if (!isRevealed) {
      if (isFlagged && !isPossible) {
        return "🚩";
      } else if (isPossible && !isFlagged) {
        return "❓";
      } else {
        return null;
      }
    }
    if (isMine) {
      return "💥";
    }
    if (neighbours) {
      return neighbours;
    }
  };
  return (
    <div
      onClick={(e) => onLClick(e, i, j)}
      onContextMenu={(e) => onRClick(e, i, j)}
      className={`slots ${col.isRevealed ? "" : "hidden "} ${slotBgColour}`}
      data-dimension={`${i}-${j}`}
    >
      {getValue(col)}
    </div>
  );
}

export default Cell;
