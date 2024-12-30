import { alchemy } from "@/libs/alchemy";
import { Hex, hexToBigInt, parseUnits } from "viem";

export interface TokenBalance {
  name: string;
  symbol: string;
  address: string;
  balance: bigint;
  logo: string;
  decimals: number;
}

interface TokenMetadata {
  name: string;
  symbol: string;
  logo: string;
  decimals: number;
}

export async function getTokensBalanceByAddress(
  address: string
): Promise<TokenBalance[]> {
  try {
    const balance = await alchemy.core.getTokenBalances(address);

    const tokens = balance.tokenBalances.map(async (token) => {
      const tokenMetadata = await getTokenMetadata(token.contractAddress);

      return {
        name: tokenMetadata.name,
        symbol: tokenMetadata.symbol,
        address: token.contractAddress,
        balance: parseUnits(
          hexToBigInt(token.tokenBalance! as Hex).toString(),
          Number(tokenMetadata.decimals)
        ),
        logo: tokenMetadata.logo,
        decimals: tokenMetadata.decimals,
      };
    });

    return Promise.all(tokens);
  } catch (error) {
    console.error("Error fetching tokens balance:", error);
    throw error;
  }
}

export async function getTokenMetadata(
  address: string
): Promise<TokenMetadata> {
  try {
    const token = await alchemy.core.getTokenMetadata(address);

    return {
      name: token.name || "",
      symbol: token.symbol || "",
      logo: token.logo || "",
      decimals: token.decimals || 0,
    };
  } catch (error) {
    console.error("Error fetching token metadata:", error);
    throw error;
  }
}
