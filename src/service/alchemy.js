import {Network, Alchemy} from "alchemy-sdk"

const API_KEY = process.env.REACT_APP_ALCHEMY_API_KEY

export const alchemy = new Alchemy({
  apiKey: API_KEY,
  network: Network.ETH_MAINNET,
})

export const getAllNftsForCollection = (address, pageKey) => alchemy.nft.getNftsForContract(address, {omitMetadata: false, pageKey, pageSize: 20})