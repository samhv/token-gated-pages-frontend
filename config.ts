import { http, createConfig } from 'wagmi'
import { metaMask } from 'wagmi/connectors'
import { goerli } from 'wagmi/chains'

export const config = createConfig({
  chains: [goerli],
  connectors: [
    metaMask(),
  ],
  transports: {
    [goerli.id]: http(),
  },
})
