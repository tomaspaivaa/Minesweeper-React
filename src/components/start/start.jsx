import React, { useState } from "react";
import "./start.css";

function Start({ handleSetData }) {
  const [difficulty, setDifficulty] = useState("basic");

  const presetData = {
    BASIC: {
      width: 9,
      height: 9,
      mines: 10,
      grid: "45px",
    },
    INTERMEDIATE: {
      width: 16,
      height: 16,
      mines: 40,
      grid: "30px",
    },
    ADVANCED: {
      width: 16,
      height: 30,
      mines: 99,
      grid: "20px",
    },
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("entrou butao");
    console.log("dificuldade", difficulty);
    handleSetData(presetData[difficulty]);
  };

  return (
    <div className="bloco">
      <div className="centro">
        <h1 id="titulo">Minesweeper</h1>
        <form>
          <h3 id="choose">Choose difficulty:</h3>
          <input
            type="radio"
            id="basic"
            value="BASIC"
            name="choose_difficulty"
            onChange={(e) => setDifficulty(e.target.value)}
          />
          <label htmlFor="basic">Basic</label>
          <br />
          <input
            type="radio"
            id="intermediate"
            value="INTERMEDIATE"
            name="choose_difficulty"
            onChange={(e) => setDifficulty(e.target.value)}
          />
          <label htmlFor="intermediate">Intermediate</label>
          <br />
          <input
            type="radio"
            id="advanced"
            value="ADVANCED"
            name="choose_difficulty"
            onChange={(e) => setDifficulty(e.target.value)}
          />
          <label htmlFor="advanced">Advanced</label>
        </form>
        <br />
        <button id="butomn" onClick={handleSubmit}>
          START GAME
        </button>
      </div>
    </div>
  );
}

export default Start;
