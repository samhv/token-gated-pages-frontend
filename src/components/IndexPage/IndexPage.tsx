import { ConnetWalletButton } from "../ConnetWalletButton"
import { ListOfPages } from "../ListOfPages"
import { useAccount } from 'wagmi'
import { ROUTES, useRoute } from "../RouteProvider"

export function IndexPage() {
    const { setRoute } = useRoute()
    const { isConnected } = useAccount()

    return (
        <div>
            <h1 className="text-3xl lg:text-4xl pb-1">
                NFT Gated Pages
            </h1>
            <p className="max-w-[800px] opacity-70">Access-gating app that allows users to create pages exclusively accessible by owners of specific NFTs. Imagine a world where owning a digital asset can grant you access to exclusive content, tailored just for you!</p>
            <ListOfPages />
            <div className="flex flex-col items-center justify-center mt-10">
                {isConnected
                    ? <button onClick={() => setRoute({
                        page: ROUTES.CREATE_PAGE,
                        params: {},
                    })} className="border-2 border-black hover:opacity-70 active:opacity-80 transition px-4 py-2 rounded-md transition duration-100 ease-in-out">
                        Create Page
                    </button>
                    : <ConnetWalletButton />
                }
                <a onClick={() => setRoute({
                    page: ROUTES.ABOUT,
                    params: {},
                })} className="hover:underline hover:opacity-70 hover:cursor-pointer mt-3">Go to Engineer Implementation</a>
            </div>
        </div>
    )
}
