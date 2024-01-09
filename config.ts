import { http, createConfig } from 'wagmi'
import { metaMask } from 'wagmi/connectors'
import { mainnet, goerli } from 'wagmi/chains'

export const config = createConfig({
  chains: [mainnet, goerli],
  connectors: [
    metaMask(),
  ],
  transports: {
    [mainnet.id]: http(),
    [goerli.id]: http(),
  },
})
