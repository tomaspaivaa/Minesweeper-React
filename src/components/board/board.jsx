import React from "react";
import "../../App.css";
import "./board.css";
import { generateRandomMines } from "../../helpers/generateRandomMines.js";
import { generateNeighbours } from "../../helpers/generateNeighbours.js";
import { showEmptyCells } from "../../helpers/showEmptyCells.js";
import Cell from "../cell/cell.jsx";
import { useState, useEffect } from "react";
import { showGrid } from "../../helpers/showGrid.js";

export default function Board({ setupData, setGameStarted }) {
  /* const setupData = {
    width: 10,
    height: 10,
    mines: 2,
  }; */

  const initBoard = () => {
    let array = Array(setupData.width)
      .fill()
      .map((_, indexH) =>
        Array(setupData.height)
          .fill()
          .map((_, indexW) => ({
            x: indexH,
            y: indexW,
            isMine: false,
            neighbours: 0,
            isEmpty: false,
            isRevealed: false,
            isFlagged: false,
            isPossible: false,
          }))
      );

    let arrayMines = generateRandomMines(
      array,
      setupData.height,
      setupData.width,
      setupData.mines
    );
    let arrayMinesNeighbours = generateNeighbours(
      arrayMines,
      setupData.height,
      setupData.width
    );
    /* let resultado = showGrid(arrayMinesNeighbours);
    return resultado; */
    console.log(arrayMinesNeighbours);
    return arrayMinesNeighbours;
  };
  const [gameState, setGameState] = useState("Game ON");
  const [mineCounter, setMineCounter] = useState(setupData.mines);
  const [grid, setGrid] = useState(() => initBoard(setupData));

  const onLeftClick = (e, x, y) => {
    //console.log(grid[x][y]);
    if (
      grid[x][y].isRevealed ||
      grid[x][y].isFlagged ||
      grid[x][y].isPossible
    ) {
      //condição de paragem
      return;
    }

    const updateGrid = grid.map((row, rowIndex) => {
      if (rowIndex !== x) {
        return row; // se nao for a linha que queremos, retornamos a linha original
      }
      // para a linha que queremos criamos uma nova linha com ovalor atualizado
      return row.map((cell, colIndex) => {
        if (colIndex !== y) {
          return cell; // se nao for a coluna que queremos, retornamos a clula original
        }
        if (grid[x][y].isEmpty) {
          showEmptyCells(setupData.height, setupData.width, x, y, grid);
        }
        // para a celula que queremos, criamos uma nova celula com oisrevealed atualizado
        return {
          ...cell,
          isRevealed: true,
        };
      });
    });
    if (updateGrid[x][y].isMine) {
      const reveledGrid = showGrid(updateGrid);
      setGrid(reveledGrid);
      return setGameState("Game OVER");
    }
    const hiddenGrid = updateGrid.flat().filter((cell) => !cell.isRevealed);
    //console.log("ananas", hiddenGrid);
    if (hiddenGrid.length == setupData.mines) {
      showGrid(updateGrid);
      setGameState("🎉You win🎉");
    }
    setGrid(updateGrid);
  };

  const onRightClick = (event, x, y) => {
    event.preventDefault();
    let newMineCounter = mineCounter;
    if (grid[x][y].isRevealed) {
      //condição de paragem
      return;
    }
    const updateGrid = grid.map((row, rowIndex) => {
      if (rowIndex !== x) {
        return row;
      }
      return row.map((cell, colIndex) => {
        if (colIndex !== y) {
          return cell;
        }

        if (!cell.isFlagged && !cell.isPossible) {
          // Estado normal -> Presença de mina
          newMineCounter -= 1;
          return {
            ...cell,
            isFlagged: true,
            isPossible: false,
          };
        } else if (cell.isFlagged && !cell.isPossible) {
          // Presença de mina -> Provável mina
          newMineCounter += 1;
          return {
            ...cell,
            isFlagged: false,
            isPossible: true,
          };
        } else if (!cell.isFlagged && cell.isPossible) {
          // Provável mina -> Estado normal
          return {
            ...cell,
            isFlagged: false,
            isPossible: false,
          };
        }
      });
    });
    if (newMineCounter >= 0 && newMineCounter <= mineCounter + 1) {
      setGrid(updateGrid);
      setMineCounter(newMineCounter);
    }
  };

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (gameState == "Game ON") {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [gameState]);

  const resetGame = (setupData) => {
    setGameState("Game ON");
    setGrid(initBoard(setupData));
    setMineCounter(setupData.mines);
    setSeconds(0);
  };

  return (
    <div className="container">
      <div className="center">
        <h1 id="title">{gameState}</h1>
        <div id="buttons">
          <button onClick={(e) => setGameStarted(false)} id="butao">
            ⬅️Back to the start page
          </button>
          <button onClick={() => resetGame(setupData)} id="butao">
            RESET
          </button>
        </div>
        <div id="infos">
          <h3>Mines Remaining: {mineCounter}</h3>
          <p> {`Tempo: ${seconds} s`}</p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateRows: `repeat(${setupData.width}, ${setupData.grid})`,
            gridTemplateColumns: `repeat(${setupData.height}, ${setupData.grid})`,
            gap: "1px",
          }}
        >
          {grid.map((row, i) =>
            row.map((col, j) => (
              <Cell
                onLClick={(e) => onLeftClick(e, i, j)}
                onRClick={(e) => onRightClick(e, i, j)}
                key={`${i}-${j}`}
                col={col}
                i={i}
                j={j}
                slotBgColour={(i + j) % 2 == 0 ? "dark" : "light"}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
