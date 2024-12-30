import { createContext, useContext, useState, ReactNode } from "react";

interface WalletContextType {
  walletAddress: string | null;
  setWalletAddress: (address: string | null) => void;
  isConnected: boolean;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export function WalletProvider({ children }: { children: ReactNode }) {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const value = {
    walletAddress,
    setWalletAddress,
    isConnected: !!walletAddress,
  };

  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  );
}

export function useWallet() {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
}
