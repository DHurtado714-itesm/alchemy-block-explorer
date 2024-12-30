import { alchemy } from "../libs/alchemy";

export async function getLatestBlockNumber() {
  try {
    return await alchemy.core.getBlockNumber();
  } catch (error) {
    console.error(error);
  }
}
