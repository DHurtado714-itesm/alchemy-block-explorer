import { Button } from "@/components/ui/button";
import { WalletModal } from "@/components/WalletModal";
import { useState } from "react";
import { Wallet } from "lucide-react";
import { useWallet } from "@/context/WalletContext";
import { Link } from "react-router";

function Header() {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const { walletAddress, isConnected, setWalletAddress } = useWallet();

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold">
              Dashboard
            </Link>
          </div>
          <nav className="flex items-center space-x-4">
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/metrics"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Metrics
            </Link>
            {isConnected ? (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">
                  {`${walletAddress?.slice(0, 6)}...${walletAddress?.slice(
                    -4
                  )}`}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setWalletAddress(null)}
                >
                  Disconnect
                </Button>
              </div>
            ) : (
              <Button
                variant="outline"
                onClick={() => setIsWalletModalOpen(true)}
                className="ml-4"
              >
                <Wallet />
                Add Wallet
              </Button>
            )}
          </nav>
        </div>
      </div>

      <WalletModal
        open={isWalletModalOpen}
        onOpenChange={setIsWalletModalOpen}
      />
    </header>
  );
}

export default Header;
