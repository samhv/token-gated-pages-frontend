import { useConnect } from 'wagmi'

export function ConnetWalletButton() {
    const { connectors, connect } = useConnect()
    const connector = connectors[0]
    return  (
        <button className="border-2 border-black hover:opacity-70 active:opacity-80 transition px-4 py-2 rounded-md transition duration-100 ease-in-out" key={connector.uid} onClick={() => connect({ connector })}>
            Connect {connector.name}
        </button>
    )
}
