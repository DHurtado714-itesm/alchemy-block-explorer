import { alchemy } from "../libs/alchemy";

export async function getLatestBlockNumber() {
  return await alchemy.core.getBlockNumber();
}
