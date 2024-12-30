import { useWallet } from "@/context/WalletContext";
import { getTokensBalanceByAddress, TokenBalance } from "@/services/tokens";
import { useEffect, useState } from "react";

function Metrics() {
  const { walletAddress, isConnected } = useWallet();
  const [tokens, setTokens] = useState<TokenBalance[]>([]);
  const [loading, setLoading] = useState(false);

  async function getTokens() {
    if (!walletAddress) return;
    setLoading(true);
    try {
      const result = await getTokensBalanceByAddress(walletAddress);
      setTokens(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getTokens();
  }, [walletAddress]);

  if (!isConnected)
    return (
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-semibold mb-4">Metrics</h1>
        <div>Connect your wallet to see your metrics</div>
      </div>
    );

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-2xl font-semibold mb-4">Token Balances</h1>
      <div className="space-y-4">
        {loading ? (
          <div>Loading tokens...</div>
        ) : tokens.length > 0 ? (
          <div className="grid gap-4">
            {tokens.map((token) => (
              <div
                key={token.address}
                className="flex items-center p-4 border rounded-lg"
              >
                <div className="flex-shrink-0 mr-4">
                  {token.logo && (
                    <img
                      src={token.logo}
                      alt={token.name}
                      className="w-8 h-8"
                    />
                  )}
                </div>
                <div className="flex-grow">
                  <h3 className="font-medium">
                    {token.name} ({token.symbol})
                  </h3>
                  <p className="text-sm text-gray-500">
                    Balance: {token.balance.toString()} ({token.decimals}{" "}
                    decimals)
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>No tokens found</div>
        )}
      </div>
    </div>
  );
}

export default Metrics;
