import { useState } from "react";
import "./App.css";
import Board from "./components/board/board";
import Start from "./components/start/start";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [setupData, setSetupData] = useState({
    width: 9,
    height: 9,
    mines: 10,
  });

  const handleSetData = (data) => {
    console.log("data", data);
    setSetupData(data);
    setGameStarted(true);
  };

  if (!gameStarted) return <Start handleSetData={handleSetData} />;

  return <Board setupData={setupData} setGameStarted={setGameStarted} />;
}

export default App;
