import { useEffect, useState } from "react";
import { getLatestBlockNumber } from "../services/block";

function Home() {
  const [blockNumber, setBlockNumber] = useState<number | undefined>();

  async function getBlockNumber() {
    const result = await getLatestBlockNumber();
    setBlockNumber(result);
  }

  useEffect(() => {
    getBlockNumber();
  }, []);

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-2xl font-semibold mb-4">Home</h1>
      <div>Block Number: {blockNumber}</div>
    </div>
  );
}

export default Home;
