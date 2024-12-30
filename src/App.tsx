import { useEffect, useState } from "react";
import "./App.css";
import { getLatestBlockNumber } from "./services/block";

function App() {
  const [blockNumber, setBlockNumber] = useState<number | undefined>();

  async function getBlockNumber() {
    const result = await getLatestBlockNumber();
    setBlockNumber(result);
  }

  useEffect(() => {
    getBlockNumber();
  }, []);

  return (
    <div className="App">
      <div>Block Number: {blockNumber}</div>
    </div>
  );
}

export default App;
